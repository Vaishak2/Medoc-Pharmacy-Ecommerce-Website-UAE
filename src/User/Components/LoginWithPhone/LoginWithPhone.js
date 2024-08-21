import React, { useState, useEffect } from 'react';
import LoginImage from "../../../Assets/LoginImage/LoginImage.png";
import Checked from "../../../Assets/Icons/checkBox.svg";
import UnChecked from "../../../Assets/Icons/UnCheckedBox.svg";
import Mail from "../../../Assets/Icons/mail.svg";
import UAEFlag from "../../../Assets/LoginImage/UAEFlag.png";

function LoginWithPhone() {
  const [isChecked, setIsChecked] = useState(true);
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({ phone: "", checkbox: "" });

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  const validatePhone = () => {
    const phoneRegex = /^\+971\d{9}$/;
    if (!phone) {
      return "Phone number is required.";
    } else if (!phoneRegex.test(`+971${phone}`)) {
      return "Phone number is invalid.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneError = validatePhone();
    const checkboxError = isChecked ? "" : "You must agree to the terms and conditions.";

    if (phoneError || checkboxError) {
      setErrors({ phone: phoneError, checkbox: checkboxError });
    } else {
      setErrors({ phone: "", checkbox: "" });
      // Proceed with form submission
      console.log("Form submitted");
    }
  };

  useEffect(() => {
    // Disable scrolling on the body element
    document.body.style.overflow = 'hidden';

    // Clean up: Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className='flex min-h-screen overflow-hidden'>
      <div className='w-1/2 h-screen'>
        <img src={LoginImage} className="h-full w-full object-cover" alt="Login" />
      </div>

      <div className="w-1/2 h-screen flex flex-col justify-center items-center bg-white">
        <h2 className="text-[32px] font-medium mb-6 text-center">Login</h2>
        <p className="text-center text-[16px] leading-[26px] text-[#636363] font-normal sm:w-[486px] sm:h-[48px] mx-auto mb-4">
          Get access to your orders, Track previous orders, Book an appointment
        </p>

        <div className='sm:w-[486px] mx-auto'>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-justify font-medium" htmlFor="phone">Phone Number</label>
              <div className={`flex items-center border border-gray-300 rounded-lg px-4 py-[14px] ${errors.phone ? 'border-red-500' : 'border-gray-300'} `}>
                <img src={UAEFlag} alt="UAE Flag" className="w-[31px] h-[20px]" />
                <span className="mr-2 border-r pl-4">+971</span>
                <input
                  className="flex-grow border-none focus:outline-none"
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="000 000 000"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm mt-1 text-justify">{errors.phone}</p>}
            </div>
            <div className='flex'>
              <img 
                className='sm:mt-6 sm:w-6 sm:h-6 cursor-pointer' 
                src={isChecked ? Checked : UnChecked} 
                alt="Checkbox" 
                onClick={handleCheckboxClick} 
              />
              <div className='w-[446px] text-[16px] leading-6 font-normal sm:ml-4 text-justify sm:mt-[20px]'>
                <h1>
                  By Continuing, you agree to The Medo Pharmas <br />
                  <span className='font-medium text-[#304BA0]'> Terms and Conditions</span> and <span className='font-medium text-[#304BA0]'>Privacy Policy</span>
                </h1>
              </div>
            </div>
            {errors.checkbox && <p className="text-red-500 text-sm mt-1 text-justify">{errors.checkbox}</p>}
            <div className="mt-6">
              <button className="w-full bg-[#304BA0] hover:bg-[#3e5fc5] text-white p-4 rounded-lg" type="submit">Login</button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className='text-[14px] leading-5 font-medium opacity-40'>Or login with</p>
            <div className="flex mt-4 border mx-auto rounded-lg justify-center sm:w-[327px] sm:py-[18px] sm:font-medium text-[14px] leading-5 tracking-tighter">
              <img className='my-auto sm:w-6 sm:h-6' src={Mail} alt="Mail Icon" />
              <h1 className="my-auto ml-[10px]">Continue with Email</h1>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className='sm:text-[14px] leading-6 font-normal'>Don't have an account? <a href="#" className="text-[#304BA0] hover:underline sm:text-[14px] leading-6 font-medium">Register here</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginWithPhone;
