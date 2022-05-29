import './Messages.css'
import {useState} from 'react';
import {AnimateSharedLayout,AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import RelatedComments from './RelatedComments';
import Avatar from '@mui/material/Avatar';
import { positions } from '@mui/system';

const items = [0, 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function Messages({posts}){


    return (
        <AnimateSharedLayout>
          <motion.ul className="messages_ul" layout initial={{ borderRadius: 25 }}>
            {posts.map(post => (
              <Item key={post.id} content={post.content} postid={post.id} user={post.user} validations={post.totalvalidations}/>
            ))}
          </motion.ul>
        </AnimateSharedLayout>
      );
    }












    function Item({content, postid, user, validations}) {
        const [isOpen, setIsOpen] = useState(false);
        let [text , setText] = useState('')


        let swear = [
          'chink',
          'nigger',
          'niger',
          'nigg3r',
          'fag',
          'faggot',
          'cunt',
          'bollocks',
          'bugger',
          'bullshit',
          'crap',
          'damn',
          'frigger',
          ]
        
        function handleSubmit(e){
          if(e.keyCode == 13 && e.shiftKey == false){
          e.preventDefault();
          const foundSwears = swear.filter(word => text.toLowerCase().includes(word.toLowerCase()));
          if(foundSwears.length){
            alert(`we do not allow these words in messages or posts   (${foundSwears})`);
             } else if (text.length){
            console.log('No bad word found');
           }
          }
        }





        const toggleOpen = () => setIsOpen(!isOpen);
      
        return (
          <motion.div className="messages_li" style={{}} layout    initial={{ borderRadius: 10 }}>
            <motion.div className="avatar" layout />
            <motion.div className='message_container'>
            <div style={{
              position: 'relative'
            }}>
              <span
              style={{
                display: 'flex',
                fontSize: '14px',
                justifyContent: 'space-evenly'
              }}>
                {validations} :<em>validations</em>
                {validations} :<em>validations</em>
              </span>
            <motion.button
            className="validate_button"
            style={{
              borderRadius: '10px',
              outline: 'none',
              position: 'absolute',
              top: '-27px',
              right: '155px',
              border: 'none',
              opacity: .8
            }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: 'none',
              opacity: 1
              }}

            
            >🔥 Validate</motion.button>
            <motion.button
            className="invalidate_button"
            style={{
              borderRadius: '10px',
              backgroundColor: 'green',
              outline: 'none',
              position: 'absolute',
              top: '-27px',
              right: '0px',
              border: 'none',
              opacity: .8
            }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: 'none',
              opacity: 1
              }}
            
            
            >💧 Invalidate</motion.button>
            </div>
            <Avatar src={user?.image}/>
            <motion.p 
            className="message_text" 
            onClick={()=>setIsOpen(!isOpen)}>
              {content}</motion.p>
            </motion.div>
            
            <AnimatePresence>
              <motion.div>
              {isOpen ? ( 
                <>
              <RelatedComments />
              <motion.form >
                <motion.textarea 
                className='related_comment_input' 
                type='text' 
                onKeyDown={(e)=>handleSubmit(e)} 
                onChange={e => setText(e.target.value) }
                value={text}
                placeholder="Elaborate on this topic..."/>
                <button style={{display:'none'}} type="submit">Send</button>
              </motion.form>
              </>): null}
              </motion.div>
              
            </AnimatePresence>
        
          </motion.div>
        );
      }


      

export default Messages