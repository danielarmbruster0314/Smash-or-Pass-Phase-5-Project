import React, { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'

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
         >
        <motion.h1  className="card_header" style={{backgroundColor: 'rgba(0,0,0,.5)'}}>This is where the character name go</motion.h1>
        
          
        
        {isOpen ? (
        <motion.div 
         initial={{  opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         className="info_about_character"
        >
          <p>hi im exposed</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </motion.div>
        ): null}  
        
        </motion.div>
        </AnimatePresence>
    
    )}


    export default Card