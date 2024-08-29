import React from 'react';
import prodctImg from "../../../../Assets/Top Product image/pngwing.com (14) 1.png"
import PackageDeliverd from "../../../../Assets/Icons/package delivered.svg"
import Star from "../../../../Assets/Icons/star.png"
import DownArrow from "../../../../Assets/Icons/chevron_forward.svg"

const MyOrderCompleted = () => {
    return (
        <div className="flex  bg-gray-100 text-justify">
            {/* Main Content */}
            <main className="flex-1 bg-white ">
                <section className="mb-8">
                    <h2 className="text-base font-semibold mb-6">Order details</h2>
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

                    {/* under line border */}
                    <div className='border sm:mt-10'></div>

                    <div>
                        <div className='flex sm:mt-10'>
                            <img className='sm:w-6 sm:h-6' src={PackageDeliverd} alt="" />
                            <p className='sm:text-[14px] sm:leading-6 sm:font-medium sm:ml-2'>Item delivered on 9th May,2024</p>
                            <img className='sm:w-6 sm:h-6 sm:ml-[387px]' src={Star} alt="" />
                            <p className='sm:text-[14px] sm:leading-6 sm:font-medium sm:ml-2'>Rate & Review Product</p>
                        </div>
                    </div>
                    {/* under line border */}
                    <div className='border sm:mt-10'></div>
                    <div>
                        <div className='flex sm:mt-10 justify-between'>

                            <p className='sm:text-[14px] sm:leading-6 sm:font-medium sm:ml-2'>View shipment history</p>
                            <img className='sm:w-6 sm:h-6 sm:' src={DownArrow} alt="" />

                        </div>
                    </div>
                    {/* under line border */}
                    <div className='border sm:mt-10'></div>


                    <div className="mt-6">
                        <div className="flex justify-between">
                            <div className='sm:text-sm sm:leading-4 '>
                                <p className='sm:font-medium'>Order ID: <span className='sm:font-normal'>452387565</span></p>
                                <p className='sm:font-medium' >Order Date: <span className='sm:font-normal'>6 May 2023</span></p>
                            </div>
                            <div className="text-justify sm:text-sm">
                                <p className='sm:font-medium'>Shipping Details</p>
                                <p className='sm:font-normal sm:mt-4'>Robert Wilson Carolins Davids Andrews,<br /> 3501 Moloy Court,<br /> East Elmhurst,<br /> NY 11369</p>
                            </div>
                            <div className="text-justify sm:text-sm">
                                <p className='sm:font-medium'>Payment Method</p>
                                <p className='sm:font-normal sm:mt-4'>Cash on Delivery</p>
                            </div>
                        </div>
                        <div className='sm:ml-auto w-fit'>
                            <button className='bg-[#F5F5F5] sm:py-[15px] sm:px-[48px] rounded-lg  sm:font-semibold text-[14px] sm:leading-[18px] sm:mt-6'>Return Request</button>
                            <button className='border border-[#304BA0] text-[#304BA0] sm:py-[15px] sm:px-[48px] rounded-lg  sm:font-semibold text-[14px] sm:leading-[18px] sm:mt-6 sm:ml-4'>Download Invoice</button>
                        </div>

                    </div>


                </section>



                <section className='sm:mt-14'>
                    <h2 className="text-base font-medium ">Order Summary</h2>
                    <h2 className="text-sm font-semibold">Price Details</h2>
                    <div className="space-y-4 sm:text-base sm:font-normal">
                        <div className="flex justify-between sm:mt-4">
                            <div><p>Sub Total</p><p className='sm:text-xs text-[#818180] '>(Excl. of Taxes)</p></div>
                            <p>AED 720.00</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Total Savings</p>
                            <p className='text-[#1BA177]'>-AED 220.00</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Coupon Discount</p>
                            <p className='text-[#DC0073] '>-AED 30.00</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Taxes</p>
                            <p>AED 50.00</p>
                        </div>
                        <div className='border'></div>
                        <div className="flex justify-between">
                            <p className="font-semibold">Total Amount</p>
                            <p className="font-semibold">AED 470.00</p>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className="w-full py-2 border sm:text-base sm:font-medium border-[#304BA0] text-[#304BA0] rounded-md">Download Invoice</button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default MyOrderCompleted;
