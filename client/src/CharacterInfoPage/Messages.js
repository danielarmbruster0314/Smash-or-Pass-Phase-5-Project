import './Messages.css'
import {useState} from 'react';
import {AnimateSharedLayout,AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import RelatedComments from './RelatedComments';
import Avatar from '@mui/material/Avatar';

const items = [0, 1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15];
function Messages(){
    return (
        <AnimateSharedLayout>
          <motion.ul className="messages_ul" layout initial={{ borderRadius: 25 }}>
            {items.map(item => (
              <Item key={item} />
            ))}
          </motion.ul>
        </AnimateSharedLayout>
      );
    }

    function Item() {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleOpen = () => setIsOpen(!isOpen);
      
        return (
          <motion.div className="messages_li" style={{}} layout onClick={()=>setIsOpen(true)} onDoubleClick={()=>setIsOpen(false)}  initial={{ borderRadius: 10 }}>
            <motion.div className="avatar" layout />
            <motion.div className='message_container'>
            <Avatar />
            <motion.p className="message_text">hello jhfsjdfajkshfkasfksdhjfaksfkasjdf asjdfhasjkhfkasdhfj asjdlfhajksdfhkjasdhfk asjkldfhajksdhfkjsdhfk jksfhkasdhfkjsd kjhsdfkjahdkjfh  sdfhaiusdfuaisdfbas aisdfuhasidfhuasdfi aisdghfiuasdfhuiashf aisdufhiaushfuiashif asdhfuiashfuashdi aisudhfiuashfiuasdhf iasdhfiuahsdfuihasd idhfiuashdfuihd </motion.p>
            </motion.div>
            <AnimatePresence>
              <motion.div>
              {isOpen ? ( 
                <>
              <RelatedComments />
              <motion.forum>
                <motion.input typ='textarea' placeholder="Elaborate on this"/>
              </motion.forum></>): null}
              </motion.div>
              
            </AnimatePresence>
        
          </motion.div>
        );
      }


      

export default Messages