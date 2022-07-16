import './App.css';
import {React, useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import mainContext from './context/mainContext';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ArenaPage from "./pages/ArenaPage"
import MainPage from './pages/MainPage';
import Toolbar from './components/Toolbar';

function App() {









const [selectedRace, setselectedRace] = useState({})
const [showtoolbar, setshowtoolbar] = useState(false)
const [weaponsclicked, setweaponsclicked] = useState(false)
const [potionsclicked, setpotionsclicked] = useState(false)
const [boughtItems, setBoughtItems] = useState([])
const [getGold, setGold] = useState(0)
const [getMonster, setMonster] = useState(0)
const [monsterLives, setMonsterLives] = useState(0)
const [playerLives, setPlayerLives] = useState(0)
const [modalOpen, setModalOpen] = useState(false)
const [chosenweapon, setchosenWeapon] = useState({})
const [finalmaxdamage, setfinalmaxdamage] = useState(0)
const [monsterlost, setMonsterLost] = useState(false)


const [playerlivesboxwidth, setplayerlivesboxwidth] = useState(100)
const [monsterlivesboxwidth, setmonsterlivesboxwidth] = useState(100)

  return (



<mainContext.Provider value={{monsterlivesboxwidth, setmonsterlivesboxwidth,playerlivesboxwidth, setplayerlivesboxwidth, monsterlost, setMonsterLost, modalOpen, setModalOpen,finalmaxdamage, setfinalmaxdamage, chosenweapon, setchosenWeapon, monsterLives, setMonsterLives, playerLives, setPlayerLives, getMonster, setMonster,getGold, setGold, boughtItems, setBoughtItems, weaponsclicked, setweaponsclicked, potionsclicked, setpotionsclicked, selectedRace, setselectedRace, showtoolbar, setshowtoolbar}}>
<div className="App"> 
<BrowserRouter>
<Toolbar />
<Routes>
  
 <Route path="/" element={<HomePage/>}/>
 <Route path="/main" element={<MainPage/>}/>

 <Route path="/arena" element={<ArenaPage   />}/>
 <Route path="/shop" element={<ShopPage />}/>
  
</Routes>

</BrowserRouter>

  


</div>
</mainContext.Provider>





    
  );
}

export default App;
