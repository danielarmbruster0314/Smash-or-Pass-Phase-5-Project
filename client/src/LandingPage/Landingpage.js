import "./Landingpage.css";
import StatCard from './StatCards'




const food = [
  {emoji:"🍅", hueA:340,hueB: 10},
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

    
            {food.map(obj => (
                <StatCard emoji={obj.emoji} hueA={obj.hueA} hueB={obj.hueB} key={obj.emoji} />
            ))}
    

    <h1 className="bottom_passes">The Most Passes</h1> 


    {food.map(obj => (
        
                <StatCard emoji={obj.emoji} hueA={obj.hueA} hueB={obj.hueB} key={obj.emoji} />
            ))}


    </div>
)}



export default Landingpage