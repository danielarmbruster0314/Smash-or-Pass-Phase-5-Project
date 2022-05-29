import './RelatedComments.css'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import Avatar from '@mui/material/Avatar';


function RelatedComments({comment, user}){
  console.log(user)
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
          <Avatar src={user?.image}/>
          <div  >
            <p>{comment}</p>
          </div>
          
        </motion.div>
      );
    }
    
export default RelatedComments