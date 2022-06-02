import './RelatedComments.css'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import Avatar from '@mui/material/Avatar';


function RelatedComments({comment, user}){
    return (
        <motion.div
        className="related_comments"
          layout
          initial={{ opacity: 0, x:-60 }}
          animate={{ opacity: 1, x:0 
          }}
          transition={{
            delay: .6,
            type: 'spring',
            ease: "easeInOut",
            }}
          exit={{ opacity: 0 }}
        >
          <div style={{display: 'flex', gap: '20px'}}>
          <Avatar src={user?.image}/>
          <em style={{color: '#888'}}>{user?.username}</em>
          </div>
          <div>
            <p>{comment}</p>
          </div>
          
        </motion.div>
      );
    }
    
export default RelatedComments