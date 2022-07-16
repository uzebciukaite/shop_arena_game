import {useContext} from 'react'
import Inventory from '../components/Inventory';
import mainContext from '../context/mainContext';

const MainPage = () => {

const {selectedRace} = useContext(mainContext)
  return (
    <div className="main">
        
        <div className="welcome">
            <h2>Welcome to the game, {selectedRace.race}</h2>
        </div>
        <div className="maincontent">
            
           <div className="playerinfomain">
           <img src={selectedRace.image} alt="" />
           <h3>Race : {selectedRace.race}</h3>
           <p> Damage: {selectedRace.damage}</p>
           <p>Gold: {selectedRace.gold}</p>
         
            </div>
            <Inventory/>
        </div>
    </div>
  )
}

export default MainPage