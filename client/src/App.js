
import './App.css';
import Home from'./Home/Home.js'
import Deck from './Deck/Deckofoptions.js'
import Landingpage from './LandingPage/Landingpage'
import Characterpage from './CharacterInfoPage/CharacterPage';
import {AccountBox} from './Accountforum/Accountform.js'
import { Routes, Route } from "react-router-dom";
import Navigation from './Navigation/Navigation';
import {useState} from 'react'
import ProfilePage from './ProfilePage/ProfilePage'
function App() {
const [user, setUser] = useState(null)
	const signup = true
  return (
    <Routes>
		
			<>
				
				<Route path='*' element={<Home user={user} />}></Route>
				<Route path='/landingpage' element={<Landingpage user={user} setUser={setUser}/>}></Route>
				<Route path='/login' element={<AccountBox setUser={setUser} />}></Route>
				<Route path='/signup' element={<AccountBox signup={signup} setUser={setUser}/>}></Route>
				<Route path='/characterinfo' element={<Characterpage user={user} setUser={setUser}/>}></Route>
				<Route path='/swipe' element={<Deck user={user} setUser={setUser}/>}></Route>
				<Route path='/profile' element={<ProfilePage user={user} setUser={setUser}/>}></Route>
			</>
		</Routes>
  );
}

export default App;
