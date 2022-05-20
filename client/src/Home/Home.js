import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Home.css"



function Home(){
  
  const [animate, setAnimate] = useState(false)
  const navigate = useNavigate();
  return (
    <AnimatePresence>
          <div className="example-container">
            <div className='home_button'>
            <motion.button
            style={{
              borderRadius: 90,
              boxShadow: '0px 0px 15px black',
              borderStyle: 'none',
              margin: '0 auto'
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
              
              <motion.img src="2.png" style={{
                height: 130,
                width:130,
        
              }}
              animate={{
                 y: animate? '-5vh': 0,
                opacity: animate? 1 : 1,
                height: animate? 400 : 130,
                width: animate? 400 : 130,
                transition: {
                  delay: animate? 0.5 : 0,
                  type: 'spring'
                }
              }}alt="no" />
            
              <motion.h1
               whileHover={{scale: 1.6, cursor: 'pointer'}}
              animate={{
                display: animate? 'block': 'none',
                opacity: animate? 1 : 0,
                transition: {
                  delay: animate? 0.6 : 0,
                  type: 'spring'
                }
              }}
              >sign in </motion.h1>

              <motion.h1
               whileHover={{scale: 1.6, cursor: 'pointer'}}
              animate={{
                display: animate? 'block': 'none',
                opacity: animate? 1 : 0,
                transition: {
                  delay: animate? 0.7 : 0,
                  type: 'spring'
                }
              }}
              >sign up</motion.h1>
              <motion.h1
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
              >check out the tea</motion.h1>
              <motion.h1
               whileHover={{scale: 1.6, cursor: 'pointer'}}
              animate={{
                display: animate? 'block': 'none',
                opacity: animate? 1 : 0,
                transition: {
                  delay: animate? 0.9 : 0,
                  type: 'spring'
                }
              }}
              onClick={()=>navigate('/swipe')}
              >Daily swipe</motion.h1>
            </motion.button>
            </div>
          </div>
   
      
    </AnimatePresence>
  )}
  export default Home