import {useContext} from 'react'
import mainContext from '../context/mainContext';

const Weapons = ({item}) => {

const {getGold, setGold, boughtItems, setBoughtItems} = useContext(mainContext)

function buyItem(){
const boughtItem = {
    type: "boughtItemWeapon",
    image: item.image,
    price: item.price /2,
    damage: item.maxDamage
    
}
if(item.price <= getGold){
setBoughtItems([...boughtItems, boughtItem])
setGold(getGold - item.price )
} else {
    return
}

}

  return (
    <div onClick={buyItem}className="boxItems">
<img src={item.image} alt="" />
<div>
    <p>Price: {item.price}</p>
    <p> Damage: {item.maxDamage}</p>
</div>
    </div>
  )
}

export default Weapons