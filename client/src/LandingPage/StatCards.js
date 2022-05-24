import "./StatCard.css";
import {AnimatePresence, motion, Variants} from 'framer-motion/dist/framer-motion'
import React, { useState } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;



function StatCard({ emoji, url, index }) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();
  return (
    <div className="card_page">
    <AnimatePresence>    
         <motion.div
         
        //  this is where we pass in the context of the character card they clicked
           onClick={()=>navigate('/characterinfo',{state:{id:1,name:'sabaoon'}})}


           onHoverStart={e => {setIsOpen(true)}}
           onHoverEnd={e => {setIsOpen(false)}}
         className="card-container"
         initial="offscreen"
         whileInView="onscreen"
        //  viewport={{ once: true, amount: 0.8 }}
         >
            <div className="splash"  />
            <motion.div className="card"   whileHover={{scale: 1.14, }}variants={cardVariants} style={{backgroundImage: `url(${url}) `}}>
              {isOpen? (
              <motion.div
              className='card_stats'
              initial={{  y:-10,opacity: 0 }}
              animate={{ 
              opacity: 1, 
              y: 0,
            transition:{
              delay: 0.2
            } }}
              exit={{ opacity: 0 }}>
    
              <ProgressBar style={{width: 'auto',height: '50px'}} >
                <ProgressBar  variant="success" now={35} key={1} label={'Smashed 35%'}/>
                <ProgressBar  variant="danger" now={65} key={3} label={'passed 65%'}/>
              </ProgressBar>
                <p> #{index} Name: naruto</p>
                </motion.div>
                ):null}
                {/* <motion.h6>character name</motion.h6> */}
                {/* {emoji} */}
            </motion.div>
         </motion.div>
    </AnimatePresence>
    </div>
  );
}

export default StatCard






