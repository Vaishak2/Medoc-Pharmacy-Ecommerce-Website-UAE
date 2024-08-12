import React, { useState } from 'react';
import UnCheckBox from "../../../../Assets/Icons/UnCheckedBox.svg";
import CheckBox from "../../../../Assets/Icons/checkBox.svg";

function DeleteAccount() {
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({ checkbox: "" });

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
    // Clear the error message if the checkbox is toggled
    if (errors.checkbox) {
      setErrors({ checkbox: "" });
    }
  };

  const handleUpdateClick = () => {
    if (isChecked) {
      // Proceed with account deletion logic
      console.log("Account deletion confirmed.");
      // Redirect or take any action after confirming deletion
    } else {
      setErrors({ checkbox: "Please agree to the terms and conditions before proceeding." });
    }
  };

  return (
    <div className="sm:text-justify">
      <div className="sm:text-[16px] sm:leading-6 font-semibold text-left">Delete Account</div>
      <div className="sm:text-[14px] sm:leading-5 sm:font-semibold sm:mt-8">
        Are you sure you want to delete your account?
      </div>
      <div className="sm:text-[14px] sm:leading-4 sm:font-normal sm:mt-6">
        All your data will permanently erase from this app, including your order history, saved details, coupons, and benefits. Any pending orders, exchanges, returns, or refunds will no longer be accessible via your account.
      </div>
      <div className="flex sm:mt-[388px]" onClick={handleCheckboxClick}>
        <img className='sm:w-6 sm:h-6' src={isChecked ? CheckBox : UnCheckBox} alt="Checkbox" /> 
        <div className="sm:ml-4 sm:text-[14px] sm:leading-6 sm:tracking-tighter sm:font-normal">
          I agree to all the terms and conditions
        </div>
      </div>
      {/* Display error message if there is one */}
      {errors.checkbox && (
        <p className="text-red-500 text-sm mt-1 text-justify">{errors.checkbox}</p>
      )}
      <div className="flex sm:mt-8">
        <button className="border border-[#304BA0] rounded-lg sm:py-4 sm:px-[178px] sm:text-[14px] sm:leading-4 font-semibold text-[#304BA0]">
          Delete
        </button>
        <button 
          className="border rounded-lg sm:py-4 sm:px-[155px] sm:text-[14px] sm:leading-4 font-semibold bg-[#304BA0] text-white sm:ml-4 hover:bg-[#3e5fc5]" 
          onClick={handleUpdateClick}
        >
          Keep Account
        </button>
      </div>
    </div>
  );
}

export default DeleteAccount;
