import React from 'react'
import ShopSite from '../components/ShopSite'
import Inventory from '../components/Inventory'
const ShopPage = () => {
  return (
    <div className="shoppage">
        <ShopSite/>
        <Inventory/>
    </div>
  )
}

export default ShopPage