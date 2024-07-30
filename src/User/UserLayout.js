import React from 'react'
import Header from './Sections/Header/Header'
import Footer from './Sections/Footer/Footer'
import { Outlet } from 'react-router-dom'

function UserLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default UserLayout
