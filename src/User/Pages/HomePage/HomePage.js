import React from 'react'
import HomeBanner from '../../Components/HomeBanner/HomeBanner'

import CategoryCarousel from '../../Components/CategoryCarousel/CategoryCarousel'

import HomeBanner2 from '../../Components/HomeBanner2/HomeBanner2'
import BrandCarousel from '../../Components/BrandCarousel/BrandCarousel'
import TopoffersCarousel from '../../Components/TopoffersCarousel/TopoffersCarousel'
import TopProduct from '../../Components/TopProduct/TopProduct'

import RecentlyviewedCarousel from '../../Components/RecentlyviewedCarousel/RecentlyviewedCarousel'

import AdPage from '../../Components/AdPage/AdPage'




function HomePage() {
  return (
    <div>
      <HomeBanner/>
      <CategoryCarousel/>
      <RecentlyviewedCarousel/>
      <TopProduct/>
      <BrandCarousel/>
      <AdPage/>
      <TopoffersCarousel/>
      <HomeBanner2/>
      <TopProduct/>

    </div>
  )
}

export default HomePage
