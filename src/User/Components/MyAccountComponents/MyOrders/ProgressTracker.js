import React from 'react';
import fillTic from "../../../../Assets/Icons/Fill_round_check.svg"

const steps = [
  { name: 'Order Placed', completed: true },
  { name: 'Order confirmed', completed: true },
  { name: 'Item shipped', completed: true },
  { name: 'Out for delivery', completed: false },
  { name: 'Item is Delivered', completed: false },
];

const ProgressTracker = () => {
  return (
    <div>
    <div className='columns-5'>
      <h1>Order Placed</h1>
      <h1>Order confirmed</h1>
      <h1>Item shipped</h1>
      <h1>Out for delivery</h1>
      <h1>Item is Delivered</h1>
    </div>
    <button className='bg-[#F5F5F5] sm:py-[15px] sm:px-[48px] rounded-lg sm:mx-auto  sm:font-semibold text-sm sm:w-fit sm:mt-6'>Cancel order</button>
    </div>
  );
};

export default ProgressTracker;
