import React, { createContext } from 'react'
import Header from './Sections/Header/Header'
import Footer from './Sections/Footer/Footer'
import { Outlet } from 'react-router-dom'

export const contextData = createContext()

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
