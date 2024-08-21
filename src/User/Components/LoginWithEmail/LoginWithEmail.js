
import React, { useState } from 'react';
import LoginImage from "../../../Assets/LoginImage/LoginImage.png";
import Checked from "../../../Assets/Icons/checkBox.svg";
import UnChecked from "../../../Assets/Icons/UnCheckedBox.svg";
import Phone from "../../../Assets/Icons/smartphone.svg";
import UAEFlag from "../../../Assets/LoginImage/UAEFlag.png"

function LoginWithEmail() {
    const [isChecked, setIsChecked] = useState(true);
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({ email: "" ,checkbox: "" });

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked);
    };

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            return "Email is required.";
        } else if (!emailRegex.test(email)) {
            return "Please enter a valid email address.";
        }
        return "";
    };

    const handleSub = (e) => {
        e.preventDefault();
        const emailError = validateEmail();
        const checkboxError = isChecked ? "" : "You must agree to the terms and conditions.";

        if (emailError  || checkboxError) {
            setErrors({ email: emailError, checkbox: checkboxError });
        } else {
            setErrors({ email: "", checkbox:"" });
            // Proceed with form submission
            console.log("Form submitted");
        }
    };

    return (
        <div className='flex justify-between'>
            <div className='sm:w-[708px] sm:h-[1024px]'>
                <img src={LoginImage} alt="Login" />
            </div>

            <div className="sm:w-[708px] sm:h-[1024px] items-center justify-center bg-white">
                <h2 className="text-[32px] font-medium mb-6 text-center sm:mt-[208px]">Login</h2>
                <p className="text-center text-[16px] leading-[26px] text-[#636363] font-normal sm:w-[486px] sm:h-[48px] mx-auto mb-4">
                    Get access to your orders, Track previous orders, Book an appointment
                </p>

                <div className='sm:w-[486px] mx-auto'>
                    <form onSubmit={handleSub}>
                        <div>
                            <label className="block mb-2 text-justify font-medium" htmlFor="email">Email Address</label>
                            <div className={`flex items-center border border-gray-300 rounded-lg px-4 py-[14px] ${errors.email ? 'border-red-500' : 'border-gray-300'} `}>
                                <input
                                    className="flex-grow border-none focus:outline-none"
                                    type="tel"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1 text-justify">{errors.email}</p>}
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
                            <img className='my-auto sm:w-6 sm:h-6' src={Phone} alt="Mail Icon" />
                            <h1 className="my-auto ml-[10px]">Continue with Phone Number</h1>
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

export default LoginWithEmail;
