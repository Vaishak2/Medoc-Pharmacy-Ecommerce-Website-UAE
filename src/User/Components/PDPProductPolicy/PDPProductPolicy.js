import React from 'react'
import EasyReturn from "../../../Assets/Icons/Group 1377.svg"
import DeliveryIcon from "../../../Assets/Icons/Group 1377.png"
import CustomerSupportIcon from "../../../Assets/Icons/Group 1379 (2).png"

function PDPProductPolicy() {
  return (
    <div>
      <div className='sm:w-[1199px] sm:h-[153px] bg-[#EFF3FF] sm:mt-16 py-12 pl-20 mx-auto'>
      <div className='sm:w-[1038px] sm:h-[57px] flex justify-around '>
     <div className='flex'> <img src={EasyReturn} alt="" /><h1 className='my-auto ml-2 text-[16px]'>Easy 30 day return</h1></div>
      <div className='flex'><img src={DeliveryIcon} alt="" /><h1 className='my-auto ml-2 text-start'>Free Delivery on order <br /> 
      above AED 200</h1></div>
      <div className='flex'><img src={CustomerSupportIcon} alt="" /><h1 className='my-auto ml-2'>24/7 Customer support</h1></div>


      </div>

      </div>
    </div>
  )
}

export default PDPProductPolicy
