import {useContext} from 'react'
import mainContext from '../context/mainContext';

const Potions = ({item}) => {

const {getGold, setGold, boughtItems, setBoughtItems} = useContext(mainContext)   

function buyItem(){


const boughtItem = {
    type: "boughtItemPotion",
    image: item.image,
    price: item.price /2,
    effect: item.effect.health
}

if(item.price <= getGold){
setBoughtItems([...boughtItems, boughtItem])
setGold(getGold - item.price )
} else {
    return
}

}
  return (
    <div onClick={buyItem} className="boxItems">
<img src={item.image} alt="" />
<div>
  <p>Effect: {item.effect.health}</p>
    <p>Price: {item.price}</p>
    
</div>
    </div>
  )
}

export default Potions