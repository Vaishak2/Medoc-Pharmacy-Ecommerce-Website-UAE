import React, { createContext, useState } from 'react'
import Header from './Sections/Header/Header'
import Footer from './Sections/Footer/Footer'
import { Outlet } from 'react-router-dom'

export const userContext = createContext()

function UserLayout() {
  const [cart,setCart] = useState([])
  return (
    <div>
      <userContext.Provider value={{cart,setCart}}>
        <Header />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </div>
  )
}

export default UserLayout
