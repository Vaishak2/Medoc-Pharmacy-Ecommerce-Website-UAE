import React from 'react';
import EmptyBag from "../../../../Assets/Icons/emptyBag.svg"

function EmptyMyOrders() {
  return (
    <div>
      <div className='sm:text-base sm:font-semibold text-justify'>All Order</div>
      <div className='sm:w-[362px] sm:h-[252px] sm:mt-[188px] sm:mx-auto '>
        <div className='sm:w-16 sm:h-16 bg-[#EDF1FF] rounded-full py-4 mx-auto'>
  <img className='justify-center m-auto' src={EmptyBag} alt="" />
        </div>
        <div className='sm:text-[18px] sm:font-medium sm:leading-[20px]'>
        No order placed yet !
        </div>
        <div className='text-[#A8A8A8] sm:text-sm sm:font-normal mt-4'>Have you not placed on order yet. Please add
        items to your cart and checkout</div>
        <div className='sm:w-[181px] bg-[#304BA0] hover:bg-[#3E5FC5] rounded-lg text-[#ffff] sm:font-medium px-8 py-5 sm:text-[14px] leading-4 mt-6 mx-auto  '>Explore Products</div>
      </div>
    </div>
  )
}

export default EmptyMyOrders
