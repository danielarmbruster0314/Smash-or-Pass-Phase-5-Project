
import './App.css';
import Home from'./Home/Home.js'
import Deck from './Deck/Deckofoptions.js'
import Landingpage from './LandingPage/Landingpage'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
			<>
				
				<Route path='*' element={<Home />}></Route>
				<Route path='/landingpage' element={<Landingpage />}></Route>
				<Route path='/characterinfopage' element={<Deck />}></Route>
				<Route path='/login' element={<Deck />}></Route>
				<Route path='/signup' element={<Deck />}></Route>
				<Route path='/swipe' element={<Deck />}></Route>
			</>
		</Routes>
  );
}

export default App;
