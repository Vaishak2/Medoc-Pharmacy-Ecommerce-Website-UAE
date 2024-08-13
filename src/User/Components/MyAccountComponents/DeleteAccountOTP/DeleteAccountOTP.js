import React, { useState, useRef } from 'react';
import RightIconBlue from "../../../../Assets/Icons/right_icon_blue.svg";
import RightIconGrey from "../../../../Assets/Icons/right_icon_grey.svg";

function DeleteAccountOTP() {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [timeLeft, setTimeLeft] = useState(56);
  const [resendEnabled, setResendEnabled] = useState(false);
  const [otpError, setOtpError] = useState(false); // State to track OTP error
  const inputRefs = useRef([]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setResendEnabled(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleKeyDown = (element, index, event) => {
    if (event.key === 'Backspace' && !otp[index]) {
      if (element.previousSibling) {
        element.previousSibling.focus();
      }
    }
  };

  const handleChange = (element, index) => {
    if (/[^0-9]/.test(element.value)) return; // Ensure only digits are entered
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
    setOtpError(false); // Reset the error if user is entering the OTP
  };
  
  const handleResendOtp = () => {
    setTimeLeft(56);
    setResendEnabled(false);
  };

  const handleVerifyOtp = () => {
    const otpString = otp.join('');
    if (otpString.length < 6 || otp.includes('')) { // Check if OTP is incomplete
      setOtpError(true);
    } else {
      console.log('OTP Verified:', otpString);
      // Add OTP verification logic here
    }
  };

  return (
    <div>
      <div className="sm:text-justify ">
        <div className="sm:text-[16px] sm:leading-6 font-semibold text-left">Delete Account</div>
        <div className='sm:text-[14px] sm:leading-[22px] sm:mt-8 sm:tracking-[-1%] sm:font-normal sm:text-[#818180]'>
          Please enter the verification code <br />
          sent to <span className='sm:text-black'>+971 50 123 4567</span>
        </div>
        <div>
          <div className="flex gap-[10px] sm:mt-10">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#454545]"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e.target, index, e)}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </div>
          {otpError && (
            <p className="text-red-500 text-xs sm:mt-2">Please enter the complete OTP.</p>
          )}
          <p className="sm:text-[12px] sm:leading-4 sm:font-normal sm:mt-10 sm:mb-4">Time remaining: {timeLeft} sec</p>
        </div>
        <div
          className={`sm:text-[14px] sm:mt-6 flex leading-4 text-[#304BA0] rounded-md cursor-pointer underline ${resendEnabled ? 'text-[#304BA0]' : 'text-[#818180] cursor-not-allowed'}`}
          disabled={!resendEnabled}
          onClick={handleResendOtp}
        >
          Resend OTP <img className="sm:ml-1" src={RightIconBlue} alt="rightIconBlue" />
        </div>
        <div 
          className='border border-[#304BA0] rounded-lg sm:w-[833px] sm:py-[19px] justify-center pl-[362px] sm:text-[14px] sm:leading-[18px] sm:font-semibold sm:mt-[300px] text-[#304BA0] cursor-pointer'
          onClick={handleVerifyOtp} // Call verify function on click
        >
          Delete Account
        </div>
      </div>
    </div>
  )
}

export default DeleteAccountOTP;
