import "./StatCard.css";
import {AnimatePresence, motion, Variants} from 'framer-motion/dist/framer-motion'


const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: 10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;



function StatCard({ emoji, hueA, hueB }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <div className="card_page">
    <AnimatePresence>    
         <motion.div
         className="card-container"
         initial="offscreen"
         whileInView="onscreen"
         viewport={{ once: true, amount: 0.8 }}
         >
            <div className="splash"  />
            <motion.div className="card"   whileHover={{scale: 1.1}}variants={cardVariants}>
                {emoji}
            </motion.div>
         </motion.div>
    </AnimatePresence>
    </div>
  );
}

export default StatCard