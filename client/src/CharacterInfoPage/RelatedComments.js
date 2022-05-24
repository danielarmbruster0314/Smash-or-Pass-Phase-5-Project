import './RelatedComments.css'
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'



function RelatedComments(){
    return (
        <motion.div
        className="related_comments"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div  >
            <p>hello kljsfnjsdfasdfiosadfoasdjfiojasdf</p>
          </div>
          <div  >
          <p>hi aslkfjaskdfsdjflasfdljalsfjlsajf</p>
          </div>
          <div  >
              <p>hi there asldfaosjdfjsafjasfoajsdoifjd</p>
         </div>
        </motion.div>
      );
    }
    
export default RelatedComments