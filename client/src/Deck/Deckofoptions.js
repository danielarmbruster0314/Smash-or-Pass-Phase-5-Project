import { render } from 'react-dom'
import React, { useState, useEffect } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import {AnimatePresence, motion,} from 'framer-motion/dist/framer-motion'
import Card from './Card'
import './DeckofOptions.css'
import Navigation from '../Navigation/Navigation'



// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(10deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Deck({user, setUser}) {
  const [cards, setCards] = useState([])
  const [count, setCount] = useState(0)
  const [rightswipe, setRightSwipe] = useState(false)
  const [leftswipe, setLeftSwipe] = useState(false)
  const [empty, setEmpty] = useState(false)
  const background =  [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "transparent",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
  ];
  



  useEffect(() => {
    // Update the document title using the browser API
    if(user){
     fetch("/swipe", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id:user.id }),
      })
        .then((r) => {
          if (r.ok){
            r.json().then((data) => setCards(data))
          }else{
            r.json().then((error)=> console.log(error) )
          }
        })}else{
          fetch("/characters")
          .then((resp)=> resp.json())
          .then((characters)=> setCards(characters))
        }
  },[]);












function handleLeft(index){
const result = cards[index]
if(user){
  fetch("/ratings", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user_id:user.id, character_id:result.id,found_attractive: false }),
  })
  .then((r) => {
    if (r.ok){
      r.json().then((data) => {
                  console.log(data)
              })
    }else{
      r.json().then((error)=> console.log(error) )
    }
  })

}else if(count < 1){
  alert('please login in to participate none of this sessions swipes will be saved')
  setCount(2)
}
setLeftSwipe(true)
setRightSwipe(false)
}



 function handleRight(index){
  const result = cards[index]
  setRightSwipe(true)
  if(user){
    fetch("/ratings", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_id:user.id, character_id:result.id,found_attractive: true }),
    })
    .then((r) => {
      if (r.ok){
        r.json().then((data) => {
                    console.log(data)
                })
      }else{
        r.json().then((error)=> console.log(error) )
      }
    })
    console.log('somtheing could happen')
  }else if(count < 1){
    alert('please login in to participate none of this sessions swipes will be saved')
    setCount(2)
  }
  setRightSwipe(true)
  setLeftSwipe(false)
 }

function handleContinue(){
  if(user){
    fetch("/swipe", {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({ user_id:user.id }),
     })
       .then((r) => {
         if (r.ok){
           r.json().then((data) => setCards(data))
         }else{
           r.json().then((error)=> console.log(error) )
         }
       })}else{
         fetch("/characters")
         .then((resp)=> resp.json())
         .then((characters)=> setCards(characters))
       }
       setEmpty(false)
       setLeftSwipe(false)
       setRightSwipe(false)
       setTimeout(() => gone.clear() || set(i => to(i)),600)
}



function handleToggle(e,index,down){
  switch (e.detail) {
    case 1:
      break;
    case 2:
      set(i => {
        if (index !== i) return 
         const x = 0// When a card is gone it flys out left or right, otherwise goes back to zero
         const rot = 0// How much the card tilts, flicking it harder makes it rotate faster
        const scale =  1.4  // Active cards lift up a bit
        return { x, rot, scale, delay: undefined}})
      break;
    case 3:
      break;
    default:
      return;
  }
}

const classchangeright = rightswipe? 'transform right': null
const classchangeleft = leftswipe? 'transform left' : null
const classchangegone = empty? 'transform empty' : null


  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 
    // Direction should either point left or right
    //this shows the direction somone is seding the card 1 is to the right -1 is to the left
     if (!down )  console.log(xDir)
    // if(trigger) 
   
    if (!down && trigger) gone.add(index)
    // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    if (!down && trigger && dir === -1) handleLeft(index)
    if (!down && trigger && dir === 1) handleRight(index)
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.8: 1 // Active cards lift up a bit
    
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || setEmpty(true),600)//reseting cards after they are gone |set(i => to(i))|
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return(
    <>
    <div 
    style={{
      position: 'fixed',
      zIndex: '5',
      }}>
      <Navigation user={user} setUser={setUser}/>
    </div>
    <motion.div 
    
    
    className={`deckofcards ${classchangeright} ${classchangeleft} ${classchangegone}`}
    >
    
    {props.map(({ x, y, rot, scale }, i) => (
    <animated.div key={i}  style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      
      <animated.div 
      onClick={(e)=>handleToggle(e,i,scale)} {...bind(i)} 
      style={{ transform: interpolate([rot, scale], trans), 
      backgroundImage: `url(${cards[i].main_image}) `,
      backgroundSize: 'cover' ,
      imageRendering: 'auto',
      imageRendering: 'crisp-edges',
      
      
      }} className="deck_card">
      
      <Card card={cards[i]}/>
      </animated.div>
    </animated.div>
    
  ))}
  {empty? (
  <AnimatePresence>
    
  <motion.button  
   intiail={{
    opactiy: 0,
    display: 'hidden'
  }}
  whileHover={{
    scale: 1.6, 
    cursor: 'pointer',
    }}

    animate={{
    display: empty? 'block': 'none',
    opacity: empty? 1 : 0,
    transition: {
        delay: empty? 5 : 0,
        type: 'spring'
     }
    }}
  className="end_of_swipe"
  onClick={()=>handleContinue()}
 
  
  >Keep Swiping ?</motion.button>
  </AnimatePresence>) : null}
  </motion.div>
  </>
)}

export default Deck
