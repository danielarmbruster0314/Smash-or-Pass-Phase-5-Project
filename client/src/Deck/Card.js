import React, { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import './Card.css'
function Card(){
    const [isOpen, setIsOpen] = useState(false)
    

    function handleClick(e){
        if(isOpen === true){
            setIsOpen(false)
          }else if(e.detail === 2){
            setIsOpen(!isOpen)
            console.log('hi')
          }
          
    }
    return(
        <AnimatePresence>
        <motion.div 
        transition={{ layout: { duration: 1, type:'spring'}}}
        layout 
        style={{color:'white'}}
        onClick={(e)=>handleClick(e)}
        className="card_container"
         >
        <motion.p  
        layout 
        className="card_header" 
        style={{
          marginTop: '20px',
          height: '80px',
          textAlign: 'center',
          fontSize: '30px',
          fontWieght: 'bold'
        }}
          >This is where the character name go</motion.p>
        
          
        
        {isOpen ? (
        <motion.div 
         initial={{  y:50, opacity: 0 }}
         animate={{ y: 0, opacity: 1, 
        transition: {
          duration: 0.5,
          type: 'spring'
        }}}
        
         className="info_about_character"
        >
          <p>hi im exposed</p>
          <hr></hr>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </motion.div>
        ): null}  
        
        </motion.div>
        </AnimatePresence>
    
    )}


    export default Card