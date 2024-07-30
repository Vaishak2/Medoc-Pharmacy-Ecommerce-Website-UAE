import React from 'react'

import PDPDetailsComponent from '../../Components/PDPDetailsComponent/PDPDetailsComponent'

import PDPMainComponent from '../../Components/PDPMainComponent/PDPMainComponent'
import PDPFrequentlyBoughtTogether from '../../Components/PDPFrequentlyBoughtTogether/PDPFrequentlyBoughtTogether'
import RecentlyviewedCarousel from '../../Components/RecentlyviewedCarousel/RecentlyviewedCarousel'
import SimilarProducts from '../../Components/SimilarProducts/SimilarProducts'

import PDPProductPolicy from '../../Components/PDPProductPolicy/PDPProductPolicy'
import CartPage from '../../Components/CartItem/CartItem'
import CartItem from '../../Components/CartItem/CartItem'

function ProductDetailsPage() {
  return (
    <div>

      <PDPMainComponent />
      <PDPDetailsComponent />

      <PDPFrequentlyBoughtTogether/>
   <RecentlyviewedCarousel />
      <SimilarProducts />

      <PDPProductPolicy />



    </div>
  )
}

export default ProductDetailsPage
