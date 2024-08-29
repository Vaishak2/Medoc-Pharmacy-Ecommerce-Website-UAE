import React from 'react'
import prodctImg from "../../../../Assets/Top Product image/pngwing.com (14) 1.png"
import PackageDeliverd from "../../../../Assets/Icons/package delivered.svg"
import Star from "../../../../Assets/Icons/star.png"

function OrderCancelRequest() {
    return (
        <div className='text-justify'>
            <h2 className="text-base font-semibold mb-6">Cancel order</h2>
            <div className="flex items-start mt-8 ">
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

            {/* under line border */}
            <div className='border sm:mt-10'></div>

            <div className='text-justifye'>
                <div className='flex sm:mt-10 '>
                    <img className='sm:w-6 sm:h-6' src={PackageDeliverd} alt="" />
                    <p className='sm:text-[14px] sm:leading-6 sm:font-medium sm:ml-2'>Item cancellation requested 9th May, 2024</p>

                </div>
                <div className='sm:ml-8 sm:w-[145px] sm:text-sm'>Reference ID: 234567</div>

            </div>
            {/* under line border */}
            <div className='border sm:mt-10'></div>

            <div className='sm:mt-6'>
                <h1 className='sm:text-[14px] sm:leading-[18px] sm:font-semibold'>Refund Status</h1>
                <p className='sm:w-[395px] sm:text-[12px] sm:leading-[18px] sm:font-normal sm:mt-2'>Once the product has been received by the seller, a refund <br />
                    <span className='sm:font-semibold text-[#304BA0]'>AED 200.00</span> will be processed to your original payment method within a period of 7 business days.</p>
            </div>
            <div className='sm:mt-8 w-fit'>
                <button className='border border-[#304BA0] text-[#304BA0] sm:py-[15px] sm:px-[41px] rounded-lg  sm:font-semibold text-[14px] sm:leading-[18px] sm:mt-6 '>View All Orders</button>
                <button className='bg-[#304BA0] sm:py-[15px] text-white sm:px-[29px] rounded-lg  sm:font-semibold text-[14px] sm:leading-[18px] sm:ml-4 sm:mt-6'>Continue Shopping</button>

            </div>
        </div>
    )
}

export default OrderCancelRequest
