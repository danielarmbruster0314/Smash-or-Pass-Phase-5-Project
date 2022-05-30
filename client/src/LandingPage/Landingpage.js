import "./Landingpage.css";
import StatCard from './StatCards'
import Navigation from "../Navigation/Navigation";
import {useEffect,useState} from 'react';






function Landingpage({user, setUser}){
const[topSmashes, setTopSmashes] = useState(null)
const[topPasses, setTopPasses] = useState(null)

    useEffect(() => {
        // Update the document title using the browser API
        fetch("/topsmashes")
		.then((r) => {
			if (r.ok){
				r.json().then((data) => setTopSmashes(data))
			}else{
				r.json().then((error)=> console.log(error) )
			}
		})
        fetch("/toppasses")
		.then((r) => {
			if (r.ok){
				r.json().then((data) => setTopPasses(data))
			}else{
				r.json().then((error)=> console.log(error) )
			}
		})
      },[]);
    
return(
    <div className="landingpage_background">
        <div className='navbar'>
        <Navigation user={user} setUser={setUser}/>
        </div>
    <div className="landingpage">
           <h1 style={{fontFamily: 'Fredoka One', marginTop: '30px', fontSize: '50px', backgroundColor: 'green', borderRadius: '0px 0px 20px 20px'}}>The Most Smashes</h1> 

    
            {topSmashes?.map((character,index) => (
                <StatCard  image={character.main_image} key={character.id} name={character.name} index={index + 1} character={character}/>
            ))}
    
                <br></br>
    <h1 className="bottom_passes"
    style={{fontFamily: 'Fredoka One', fontSize: '50px', backgroundColor: 'red', borderRadius: '20px 20px 20px 20px'}}
    >The Most Passes</h1> 


        {topPasses?.map((character,index) => (
                <StatCard  image={character.main_image} key={character.id} name={character.name} index={index + 1} character={character}/>
            ))}

    </div>
    </div>
)}



export default Landingpage