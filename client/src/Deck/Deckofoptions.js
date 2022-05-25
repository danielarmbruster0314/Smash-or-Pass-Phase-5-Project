import { render } from 'react-dom'
import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import Card from './Card'
import './DeckofOptions.css'
import Navigation from '../Navigation/Navigation'

const cards = [
  'data:image/jpeg;base64,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',
  'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
  'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
  'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
  'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/91lQppUeqGL.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/91lQppUeqGL.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/91lQppUeqGL.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/91lQppUeqGL.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/91lQppUeqGL.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/91lQppUeqGL.jpg'
]
function handleclick(){
  console.log('hello')
}
// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(10deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Deck() {




function handleToggle(e,index,down){
  handleclick()
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





  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 
    // Direction should either point left or right
    //this shows the direction somone is seding the card 1 is to the right -1 is to the left
    if (!down && trigger) gone.add(index)
    // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    console.log(gone)
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.8: 1 // Active cards lift up a bit
    
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)//reseting cards after they are gone
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return(
    <>
    <div style={{position: 'fixed',
    zIndex: '5',
  }}>
      <Navigation />
    </div>
    <div className='deckofcards'>
   
    {props.map(({ x, y, rot, scale }, i) => (
    <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      
      <animated.div 
      onClick={(e)=>handleToggle(e,i,scale)} {...bind(i)} 
      style={{ transform: interpolate([rot, scale], trans), 
      backgroundImage: `url(${cards[i]}) `,
      backgroundSize: 'cover' ,
      imageRendering: 'auto',
      imageRendering: 'crisp-edges',
      
      
      }} >
      <Card />
      </animated.div>
    </animated.div>
  ))}
  </div>
  </>
)}

export default Deck
