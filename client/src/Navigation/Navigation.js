import './Navigation.css'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import { Popup } from 'semantic-ui-react'
import Avatar from '@mui/material/Avatar';
import { textAlign } from '@mui/system';

function Navigation({user,setUser}){
    const [animate, setAnimate] = useState(false)
    const navigate = useNavigate();


    function hadnleLogout(){
        fetch("/logout", { method: "DELETE" })
        .then((r) => {
            if (r.ok) {
              setUser(null);
              navigate('/logout')
            }
          });
    }







return(
    <AnimatePresence>
        <div className="nav_container">
            <motion.div layout className='nav_button' >
                 <motion.button
        
                    style={{
                        borderRadius: 90,
                        boxShadow: '0px 0px 15px black',
                        borderStyle: 'none',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        position: 'fixed',
                        top: '20px',
                        right: '20px'
                    }}

                    whileHover={{ 
                    scale: animate? null: 1.4,
                    boxShadow: 'none',
                    opacity: 1
                    }}

                     whileTap={{ scale: animate? null:0.9 }}

                    initial={{
                    opacity: .7,
                    }}

                    animate={{
                     overflowY: animate? 'scroll': null,
                     overflowX: 'none',
                     height: animate? 590 : 150,
                    width: animate? 150 : 150,
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
            <div style={{
                backgroundColor: 'transparent',
                padding: '5px'
                }}>

                <motion.div src="2.png" 
                    layout

                    style={{
                    height: 130,
                    width:130,
                    }}

                    animate={{
                    opacity: animate? 1 : 0.7,
                    transition: {
                        type: 'spring'
                    }
                    }}

                     ><Avatar  
                     style={{
                         height: '100%', 
                         width: '100%',
                         margin: '0 auto'
                        }}
                    src={user?.image}
                    
                    />
                    </motion.div>
        </div>

        <Popup content='Home'  trigger={
            <motion.h1
        
            className='home_option'

            style={{ 
            backgroundImage: 'linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed)',
            boxShadow: '0 4px 15px 0 rgba(65, 132, 234, 0.75)',
            height: '80px',
            width: '80px',
            borderRadius: '50%',
            margin: '8px auto',
            padding: '10px'
            }}
            
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

            onClick={()=>{navigate('/')}}
            >🏠</motion.h1>
        } />  





        <Popup content='Profile' trigger={ 
                <motion.h1
                     className='home_option'

                     style={{  
                     backgroundImage: 'linear-gradient(to right, #667eea, #764ba2, #6B8DD6, #8E37D7)',
                     boxShadow: '0 4px 15px 0 rgba(116, 79, 168, 0.75)',
                     height: '80px',
                     width: '80px',
                     borderRadius: '50%',
                     margin: '8px auto',
                     padding: '10px'
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
            > 😎</motion.h1>
        } /> 

        <Popup content='The Tea' trigger={ 
            <motion.h1
                className='home_option'

                style={{
                backgroundImage: 'linear-gradient(to right, #25aae1, #40e495, #30dd8a, #2bb673)',
                boxShadow: '0 4px 15px 0 rgba(49, 196, 190, 0.75)',
                height: '80px',
                width: '80px',
                borderRadius: '50%',
                margin: '8px auto',
                padding: '10px'
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

             ><span style={{fontSize: '45px'}}>🧋</span>
            </motion.h1>
         } />

        <Popup content='Daily Swipes' trigger={ 
            <motion.h1
                 className='home_option'

                 style={{
                 backgroundImage: 'linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19)',
                 boxShadow: '0 4px 15px 0 rgba(229, 66, 10, 0.75)',
                 height: '80px',
                 width: '80px',
                 borderRadius: '50%',
                 margin: '8px auto',
                 padding: '10px'
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
            >👅 </motion.h1>
         } />
         <Popup content='Logout' trigger={ 
                <motion.h1
                    className='home_option'

                    style={{
                    backgroundImage: 'linear-gradient(to right, #eb3941, #f15e64, #e14e53, #e2373f)',
                    boxShadow: '0 5px 15px rgba(242, 97, 103, .4)',
                    height: '80px',
                    width: '80px',
                    borderRadius: '50%',
                    margin: '8px auto',
                    padding: '10px'
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

                    onClick={()=>hadnleLogout()}
        >✌</motion.h1>
            } />
            
      </motion.button>
      </motion.div>
    </div>


</AnimatePresence>
)}



export default Navigation