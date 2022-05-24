
import './App.css';
import Home from'./Home/Home.js'
import Deck from './Deck/Deckofoptions.js'
import Landingpage from './LandingPage/Landingpage'
import Characterpage from './CharacterInfoPage/CharacterPage';
import {AccountBox} from './Accountforum/Accountform.js'
import { Routes, Route } from "react-router-dom";


function App() {

	const signup = true
  return (
    <Routes>
			<>
				
				<Route path='*' element={<Home />}></Route>
				<Route path='/landingpage' element={<Landingpage />}></Route>
				<Route path='/login' element={<AccountBox />}></Route>
				<Route path='/signup' element={<AccountBox signup={signup}/>}></Route>
				<Route path='/characterinfo' element={<Characterpage />}></Route>
				<Route path='/swipe' element={<Deck />}></Route>
			</>
		</Routes>
  );
}

export default App;
