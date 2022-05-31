import './Characterpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import {useState, useEffect} from 'react';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import Messages from './Messages';
import {useLocation} from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Navigation from "../Navigation/Navigation";
import { border, borderRadius, height } from '@mui/system';
import  {Item}  from './Messages';
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
  

  




function Characterpage({user,setUser}){
    const location = useLocation();
    const[openInput ,setOpenInput] = useState(false)
    const [postInput, setPostInput] = useState(null)
    const [mostValidated, setMostValidated] = useState(null)
    const [mostInValidated, setMostInValidated] = useState(null)
    const [discover, setDiscover] = useState(null) 
    const [newPost, setNewPost] = useState(null)


    useEffect(() => {
        // Update the document title using the browser API
        if(location.state){
            const id = location.state.id
            fetch("/topthoughts", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            })
            .then((r) => {
                if (r.ok){
                    r.json().then((posts) => setMostValidated(posts))
                }else{
                    r.json().then((error)=> console.log(error) )
                }
            })
            fetch("/bottomthoughts", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            })
            .then((r) => {
                if (r.ok){
                    r.json().then((posts) => setMostInValidated(posts))
                }else{
                    r.json().then((error)=> console.log(error) )
                }
            })
            fetch("/randomthoughts", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            })
            .then((r) => {
                if (r.ok){
                    r.json().then((posts) => setDiscover(posts))
                }else{
                    r.json().then((error)=> console.log(error) )
                }
            })
    }
      },[]);
    



    //this is where we can break down the passed state from the navigation link
    


    const allIngredients = [
        { id: 0, icon: "😃", label: "Most Validated", posts: mostValidated },
        { id: 1,icon: "😖", label: "Most Invalidated" , posts: mostInValidated},
        { id: 2,icon: "👀", label: "Discover", posts: discover }
      ];
    const [most, lettuce, cheese] = allIngredients;
    const tabs = [most, lettuce, cheese];
    
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };


    function handleOpen(){
        setOpenInput(true)
    }

    function handleClose(){
        setOpenInput(false)
    }
const totalrating= location.state?.totalsmashes + location.state?.totalpasses
const percentpasses = (location.state?.totalpasses / totalrating) * 100
const percentsmashes = (location.state?.totalsmashes / totalrating) * 100


let swear = [
    'chink',
    'ch1nk',
    'nigger',
    'niger',
    'nigg3r',
    'n1gger',
    'n1gg3r',
    'fag',
    'faggot',
    'cunt',
    'frigger',
    ]

function handlePost(){
    const foundSwears = swear.filter(word => postInput.toLowerCase().includes(word.toLowerCase()));
    if(foundSwears.length){
            alert(`we do not allow these words in messages or posts   (${foundSwears})`);
    }else if(user){
        const data ={
            character_id: location.state?.id,
            user_id: user?.id,
            content: postInput
        }
        fetch("/thoughts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((r) => {
            if (r.ok){
                r.json().then((data) => {
                    console.log(data)
                  setNewPost(data)
                })
            }else{
                r.json().then((error)=> console.log(error) )
            }
        })
    }else{
        alert('please be signed in to make a post')
    }


}

    
    return(
    <>
    <div style={{position: 'fixed',
zIndex: '5'}}>
    <Navigation user={user} setUser={setUser}/>
    </div>
        <div className='characterpage_background'>
            
            <div className="characterpage">
                <div className="characterinfo">

                    <ProgressBar style={{width: 'auto',height: '50px'}} >
                        <ProgressBar  variant="success" now={percentsmashes} key={1} label={`Smashed ${percentsmashes}% `} />
                        <ProgressBar  variant="danger" now={percentpasses} key={3} label={`passed ${percentpasses}% `}/>
                    </ProgressBar>
                    <div className="amount_of_smashes_or_passes">
                        <p><em>smashes: {location.state?.totalsmashes}</em></p>
                        <p><em>passes: {location.state?.totalpasses}</em></p>
                    </div>





                    {/* character bio will go here */}
                    <h1>The Rundown</h1>
                    <h2 style={{textAlign:'center'}}>{location.state?.name}</h2>
                    <hr></hr>
                    <p>{location.state?.bio}
                    </p>
                </div>
                <div className="characterimages">
                    <div className='character_image_container'>

                    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} >
                            
                                <Carousel.Item>        
                                <img
                                
                                className="d-block w-100"
                                src={location.state?.slide_image_1}
                                alt="slider image"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>        
                                <img
                                
                                className="d-block w-100"
                                src={location.state?.slide_image_2}
                                alt="slider image"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>        
                                <img
                                
                                className="d-block w-100"
                                src={location.state?.slide_image_3}
                                alt="slider image"
                                />
                                <Carousel.Caption>
                                </Carousel.Caption>
                            </Carousel.Item>
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
                                    <motion.div 
                                    layout 
                                    className='input_container'
                                    style={{margin:'40px auto', cursor: 'pointer'}}
                                    initial={{
                                        height:90,
                                        width:90
                                    }}
                                    animate={{
                                        overflowY: openInput? 'hidden': null,
                                        overflowX: 'none',
                                        width: openInput? '100%': 90 ,
                                        height: openInput? 600 : 90 ,
                                       
                                       backgroundColor: openInput?  'white': 'rgb(0,0,0,.5)',
                                       color: openInput? 'white' : 'black',
                                       borderRadius: openInput? null : '90px'
                                       }}
                   
                                       transition={{
                                       duration: openInput? .5 : 2,
                                       type: 'spring',
                                       ease: "easeInOut",
                                       }}
                                    
                                    >
                                        <motion.span
                                        onClick={() => handleOpen()}
                                        style={{
                                            fontSize: '30px',
                                            position: 'relative',
                                            top: '-95px',
                                            color: 'transparent', 
                                            textShadow: '0 0 0 white',
                                            width: '90px',
                                            height: '90px'
                                        }}
                                        animate={{
                                            display: openInput? 'none' : 'inline', 
                                            opacity: openInput? 0 : 1,
                                        }}
                                        transition={{
                                            duration: 2,
                                            type: 'spring',
                                            ease: "easeInOut",
                                            delay: openInput? null: 0.7
                                            }}
                                        >➕</motion.span>
                                        <motion.forum 
                                        layout
                                        animate={{
                                            display: openInput? 'inline-block': 'none'     
                                        }}
                                     
                                        >
                                            <motion.textarea
                                            initial={{
                                                opacity: 0,
                                                width: '90px',
                                                height: '90px'
                                            }}
                                            animate={{
                                                opacity: openInput? 1 : 0,
                                                width: openInput? '80vw' : 0,
                                                height: openInput? '400px' : 0
                                            }}
                                            transition={{
                                                delay: .7,
                                                ease: 'easeIn'
                                            }}
                                            layout
                                            onChange={(e)=> setPostInput(e.target.value)}
                                                 className="input_bar_for_thought"
                                                 style={{color: 'white', padding: '15px'}}
                                                 typ='textarea' 
                                                 placeholder="Add to the disccusion, whether it be advocating for this characters attractiveness or personality or critique the consensus"/>
                                                 <motion.div className='form_buttons'
                                                 initial={{
                                                     opacity: 0
                                                 }}
                                                 animate={{
                                                     opacity: openInput? 1: 0
                                                 }}
                                                 transition={{
                                                     duration: openInput? .5 : 0
                                                 }}>
                                                    <motion.button 
                                                    
                                                    onClick={() => handleClose()}>
                                                     ❌
                                                    </motion.button>
                                                    <motion.button 
                                                    onClick={()=>handlePost()}
                                                    style={{
                                                        fontSize: '30px',
                                                        color: 'transparent',  
                                                        textShadow: '0 0 0 green'
                                                        }}>
                                                    ✔️
                                                    </motion.button>
                                                 </motion.div>
                                         </motion.forum>
                                     </motion.div>
                                    {newPost? 
                                    (<div>
                                        <h2>Recently Created Post</h2>
                                        <hr></hr>
                                        <div className='new_post'>
                                            <Messages posts={[newPost]} loggedInUser={user} />
                                       
                                        </div>
                                    </div>): null }
                                    {selectedTab ? (
                                        <Messages posts={selectedTab.posts} loggedInUser={user}/>
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