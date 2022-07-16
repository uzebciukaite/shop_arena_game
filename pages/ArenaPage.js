import {useContext} from 'react'
import Inventory from '../components/Inventory';
import Monster from '../components/Monster';
import mainContext from '../context/mainContext';
import {useNavigate} from "react-router-dom";

const ArenaPage = () => {
const nav = useNavigate()
const {playerlivesboxwidth, setplayerlivesboxwidth, selectedRace, setweaponsclicked, setBoughtItems,setshowtoolbar, setGold, setMonster, playerLives, setPlayerLives, chosenweapon, finalmaxdamage, setchosenWeapon, setfinalmaxdamage, setMonsterLives, monsterLives, getMonster, modalOpen, setModalOpen, setMonsterLost, setmonsterlivesboxwidth} = useContext(mainContext)



function makeantattack(){
const getrandomdamagePlayer= Math.floor(Math.random() * (finalmaxdamage - 0) + 0)
if(monsterLives  - getrandomdamagePlayer <=0){
  setMonsterLost(true)
} else {
setMonsterLives(monsterLives - getrandomdamagePlayer)
setmonsterlivesboxwidth(100 * monsterLives / getMonster.health)
}



setTimeout(()=> {
  const getrandomdamageMonster= Math.floor(Math.random() * (getMonster.maxDamage - 0) + 0)
  console.log(`Attack by monster number : ${getrandomdamageMonster}`)
  
  if(playerLives - getrandomdamageMonster <= 0){
  setPlayerLives(0)
  setMonsterLives(0)
  setGold(0)
  setshowtoolbar(false)
  setweaponsclicked(false)
  setBoughtItems([])
  setMonster(0)
  setchosenWeapon({})
  setfinalmaxdamage(0)
  setmonsterlivesboxwidth(100)
  setplayerlivesboxwidth(100)


  setTimeout(() => {
  nav("/")
},500)
} else {
  setPlayerLives(playerLives - getrandomdamageMonster)
  setplayerlivesboxwidth(100 * playerLives / selectedRace.health)
  console.log(playerlivesboxwidth)
}
}, 500)





}



  return (
    <div className="arena">
<div className="playerSide">
  <div className="charbox">
           <img src={selectedRace.image} alt="" />
           <h3>Race : {selectedRace.race}</h3>
           <p> Damage: {selectedRace.damage}</p>
         
            </div>
            <p>Lives left: {playerLives}</p>
            <div className="outer">
<div style={{width: `${playerlivesboxwidth}%`}} className="progressbar">
            
            </div>
            </div>
            
            <div className="selecetedweapon">
<img src={chosenweapon.image} alt="" />
<p>Max-damage: {chosenweapon.damage}</p>

            </div>
            <p>Total max-damage: {finalmaxdamage} </p>
</div>
<div className="middle">
  <button onClick={makeantattack} >Attack</button>
  <button onClick={() => setModalOpen(true)}>Inventory</button>
</div>


  <Monster/>
<div style={{display: modalOpen? "flex" : "none"}} className="modal">

  <div className="modal-content">
    <span onClick={() => setModalOpen(false)} className="close">&times;</span>
    <Inventory/>
  </div>

</div>

    </div>
  )
}

export default ArenaPage