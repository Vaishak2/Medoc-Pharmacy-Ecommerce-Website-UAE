import React from 'react'
import LeftArrow from "../../../../Assets/Icons/LeftArrow.svg"
import prdctImg from "../../../../Assets/Top Product image/pngwing.com (14) 1.png"
import FillRoundedCheck from "../../../../Assets/Icons/Fill_round_check.svg"
import Garnier from "../../../../Assets/Top Product image/garnier.png"

function RateAndReview() {
    return (
        <div className='text-justify'>
            {/* Heading */}
            <div className='flex'>
                <img className='sm:w-4 sm:h-4 my-auto' src={LeftArrow} alt="" />
                <div className='sm:text-[16px] sm:leading-6 font-semibold text-left'> Rate & review</div>
            </div>
            {/* submited section */}

            <div className='flex sm:mt-6'>
                <div className='sm:w-[68px] sm:h-[80px] bg-[#F0F0F0] rounded-lg py-4 '><img className='sm:w-12 sm:h-12 mx-auto' src={prdctImg} alt="" /></div>
                <div className=' sm:ml-4 justify-center sm:h-4'>
                    <div className='flex'><img className='sm:w-4 sm:h-4 ' src={FillRoundedCheck} alt="" />
                        <div className='sm:text-sm text-[#304BA0] sm:font-medium sm:ml-1'>Review submitted - Thank you ! </div>
                    </div>
                    <div className='sm:text-[14px] sm:font-medium sm:mt-5'>Multivitamin Vitality Vitamin <br />
                        Healthkart Veg 2m Tablet</div>
                </div>
            </div>
            <div className='border-t sm:mt-6'>

            </div>

        <div className='border rounded-lg p-4 sm:mt-6 '>
        <div className='flex'>
        <div className='sm:w-[68px] sm:h-[80px] bg-[#F0F0F0] rounded-lg py-4 '><img className='sm:w-12 sm:h-12 mx-auto' src={Garnier} alt="" /></div> 
        
        <div>
        <div className='sm:text-[14px] sm:leading-4 sm:font-normal sm:ml-4 sm:mt-2'>GARNIER Face Wash Men-V2</div>
        <button className='px-8 sm:text-[14px] sm:leading-4 sm:font-medium sm:h-[32px] border rounded-lg sm:mt-4 sm:ml-4'>Add Review</button>
        </div>
        </div>
       
        </div>




        </div>
    )
}

export default RateAndReview
