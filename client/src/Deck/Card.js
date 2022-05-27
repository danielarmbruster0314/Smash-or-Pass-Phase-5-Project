import React, { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import './Card.css'
function Card({card}){
    const [isOpen, setIsOpen] = useState(false)

    function handleClick(e){
        if(isOpen === true){
            setIsOpen(false)
          }else if(e.detail === 2){
            setIsOpen(!isOpen)
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
          fontSize: '40px',
          fontWieght: 'bold',
          padding: '12.5px 0px'
        }}
          >{card?.name}</motion.p>
        
          
        
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
          <p style={{fontWeight: 'bold'}}>{card?.origin}</p>
          <hr></hr>
          <p style={{paddingBottom: '40px'}}>{card?.role}</p>
        </motion.div>
        ): null}  
        
        </motion.div>
        </AnimatePresence>
    
    )}


    export default Card