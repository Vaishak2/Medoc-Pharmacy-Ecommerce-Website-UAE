import React from 'react'
import Featured from "../../../Assets/Icons/Featured icon.svg"

function MoveToWishlist({ item, onClose, onConfirm }) {
  return (
    <div>
      <div className='sm:w-[428px] sm:h-[320px] rounded-xl border p-10 text-justify bg-white'>
        <img className='cursor-pointer' src={Featured} alt="Featured" />
        <div className='sm:mt-6'>
          <h1 className='sm:text-[16px] sm:font-semibold sm:leading-6'>Move to wishlist?</h1>
          <h2 className='sm:mt-2 text-[#818180] sm:text-[14px] sm:leading-6'>Are you sure you want to move this item from cart</h2>
        </div>
        <div className='sm:mt-8 flex sm:text-[16px] sm:leading-6 sm:font-medium'>
          <button className='border rounded-lg px-[54px] py-4' onClick={onClose}>Cancel</button>
          <button className='border border-[#FC5050] sm:text-[15px] sm:leading-6 text-white rounded-lg font-medium  bg-[#FC5050] p-4 sm:ml-4' onClick={onConfirm}>Move To Wishlist</button>
        </div>
      </div>
    </div>
  )
}

export default MoveToWishlist
