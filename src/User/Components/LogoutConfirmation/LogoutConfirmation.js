import React from 'react';
import Featured from "../../../Assets/Icons/Featured icon.svg";

function LogoutConfirmation ({ onClose, onConfirm }) {
  
   
  return (
    <div>
      <div className='sm:w-[428px] sm:h-[320px] rounded-xl border p-10 text-justify bg-white'>
        <img className='cursor-pointer' src={Featured} alt="Featured" />
        <div className='sm:mt-6'>
          <h1 className='sm:text-[16px] sm:font-semibold sm:leading-6'>Confirm Logout?</h1>
          <h2 className='sm:mt-2 text-[#818180] sm:text-[14px] sm:leading-6'>Are you sure you want to logout.</h2>
        </div>
        <div className='sm:mt-8 flex sm:text-[16px] sm:leading-6 sm:font-medium'>
          <button className='border rounded-lg px-[54px] py-4' onClick={onClose}>Cancel</button>
          <button className='border border-[#FC5050] text-white rounded-lg px-[50px] bg-[#FC5050] py-4 sm:ml-4' onClick={onConfirm}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default LogoutConfirmation;
