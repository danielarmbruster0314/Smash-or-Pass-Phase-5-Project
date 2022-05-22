import "./Landingpage.css";
import StatCard from './StatCards'




const food = [
  {emoji:"🍅", url:'https://images-na.ssl-images-amazon.com/images/I/91lQppUeqGL.jpg'},
  {emoji:"🍊", hueA:20, hueB:40},
  {emoji:"🍋", hueA:60, hueB:90},
  {emoji:"🍐", hueA:80, hueB:120},
  {emoji:"🍏", hueA:100,hueB: 140},
  {emoji:"🫐", hueA:205,hueB: 245},
  {emoji:"🍆", hueA:260,hueB: 290},
  {emoji:"🍇", hueA:290,hueB: 320}
];





function Landingpage(){


    
return(
    <div className="landingpage">
           <h1>The Most Smashes</h1> 

    
            {food.map((obj,index) => (
                <StatCard emoji={obj.emoji} url={obj.url} key={obj.emoji} index={index + 1}/>
            ))}
    

    <h1 className="bottom_passes">The Most Passes</h1> 


    {food.map(obj => (
        
                <StatCard emoji={obj.emoji} url={obj.url} key={obj.emoji} />
            ))}


    </div>
)}



export default Landingpage