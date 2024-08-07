import React, { useState, useRef } from 'react';
import LoginImage from "../../../Assets/LoginImage/LoginImage.png";
import RightIconBlue from "../../../Assets/Icons/right_icon_blue.svg";
import RightIconGrey from "../../../Assets/Icons/right_icon_grey.svg";

function LoginOTPpage() {
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const [timeLeft, setTimeLeft] = useState(56);
  const [resendEnabled, setResendEnabled] = useState(false);
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

  const handleChange = (element, index) => {
    if (/[^0-9]/.test(element.value)) return; // Ensure only digits are entered
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus on the next input box
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const handleKeyDown = (element, index, event) => {
    if (event.key === 'Backspace' && !otp[index]) {
      if (element.previousSibling) {
        element.previousSibling.focus();
      }
    }
  };

  const handleResendOtp = () => {
    setTimeLeft(56);
    setResendEnabled(false);
  };

  const handleVerifyOtp = () => {
    const otpString = otp.join('');
    console.log('OTP Verified:', otpString);
    // Add OTP verification logic here
  };

  return (
    <div className='flex'>
      <div className='sm:w-[708px] sm:h-[1024px]'>
        <img src={LoginImage} alt="Login" />
      </div>
      <div className="mx-auto sm:mt-[322px] ">
        <h2 className="text-2xl font-semibold mb-4">Enter OTP</h2>
        <div className=''>
          <p className="sm:text-[14px] leading-5 text-[#818180] mb-4">Please enter the verification code <br /> sent to
            <span className='text-black'> +971 50 123 4567
            </span>
          </p>
        </div>

   <div>
        <div className="flex gap-[10px] sm:mt-10  ">
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
        </div>
        <p className="sm:text-[12px] sm:leading-4 sm:font-normal sm:mt-10  sm:mb-4">Time remaining: {timeLeft} sec</p>
        <div className="mx-auto">
          <div
            className={`sm:text-[14px] sm:mt-6 sm:ml-[126px] flex leading-4 text-[#304BA0] rounded-md underline ${resendEnabled ? 'text-[#304BA0]' : 'text-[#818180] cursor-not-allowed'}`}
            disabled={!resendEnabled}
            onClick={handleResendOtp}
          >
            Resend OTP <img className="sm:ml-1" src={RightIconBlue} alt="rightIconBlue" />
          </div>
          <button
            className="px-[106px] py-4 bg-[#304BA0] hover:bg-[#3E5FC5] text-white rounded-md sm:mt-12 "
            onClick={handleVerifyOtp}
          >
            Verify & Proceed
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginOTPpage
