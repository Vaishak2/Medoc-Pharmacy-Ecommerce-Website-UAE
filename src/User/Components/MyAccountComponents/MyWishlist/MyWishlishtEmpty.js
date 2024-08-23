import React from 'react'
import NoWishlist from "../../../../Assets/Icons/no wishlist.svg"

function MyWishlishtEmpty() {
  return (
    <div>
          <div className='sm:text-base sm:font-semibold text-justify'>My Wishlist</div>
      <div className='sm:w-[362px] sm:h-[252px] sm:mt-[188px] sm:mx-auto '>
        <div className='sm:w-16 sm:h-16 bg-[#EDF1FF] rounded-full py-4 mx-auto'>
  <img className='justify-center m-auto' src={NoWishlist} alt="" />
        </div>
        <div className='sm:text-[18px] sm:font-medium sm:leading-[20px]'>
        Nothing is in your wishlist
        </div>
        <div className='text-[#A8A8A8] sm:text-sm sm:font-normal mt-4'>Add items to your wishlist as you browse and they will magically appears here</div>
        <div className='sm:w-[181px] bg-[#304BA0] rounded-lg text-[#ffff] sm:font-medium px-8 py-5 sm:text-[14px] leading-4 mt-6 mx-auto  '>Add Items</div>
      </div>
    </div>
  
  )
}

export default MyWishlishtEmpty
