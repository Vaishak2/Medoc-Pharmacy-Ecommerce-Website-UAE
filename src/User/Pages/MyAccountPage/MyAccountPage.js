import React, { useState } from 'react'
import './MyAccountPage.css'
import Edit from '../../../Assets/Icons/Edit.png'
import HeartIcon from '../../../Assets/Icons/heart.png'
import LocationIcon from '../../../Assets/Icons/location.png'
import OrderIcon from '../../../Assets/Icons/order.png'
import MyOrders from '../../Components/MyAccountComponents/MyOrders/MyOrders'
import MyWishlist from '../../Components/MyAccountComponents/MyWishlist/MyWishlist'
import SavedAddress from '../../Components/MyAccountComponents/SavedAddress/SavedAddress'

function MyAccountPage() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className='bg-[#FAFAFA]'>
            <div className='w-[1200px] mx-auto pt-[48px] pb-[48px]'>
                <div className='text-[18px] leading-6 font-semibold text-left'>My Account</div>
                <div className=' flex justify-between mt-6'>

                    <div className='sm:w-[282px] bg-[#FFFFFF] rounded-lg'>

                        <div className='mt-[32px]'>
                            <div className='sm:w-[70px] sm:h-[70px] border mx-auto p-1 rounded-full'>
                                <div className='w-full h-full bg-[#575757] text-white text-[24px] flex items-center justify-center rounded-full'>V</div>
                            </div>
                            <div className='text-[14px] font-medium leading-5 mt-4'>Vineesh Raj</div>
                            <div className='flex items-center justify-center gap-2 mt-2'>
                                <div>
                                    <img className='h-[16px] w-[16px]' src={Edit}></img>
                                </div>
                                <div className='text-[12px] leading-5'>Edit Profile</div>
                            </div>
                        </div>

                        <div className='mt-[32px]'>
                            <div className={toggleState === 1 ? 'sm:h-[56px] accountButton active-accountButton' : 'sm:h-[56px] accountButton'} onClick={()=>toggleTab(1)}>
                                <div><img className='sm:w-[16px] sm:h-[16px]' src={OrderIcon}></img></div>
                                <div className='text-[14px] leading-4'>My Orders</div>
                            </div>
                            <div className={toggleState === 2 ? 'sm:h-[56px] accountButton active-accountButton' : 'sm:h-[56px] accountButton'} onClick={()=>toggleTab(2)}>
                                <div><img className='sm:w-[16px] sm:h-[16px]' src={HeartIcon}></img></div>
                                <div className='text-[14px] leading-4'>My Wishlist</div>
                            </div>
                            <div className={toggleState === 3 ? 'sm:h-[56px] accountButton active-accountButton' : 'sm:h-[56px] accountButton'} onClick={()=>toggleTab(3)}>
                                <div><img className='sm:w-[16px] sm:h-[16px]' src={LocationIcon}></img></div>
                                <div className='text-[14px] leading-4'>Saved Address</div>
                            </div>
                        </div>

                        <div className='border sm:mt-[96px] sm:mx-[24px]'></div>

                        <div className='sm:mt-[32px] font-normal sm:mx-[24px] text-left'>
                            <div className='text-[12px] leading-5 sm:mt-2'>Need Help</div>
                            <div className='text-[12px] leading-5 sm:mt-2'>About Us</div>
                            <div className='text-[12px] leading-5 sm:mt-2'>Privacy Policy</div>
                            <div className='text-[12px] leading-5 sm:mt-2'>Terms of Use</div>
                        </div>

                        <div className='sm:h-[48px] border border-[#E92810] text-[14px] leading-4 font-medium text-[#E92810] rounded-lg cursor-pointer sm:py-4 sm:mt-[32px] sm:mb-[24px] sm:mx-[24px]'>Logout</div>

                    </div>

                    <div className='sm:w-[894px] bg-[#FFFFFF] rounded-lg p-[32px]'>
                        <div className={toggleState === 1 ? 'accountContent active-accountContent' : 'accountContent'}><MyOrders/></div>
                        <div className={toggleState === 2 ? 'accountContent active-accountContent' : 'accountContent'}><MyWishlist/></div>
                        <div className={toggleState === 3 ? 'accountContent active-accountContent' : 'accountContent'}><SavedAddress/></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyAccountPage
