import {useContext, useEffect} from 'react'
import mainContext from '../context/mainContext';
import {useNavigate} from "react-router-dom";
const InventoryItem = ({boughtItem, sellItem, choosepotion}) => {
const nav = useNavigate()
const { setchosenWeapon, setfinalmaxdamage, selectedRace} = useContext(mainContext) 

function pickweapon(){
  setchosenWeapon(boughtItem)
  setfinalmaxdamage(selectedRace.damage + boughtItem.damage)
setTimeout(() => {
  nav("/arena")
  
},500)

}




  return (
    <div className="containerinv">
{boughtItem.type === "boughtItemWeapon" && (
<div  className="boxItems">
    
    <img src={boughtItem.image} alt="" />
    <div>
    <p>Price: {boughtItem.price}</p>
    {boughtItem.damage? (
    <p> Damage: {boughtItem.damage }</p>
    ): "" }
    
</div>
<button onClick={sellItem}>Sell item</button>
<button onClick={pickweapon}>Choose weapon</button>

    </div>
    )}
{boughtItem.type === "boughtItemPotion" && (
<div  className="boxItems">
    
    <img src={boughtItem.image} alt="" />
    <div>
      <p>Effect: {boughtItem.effect}</p>
    <p>Price: {boughtItem.price}</p>  

</div>
<button onClick={sellItem}>Sell item</button>
<button onClick={choosepotion}>Use potion</button>

    </div>
    )}
   {boughtItem.type === "dropItem" && (
     <div  className="boxItems">
      <p>Drop Item</p>
<img src={boughtItem.image} alt="" />
<div>
    <p>Price: {boughtItem.price}</p>  
</div>
<button onClick={sellItem}>Sell item</button>


    </div>
   )} 
    </div>
    
    
  )
}

export default InventoryItem