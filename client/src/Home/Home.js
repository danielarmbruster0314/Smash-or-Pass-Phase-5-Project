import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { AccountContext } from "../Accountforum/AccountContext";
import React, { useContext } from "react";
import "./Home.css"



function Home(){
  const [animate, setAnimate] = useState(false)
  const navigate = useNavigate();
  



  return (
    <AnimatePresence>
          <div className="example-container">
            <motion.div layout className='home_button'>
            <motion.button
            
            style={{
              borderRadius: 90,
              boxShadow: '0px 0px 15px black',
              borderStyle: 'none',
              margin: '0 auto',
              cursor: 'pointer'
            }}
              whileHover={{ 
                scale: animate? null: 1.4,
                boxShadow: 'none'
               }}
              whileTap={{ scale: animate? null:0.9 }}
              initial={{
                opacity: 1,
                
              }}
              animate={{
                // y: animate? '-30vh': 0,
                // opacity: animate? '0.5' : 1,
                overflowY: animate? 'scroll': null,
                overflowX: 'none',
                minHeight: animate? '100vh': '150px',
                height: animate?'auto': null,
                height: animate? '100vh' : 150,
                width: animate? '100vw' : 150,
                backgroundColor: animate?  'rgba(0, 0, 0, 0.5)': 'white',
                color: animate? 'white' : 'black'
      
              }}
              transition={{
                duration: 2,
                type: 'spring',
                ease: "easeInOut",
              }}
              onClick={() => setAnimate(animate => !animate)}
              >
              
              <motion.img src="2.png" 
              layout
              style={{
                height: 130,
                width:130,
              }}
              animate={{
                 y: animate? '-5vh': 0,
                opacity: animate? 1 : 1,
                height: animate? 400 : 130,
                width: animate? 400 : 130,
                transition: {
                  // delay: animate? 0.5 : 0,
                  type: 'spring'
                }
              }}alt="no" />
            
              <motion.h1
              
              className='home_option'
              style={{ 
                backgroundImage: 'linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed)',
                boxShadow: '0 4px 15px 0 rgba(65, 132, 234, 0.75)'}}
               whileHover={{scale: 1.6, cursor: 'pointer', 
               }}
              animate={{
                display: animate? 'block': 'none',
                opacity: animate? 1 : 0,
                transition: {
                  delay: animate? 0.6 : 0,
                  type: 'spring'
                }
              }}
              onClick={()=>{navigate('/login')}}
              >💅 Sign In </motion.h1>

              <motion.h1
              className='home_option'
              style={{  
                backgroundImage: 'linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7)',
                boxShadow: '0 4px 15px 0 rgba(116, 79, 168, 0.75)'
              }}
              whileHover={{
                scale: 1.6, 
                cursor: 'pointer',
              }}
               
              animate={{
                display: animate? 'block': 'none',
                opacity: animate? 1 : 0,
                transition: {
                  delay: animate? 0.7 : 0,
                  type: 'spring'
                }
              }}
              onClick={()=>{navigate('/signup',true)}}
              >🤩 Sign Up</motion.h1>

              <motion.h1
              className='home_option'
              style={{
                backgroundImage: 'linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673)',
                boxShadow: '0 4px 15px 0 rgba(49, 196, 190, 0.75)'
              }}
               whileHover={{scale: 1.6, cursor: 'pointer'}}
               animate={{
                display: animate? 'block': 'none',
                opacity: animate? 1 : 0,
                transition: {
                  delay: animate? 0.8 : 0,
                  type: 'spring'
                }
              }}
              onClick={()=>navigate('/landingpage')}
              >🍵 The Tea</motion.h1>

              <motion.h1
               className='home_option'
               style={{
                backgroundImage: 'linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19)',
                boxShadow: '0 4px 15px 0 rgba(229, 66, 10, 0.75)'
                }}
               whileHover={{
                 scale: 1.6, 
                 cursor: 'pointer'}}
              animate={{
                display: animate? 'block': 'none',
                opacity: animate? 1 : 0,
                transition: {
                  delay: animate? 0.9 : 0,
                  type: 'spring'
                }
              }}
              onClick={()=>navigate('/swipe')}
              >👅 Daily Swipe</motion.h1>
            </motion.button>
            </motion.div>
          </div>
   
      
    </AnimatePresence>
  )}
  export default Home