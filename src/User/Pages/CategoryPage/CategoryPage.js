import React from 'react'
import TopCategoriesOfCategory from '../../Components/TopCategoriesOfCategory/TopCategoriesOfCategory'

import CategoryPageBreadcrumb from '../../Components/Breadcrumbs/CategoryPageBreadcrumb'
import BrandCarousel from '../../Components/BrandCarousel/BrandCarousel'
import TopoffersCarousel from '../../Components/TopoffersCarousel/TopoffersCarousel'

import CategoryBanner from '../../Components/CategoryBannerPage/CategoryBanner'

import CategoryAdPage from '../../Components/CategoryAdPage/CategoryAdPage'
import CategoryThisWeekPage from '../../Components/CategoryThisWeekPicks/CategoryThisWeekPage'
import { useParams } from 'react-router-dom'



function CategoryPage() {
  const {categoryId} = useParams()

  return (
    <div>
      <CategoryPageBreadcrumb />
      <CategoryBanner />
      <TopCategoriesOfCategory />
      <CategoryAdPage />
      <CategoryThisWeekPage />
      <BrandCarousel />
      <TopoffersCarousel />
    </div>
  )
}

export default CategoryPage
