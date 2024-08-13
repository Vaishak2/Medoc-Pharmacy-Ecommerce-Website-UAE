import React, { useState } from 'react';
import UnCheckBox from "../../../../Assets/Icons/UnCheckedBox.svg";
import CheckBox from "../../../../Assets/Icons/checkBox.svg";
import DeleteAccountOTP from '../DeleteAccountOTP/DeleteAccountOTP';

function DeleteAccountReason() {
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [error, setError] = useState('');

  const [isDelete, setIsDelete] = useState(false)

  const reasons = [
    "I find the products very expensive",
    "Return experience is not good",
    "Not enough variety in catalogue",
    "Others"
  ];

  const handleCheckboxClick = (index) => {
    setSelectedReasons(prevSelectedReasons => {
      if (prevSelectedReasons.includes(index)) {
        return prevSelectedReasons.filter(i => i !== index);
      } else {
        return [...prevSelectedReasons, index];
      }
    });
    setError(''); // Clear error when a checkbox is selected
  };

  const handleDeleteAccount = () => {
    if (selectedReasons.length === 0) {
      setError('Please se
               lect at least one reason before proceeding.');
    } else {
      // Proceed with account deletion logic
      setIsDelete(!isDelete)
      console.log('Proceeding with account deletion...');
    }
  };


  return (
    <div>
    {isDelete ? <DeleteAccountOTP/> :
      <div className="sm:text-justify">
        <div className="sm:text-[16px] sm:leading-6 font-semibold text-left">Delete Account</div>
        <div className="sm:text-[14px] sm:leading-5 sm:font-semibold sm:mt-8">
          Why did you decide to leave this app?
        </div>
        <div>
          {reasons.map((reason, index) => (
            <div key={index} className='flex sm:mt-4' onClick={() => handleCheckboxClick(index)}>
              <img 
                className='sm:w-6 sm:h-6 cursor-pointer' 
                src={selectedReasons.includes(index) ? CheckBox : UnCheckBox} 
                alt="" 
              />
              <div className='sm:ml-3 sm:text-[14px] sm:leading-[18px]'>{reason}</div>
            </div>
          ))}
        </div>
        {error && <div className="text-red-500 sm:mt-4">{error}</div>}
        <textarea 
          type="text" 
          placeholder='Add your suggestions here' 
          className='border sm:text-[14px] sm:w-[833px] sm:h-[144px] rounded-lg sm:mt-8 sm:p-4 placeholder:sm:text-[14px] placeholder:sm:leading-6 placeholder:tracking-tighter placeholder:font-normal focus:outline-[#304BA0]' 
          name="" 
          id=""
        />

        <div 
          className='border border-[#304BA0] rounded-lg sm:w-[833px] sm:py-[19px] justify-center pl-[362px] sm:text-[14px] sm:leading-[18px] sm:font-semibold sm:mt-[163px] text-[#304BA0] cursor-pointer'
          onClick={handleDeleteAccount}
        >
          Delete Account
        </div>
      </div>
    }
    </div>
  );
}

export default DeleteAccountReason;
