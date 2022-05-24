import './Characterpage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import {useState} from 'react';
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

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };



    return(
        <div className='characterpage_background'>
            <div className="characterpage">
                <div className="characterinfo">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="characterimages">
                    <div className='character_image_container'>

                    <Carousel activeIndex={index} onSelect={handleSelect}>
                            {data.map((slide, i) => {
                                return (
                                <Carousel.Item>        
                                <img
                                className="d-block w-100"
                                src={slide.image}
                                alt="slider image"
                                />
                                <Carousel.Caption>
                                <h3>{slide.caption}</h3>
                                <p>{slide.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                                )
                            })}
                            
                            </Carousel>
                    </div>
                </div>
            </div>
            <div className="comments">

            </div>

        </div>
    
        )}



        export default Characterpage