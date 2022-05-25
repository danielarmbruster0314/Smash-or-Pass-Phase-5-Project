import './Characterpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import {useState, useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import Messages from './Messages';
import {useLocation} from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Navigation from "../Navigation/Navigation";

const data = [
    {
     image: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg', 
     caption:"Caption",
     description:"Description Here"
    },
    {
        image: 'https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png/revision/latest?cb=20210223094656', 
      caption:"Caption",
      description:"Description Here"
     },
     {
        image: 'https://cdn.staticneo.com/w/naruto/Nprofile2.jpg', 
      caption:"Caption",
      description:"Description Here"
     } 
  ]
  

  




function Characterpage(){
    const location = useLocation();

    




    //this is where we can break down the passed state from the navigation link
    console.log(location.state)


    const allIngredients = [
        { id: 0, icon: "😃", label: "Most Validated" },
        { id: 1,icon: "😖", label: "Most Invalidated" },
        { id: 2,icon: "👀", label: "Discover" }
      ];
    const [most, lettuce, cheese] = allIngredients;
    const tabs = [most, lettuce, cheese];
    
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

   console.log(selectedTab)

    return(
    <>
    <div style={{position: 'fixed',
zIndex: '5'}}>
    <Navigation />
    </div>
        <div className='characterpage_background'>
            
            <div className="characterpage">
                <div className="characterinfo">

                    <ProgressBar style={{width: 'auto',height: '50px'}} >
                        <ProgressBar  variant="success" now={35} key={1} label={'Smashed 35% '} />
                        <ProgressBar  variant="danger" now={65} key={3} label={'passed 65% '}/>
                    </ProgressBar>
                    <div className="amount_of_smashes_or_passes">
                        <p>what</p>
                        <p>why</p>
                    </div>





                    {/* character bio will go here */}
                    <h1>The Rundown</h1>
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="characterimages">
                    <div className='character_image_container'>

                    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} >
                            {data.map((slide, i) => {
                                return (
                                <Carousel.Item>        
                                <img
                                
                                className="d-block w-100"
                                src={slide.image}
                                alt="slider image"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                                )
                            })}
                            
                            </Carousel>
                    </div>
                </div>
            </div>
            <div className="comments">

                    <div className="window">
                            <nav>
                                <ul className='ul_items'>
                                {tabs.map((item, index) => (
                                    <li
                                    id='List_items'
                                    key={item.label}
                                    className={item.id === selectedTab.id ? "selected" : ""}
                                    onClick={() => {setSelectedTab(item)
                                    console.log(item)
                                    console.log(selectedTab)
                                    }}
                                    >
                                    {`${item.icon} ${item.label}`}
                                    {item.id === selectedTab.id ? (
                                        <motion.div className="underline" layoutId="underline" />
                                    ) : null}
                                    </li>
                                ))}
                                </ul>
                            </nav>
                            <main className='main'>
                                <AnimatePresence exitBeforeEnter>
                                <motion.div
                                    key={selectedTab ? selectedTab.label : "empty"}
                                    animate={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <motion.forum>
                                        <motion.input typ='textarea' placeholder="Add to the Disccusion, Wheter It be Advocating for this characters attractivness or personality or Critique the consensus"/>
                                     </motion.forum>
                                    {selectedTab ? (
                                        <Messages />
                                        // where to return the mapped assorted messages
                                    ) : "😋"}
                                </motion.div>
                                </AnimatePresence>
                            </main>
                        </div>















                

            </div>

        </div>
    </>
        )}



        export default Characterpage