import React from 'react'
import UserLayout from '../User/UserLayout'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../User/Pages/HomePage/HomePage'
import CategoryPage from '../User/Pages/CategoryPage/CategoryPage'
import ProductListingPage from '../User/Pages/ProductListingPage/ProductListingPage'
import ProductDetailsPage from '../User/Pages/ProductDetailsPage/ProductDetailsPage'
import CartPage from '../User/Pages/CartPage/CartPage'
import MyAccountPage from '../User/Pages/MyAccountPage/MyAccountPage'
import LoginPage from '../User/Pages/LoginPage/LoginPage'

function RouteFile() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<UserLayout/>}>

                    <Route index element={<HomePage/>}/>
                    <Route path='home' element={<HomePage/>}/>
                    <Route path='category' element={<CategoryPage/>}/>
                    <Route path='products' element={<ProductListingPage/>}/>
                    <Route path='productDetails' element={<ProductDetailsPage/>}/>
                    <Route path='cart' element={<CartPage/>}/>
                    <Route path='myaccount' element={<MyAccountPage/>}/>
                    <Route path='LoginPage' element={<LoginPage/>}/>

                </Route>
                


            </Routes>
        </div>
    )
}

export default RouteFile
