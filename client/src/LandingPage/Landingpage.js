import "./Landingpage.css";
import StatCard from './StatCards'
import Navigation from "../Navigation/Navigation";
import {useEffect,useState} from 'react';


const food = [
  {emoji:"🍅", url:'https://images-na.ssl-images-amazon.com/images/I/91lQppUeqGL.jpg',name: "Naruto"},
  {emoji:"🍊", url:'https://upload.wikimedia.org/wikipedia/en/f/f6/Spike_Spiegel_as_drawn_by_the_creators.jpg',name: "Spike"},
  {emoji:"🍋", url:'https://i.pinimg.com/originals/2c/e6/9f/2ce69f778ff4db4ca7fe62f9086ea4f4.jpg',name: "Black Hat"},
  {emoji:"🍐", url:'https://archives.bulbagarden.net/media/upload/thumb/7/78/150Mewtwo.png/375px-150Mewtwo.png',name: "Mewtwo"},
  {emoji:"🍏", url:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/10/Gojo-Jujutsu-Kaisen-Eyes-Uncovered.jpg',name: "Gojo"},
  {emoji:"🫐", url:'http://images2.fanpop.com/images/photos/2800000/Blue-wolfs-rain-2861185-315-400.jpg',name: "Blue"},
  {emoji:"🍆", url:'https://i.kym-cdn.com/photos/images/original/000/974/149/f82.png',name: "Dio"},
  {emoji:"🍇", url:'https://www.looper.com/img/gallery/demon-slayer-season-2-release-date-cast-and-plot-what-we-know-so-far/intro-1619485009.jpg',name: "Kyojuro Rengoku"}
];





function Landingpage({user, setUser}){
const[topSmashes, setTopSmashes] = useState(null)


    useEffect(() => {
        // Update the document title using the browser API
        fetch("/characters")
		.then((r) => {
			if (r.ok){
				r.json().then((data) => setTopSmashes(data))
			}else{
				r.json().then((error)=> console.log(error) )
			}
		})
      },[]);
    
return(
    <div className="landingpage_background">
        <Navigation user={user} setUser={setUser}/>
    <div className="landingpage">
           <h1 style={{fontFamily: 'Fredoka One', marginTop: '30px', fontSize: '50px', backgroundColor: 'green', borderRadius: '0px 0px 20px 20px'}}>The Most Smashes</h1> 

    
            {topSmashes?.map((character,index) => (
                <StatCard  image={character.main_image} key={character.id} name={character.name} index={index + 1} character={character}/>
            ))}
    
                <br></br>
    <h1 className="bottom_passes"
    style={{fontFamily: 'Fredoka One', fontSize: '50px', backgroundColor: 'red', borderRadius: '20px 20px 20px 20px'}}
    >The Most Passes</h1> 


    {food.map((obj,index) => (
        
                <StatCard emoji={obj.emoji} url={obj.url} key={obj.emoji} name={obj.name} index={index + 1}/>
            ))}

    </div>
    </div>
)}



export default Landingpage