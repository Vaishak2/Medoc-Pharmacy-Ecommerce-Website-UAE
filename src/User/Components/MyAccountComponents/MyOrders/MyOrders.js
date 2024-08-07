import React from 'react'
import SearchIcon from '../../../../Assets/Icons/search.png'
import FilterIcon from '../../../../Assets/Icons/filter_alt.png'
import OrderedImg from '../../../../Assets/Order item images/orderImg.png'
import RatingStar from '../../../../Assets/Icons/star.png'

function MyOrders() {
    return (
        <div>

            <div className='flex justify-between'>
                <div className='text-left'>
                    <div className='sm:text-[16px] sm:leading-6 font-semibold'>All Orders</div>
                    <div className='sm:text-[12px] sm:leading-4'>8 Items</div>
                </div>
                <div className='flex sm:h-[48px] gap-4'>
                    <div className='border border-[#B3B3B3] rounded-lg flex sm:mb-[30px] sm:w-[306px] sm:h-[48px]'>
                        <img className='sm:h-6 sm:w-6 my-auto sm:ml-4' src={SearchIcon}></img>
                        <input className='sm:ml-2 placeholder-[16px] placeholder-[#A8A8A8] rounded-lg' type='text' placeholder='Search Position'></input>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='sm:w-[15px] sm:h-[15px]' src={FilterIcon}></img>
                        <div className='sm:text-[14px] font-medium'>Filters</div>
                    </div>
                </div>
            </div>

            <div className='sm:mt-[32px]'>

                <div className='border border-[#EBEBEB] rounded sm:p-[24px] sm:pb-[15px] sm:mt-4'>
                    <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <div className='sm:w-[89px] sm:h-[89px] bg-[#F0F0F0] flex items-center justify-center'>
                                <img className='sm:w-[36px] sm:h-[45px]' src={OrderedImg} alt=''></img>
                            </div>
                            <div>
                                <div className='sm:w-[343px] sm:text-[14px] text-left leading-6'>Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet</div>
                                <div className='sm:text-[14px] flex gap-[22px] sm:mt-[19px]'>
                                    <div>Size: 250 ml</div>
                                    <div>Qty: 2</div>
                                </div>
                            </div>
                        </div>
                        <div className='text-[#1BA177] sm:text-[14px] border border-[#1BA177] h-fit px-4 rounded-lg'>In-process</div>
                    </div>
                    <div className='border-b border-[#EBEBEB] sm:mt-6'></div>
                    <div className='text-[14px] text-left sm:mt-[15px]'>Order Date: 26th Nov, 2024</div>
                </div>

                <div className='border border-[#EBEBEB] rounded sm:p-[24px] sm:pb-[15px] sm:mt-4'>
                    <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <div className='sm:w-[89px] sm:h-[89px] bg-[#F0F0F0] flex items-center justify-center'>
                                <img className='sm:w-[36px] sm:h-[45px]' src={OrderedImg} alt=''></img>
                            </div>
                            <div>
                                <div className='sm:w-[343px] sm:text-[14px] text-left leading-6'>Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet</div>
                                <div className='sm:text-[14px] flex gap-[22px] sm:mt-[19px]'>
                                    <div>Size: 250 ml</div>
                                    <div>Qty: 2</div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col items-end justify-between'>
                            <div className='text-[#1BA177] sm:text-[14px] bg-[#B9E0C8] h-fit w-fit px-4 rounded-lg'>Delivered</div>
                            <div className='flex gap-[6px]'>
                                <div>
                                    <img className='sm:h-5 sm:w-5' src={RatingStar}></img>
                                </div>
                                <div className='sm:text-[14px]'>Rate & Review Product</div>
                            </div>
                        </div>

                    </div>
                    <div className='border-b border-[#EBEBEB] sm:mt-6'></div>

                    <div className='text-[14px] text-left sm:mt-[15px]'>Order Date: 26th Nov, 2024</div>

                </div>



                <div className='border border-[#EBEBEB] rounded sm:p-[24px] sm:pb-[15px] sm:mt-4'>
                    <div className='flex justify-between'>
                        <div className='flex gap-4'>
                            <div className='sm:w-[89px] sm:h-[89px] bg-[#F0F0F0] flex items-center justify-center'>
                                <img className='sm:w-[36px] sm:h-[45px]' src={OrderedImg} alt=''></img>
                            </div>
                            <div>
                                <div className='sm:w-[343px] sm:text-[14px] text-left leading-6'>Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet</div>
                                <div className='sm:text-[14px] flex gap-[22px] sm:mt-[19px]'>
                                    <div>Size: 250 ml</div>
                                    <div>Qty: 2</div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col items-end justify-between'>
                            <div className='text-[#FD9801] sm:text-[14px] bg-[#FFF3E3] h-fit w-fit px-4 rounded-lg'>Returned</div>
                            <div className='flex gap-[6px]'>
                                <div>
                                    <img className='sm:h-5 sm:w-5' src={RatingStar}></img>
                                </div>
                                <div className='sm:text-[14px]'>Rate & Review Product</div>
                            </div>
                        </div>

                    </div>
                    <div className='border-b border-[#EBEBEB] sm:mt-6'></div>

                    <div className='text-[14px] text-left sm:mt-[15px]'>Order Date: 26th Nov, 2024</div>

                </div>


            </div>

        </div>
    )
}

export default MyOrders
