import React from 'react'
import CartImgEmpty from "../../../Assets/Icons/shopping_cart_blue.svg"

function CartEmpty() {
  return (
    <div>
           <div className='sm:text-base sm:font-semibold text-justify ml-[120px] mt-16'>Cart <span className='sm:font-normal'>(0 Items)</span></div>
      <div className='sm:w-[362px] sm:h-[252px] sm:mt-[188px] sm:mx-auto '>
        <div className='sm:w-16 sm:h-16 bg-[#EDF1FF] rounded-full py-4 mx-auto'>
  <img className='justify-center m-auto w-8 h-8' src={CartImgEmpty} alt="" />
        </div>
        <div className='sm:text-[18px] mt-6 sm:font-medium sm:leading-[20px]'>
        Your cart is empty !
        </div>
        <div className='text-[#A8A8A8] sm:text-sm sm:font-normal mt-4'>Looks like you haven’t added anything to cart yet.</div>
        <div className='sm:w-[181px] bg-[#304BA0] rounded-lg text-[#ffff] sm:font-medium px-8 py-5 sm:text-[14px] leading-4 mt-6 mx-auto  '>Start Shopping</div>
      </div>
    </div>
  )
}

export default CartEmpty
