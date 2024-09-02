import React, { useState } from 'react';
import prodctImg from "../../../../Assets/Top Product image/pngwing.com (14) 1.png";
import PackageDeliverd from "../../../../Assets/Icons/package delivered.svg";
import DownArrow from "../../../../Assets/Icons/chevron_forward.svg";
import upArrow from "../../../../Assets/Icons/upArrow.svg";

function OrderRefundConfirmed() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='text-justify'>
            <h2 className="text-base font-semibold mb-6">Cancel order</h2>
            <div className="flex items-start mt-8">
                <div className='bg-[#F0F0F0] py-5 px-6 rounded-md'>
                    <img src={prodctImg} alt="Product" className="w-[35.85px] h-[45.31px] object-cover" />
                </div>
                <div className='sm:ml-8'>
                    <p className="font-normal sm:text-sm sm:w-[343px]">
                        Multivitamin Vitality Vitamin Healthkart <br />Veg 2m Tablet
                    </p>
                    <div className='flex sm:text-[14px] sm:leading-4 sm:mt-5'>
                        <p>Size: 250 ml</p>
                        <p className='sm:ml-7'>Qty: 2</p>
                    </div>
                </div>
                <div className="sm:ml-[176px] flex text-sm">
                    <p>Order Date:</p>
                    <p className='sm:ml-2'>26th Nov, 2024</p>
                </div>
            </div>

            {/* under line border */}
            <div className='border sm:mt-10'></div>

            <div className='text-justifye'>
                <div className='flex sm:mt-10'>
                    <img className='sm:w-6 sm:h-6' src={PackageDeliverd} alt="Package Delivered" />
                    <p className='sm:text-[14px] sm:leading-6 sm:font-medium sm:ml-2'>
                        Item cancellation requested 9th May, 2024
                    </p>
                </div>
                <div className='sm:ml-8 sm:w-[145px] sm:text-sm'>Reference ID: 234567</div>
            </div>

            {/* under line border */}
            <div className='border sm:mt-10'></div>

            <div className='flex sm:mt-10 justify-between cursor-pointer' onClick={toggleDropdown}>
                <p className='sm:text-[14px] sm:leading-6 sm:font-medium sm:ml-2'>View shipment history</p>
                <img className='sm:w-6 sm:h-6' src={isOpen ? upArrow : DownArrow} alt="Toggle dropdown" />
            </div>
            <div
                className={`sm:ml-2 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                {/* Dropdown content goes here */}
                <p className=''>dropdown contents here</p>
            </div>

            {/* under line border */}
            <div className='border sm:mt-10'></div>

            <div className='sm:mt-6'>
                <h1 className='sm:text-[14px] sm:leading-[18px] sm:font-semibold'>Refund Status</h1>
                <p className='sm:w-[395px] sm:text-[12px] sm:leading-[18px] sm:font-normal sm:mt-2'>
                    Refund of amount <span className='sm:font-semibold text-[#304BA0]'>AED 200.00</span> has been processed and credited back to your original payment method.
                </p>
            </div>
            <div className='w-fit'>
                <button className='border border-[#304BA0] text-[#304BA0] sm:py-[15px] sm:px-[41px] rounded-lg sm:font-semibold text-[14px] sm:leading-[18px] sm:mt-6'>
                    View All Orders
                </button>
                <button className='bg-[#304BA0] sm:py-[15px] text-white sm:px-[29px] rounded-lg sm:font-semibold text-[14px] sm:leading-[18px] sm:ml-4 sm:mt-6'>
                    Continue Shopping
                </button>
            </div>
        </div>
    );
}

export default OrderRefundConfirmed;
