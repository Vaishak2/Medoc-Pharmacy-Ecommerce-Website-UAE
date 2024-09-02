import React from 'react';
import fillTic from "../../../../Assets/Icons/Fill_round_check.svg"
import UnfillTic from "../../../../Assets/Icons/UnFill_round_check.svg"
import ProgressiveBarBlue from "../../../../Assets/Icons/progressive bar blue.png"
import ProgressiveBarGray from "../../../../Assets/Icons/Progressiv Bar Gray.png"

const steps = [
  { name: 'Order Placed', completed: true },
  { name: 'Order confirmed', completed: true },
  { name: 'Item shipped', completed: true },
  { name: 'Out for delivery', completed: false },
  { name: 'Item is Delivered', completed: false },
];

const ProgressTracker = () => {
  return (
    <div className=''>
      <div className='flex sm:text-xs sm:font-normal gap-12'>
        <h1>Order Placed</h1>
        <h1>Order confirmed</h1>
        <h1>Item shipped</h1>
        <h1>Out for delivery</h1>
        <h1>Item is Delivered</h1>
      </div>
      <div className='flex translate-x-[29px] sm:mt-4 sm:mb-4'>
        <img src={fillTic} alt="" />
        <img className='w-[122px] h-[1.5px] my-auto' src={ProgressiveBarBlue} alt="" />
        <img src={fillTic} alt="" />
        <img className='w-[122px] h-[1.5px] my-auto' src={ProgressiveBarBlue} alt="" />
        <img src={fillTic} alt="" />
        <img className='w-[122px] h-[1.5px] my-auto' src={ProgressiveBarBlue} alt="" />
        <img src={fillTic} alt="" />
        <img className='w-[122px] h-[1.5px] my-auto' src={ProgressiveBarBlue} alt="" />
        <img src={fillTic} alt="" />
      </div>

      <div className='flex sm:text-xs sm:font-normal gap-[81px]'>
        <h1>02.15 pm <br /> 20/11/2022</h1>
        <h1>02.15 pm <br /> 20/11/2022</h1>
        <h1>02.15 pm <br /> 20/11/2022</h1>
        <h1>02.15 pm <br /> 20/11/2022</h1>
        <h1>02.15 pm <br /> 20/11/2022</h1>
     </div>
      <button className='bg-[#F5F5F5] sm:py-[15px] sm:px-[48px] rounded-lg sm:ml-auto  sm:font-semibold text-sm sm:w-fit sm:mt-6'>Cancel order</button>
    </div>
  );
};

export default ProgressTracker;

