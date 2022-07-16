import {React, useContext} from 'react'
import {useNavigate} from "react-router-dom";
import mainContext from '../context/mainContext';

function Toolbar() {
 const nav = useNavigate()
const {showtoolbar, getGold} = useContext(mainContext)


  return (
    <div className="navbar" style={{display: showtoolbar? "flex" : "none"}}>
        
    
            <button onClick={()=> nav("/shop")}   >SHOP</button>
            <p>Gold: {getGold}</p>
            <button onClick={()=> nav("/arena")}   >ARENA</button>
       
    </div>
  )
}

export default Toolbar