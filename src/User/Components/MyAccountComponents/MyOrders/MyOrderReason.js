import React from 'react'
import prodctImg from "../../../../Assets/Top Product image/pngwing.com (14) 1.png"

function MyOrderReason() {
  return (
    <div>
         <div className="flex items-start ">
                        <div className='bg-[#F0F0F0] py-5 px-6 rounded-md'> <img src={prodctImg} alt="Product" className="w-[35.85px] h-[45.31px] object-cover" /> </div>
                        <div className='sm:ml-8'>
                            <p className="font-normal sm:text-sm sm:w-[343px]">Multivitamin Vitality Vitamin Healthkart <br />Veg 2m Tablet</p>
                            <div className='flex sm:text-[14px] sm:leading-4 sm:mt-5  '> <p>Size: 250 ml</p>
                                <p className='sm:ml-7'>Qty: 2</p>
                            </div>
                        </div>
                        <div className="sm:ml-[176px] flex text-sm">
                            <p>Order Date:</p>
                            <p className='sm:ml-2'>26th Nov, 2024</p>
                        </div>
                    </div>
    </div>

  )
}

export default MyOrderReason