
import './App.css';
import Home from'./Home/Home.js'
import Deck from './Deck/Deckofoptions.js'
import Landingpage from './LandingPage/Landingpage'
import Characterpage from './CharacterInfoPage/CharacterPage';
import {AccountBox} from './Accountforum/Accountform.js'
import { Routes, Route } from "react-router-dom";
import Navigation from './Navigation/Navigation';
import {useState, useEffect} from 'react'
import ProfilePage from './ProfilePage/ProfilePage'
function App() {
const [user, setUser] = useState(null)
	const signup = true
	useEffect(() => {
		fetch('/me')
		.then((r) => {
		if (r.ok){
            r.json().then((user) => setUser(user))
          }else{
            r.json().then((error)=> console.log(error) )
          }})

	},[])
	
  return (
    <Routes>
		
			<>
				
				<Route path='*' element={<Home user={user} />}></Route>
				<Route path='/landingpage' element={<Landingpage user={user} setUser={setUser}/>}></Route>
				<Route path='/login' element={<AccountBox setUser={setUser} />}></Route>
				<Route path='/signup' element={<AccountBox signup={signup} setUser={setUser}/>}></Route>
				<Route path='/characterinfo' element={<Characterpage user={user} setUser={setUser}/>}></Route>
				<Route path='/swipe' element={<Deck user={user} setUser={setUser}/>}></Route>
				{user? (<Route path='/profile' element={<ProfilePage user={user} setUser={setUser}/>}></Route>) : null}
			</>
		</Routes>
  );
}

export default App;
