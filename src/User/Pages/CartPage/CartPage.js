import React from 'react'
import CartItem from '../../Components/CartItem/CartItem'
import Cart_Choose from '../../Components/Cart_Choose/Cart_Choose'
import RemoveConformation from '../../Components/RemoveConformation/RemoveConformation'
import RecentlyviewedCarousel from '../../Components/RecentlyviewedCarousel/RecentlyviewedCarousel'
import PDPProductPolicy from '../../Components/PDPProductPolicy/PDPProductPolicy'

function CartPage() {
  return (
    <div>
         <CartItem />
         <Cart_Choose/>
         <PDPProductPolicy/>
    </div>
  )
}

export default CartPage
