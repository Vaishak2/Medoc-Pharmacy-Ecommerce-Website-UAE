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
    <div className="flex gap-10 items-center sm:text-sm">
      {steps.map((step, index) => (
        <div key={index} className=" ">
        <span
            className={` ${
              step.completed ? 'text-black' : 'text-gray-400'
            }`}
          >
            {step.name}
          </span>
         <div className='flex mx-auto '>

          <div
            className={`flex   ${
              step.completed ? '' : ' text-gray-300'
            }`}
          >
            {step.completed && (
             <img src={fillTic} alt="" /> 
            )}
          </div>
         
          {index !== steps.length - 1 && (
            <div className={`flex-1 h-0.5 w-full my-auto ${
              steps[index + 1].completed ? 'bg-[#304BA0]' : 'bg-gray-300'
            }`}></div>
          )}
          </div>

        </div>
      ))}

   
    </div>
    <button className='bg-[#F5F5F5] sm:py-[15px] sm:px-[48px] rounded-lg sm:ml-[672px] sm:font-semibold text-sm sm:w-[190px] sm:mt-6'>Cancel order</button>
    </div>
  );
};

export default ProgressTracker;
