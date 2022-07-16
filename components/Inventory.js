import {useNavigate} from "react-router-dom";
import {useContext} from 'react'
import mainContext from '../context/mainContext';
import InventoryItem from './InventoryItem';

const Inventory = () => {
const nav = useNavigate()
const {getGold, setGold, boughtItems, setBoughtItems, setPlayerLives, playerLives, setModalOpen} = useContext(mainContext)

console.log(boughtItems)

function sellItem(index){
  const itemSold = boughtItems[index]
  const newboughtItems = boughtItems.filter((x, i) => i !== index)
  setBoughtItems(newboughtItems)
  setGold(getGold + itemSold.price)
}

function choosepotion(index){

setPlayerLives(playerLives + boughtItems[index].effect)
const newboughtItems = boughtItems.filter((x, i) => i !== index)
  setBoughtItems(newboughtItems)
  setTimeout(() => {
  nav("/arena")
  setModalOpen(false)
  
},500)

}

  return (
    <div className="inventory">
      {boughtItems.map((x, i) => (
        <InventoryItem boughtItem={x} sellItem={() =>sellItem(i)} choosepotion={() => choosepotion(i)}/>
      ))}
      

    </div>
  )
}

export default Inventory