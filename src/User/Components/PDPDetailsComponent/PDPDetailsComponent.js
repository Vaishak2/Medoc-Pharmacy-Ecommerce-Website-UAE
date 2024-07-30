import React, { useState } from 'react'
import './PDPDetailsComponent.css'
import RatingStar from '../../../Assets/Icons/star.png'
import customerImage from '../../../Assets/customer Images/customer-image.png'
import checkCircle from '../../../Assets/Icons/check_circle.png'
import LikeButton from '../../../Assets/Icons/thumb_up.png'
import DislikeButton from '../../../Assets/Icons/thumb_down.png'
import forwardIcon from '../../../Assets/Icons/blue forward.png'

function PDPDetailsComponent() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    const products = [
        {
            "product_id": 1,
            "product_name": "Wireless Mouse",
            "image_url": "https://via.placeholder.com/200?text=Wireless+Mouse",
            "description": "A sleek and ergonomic wireless mouse with high precision and long battery life."
        },
        {
            "product_id": 2,
            "product_name": "Bluetooth Headphones",
            "image_url": "https://via.placeholder.com/200?text=Bluetooth+Headphones",
            "description": "Noise-cancelling Bluetooth headphones with superior sound quality and comfortable fit."
        },
        {
            "product_id": 3,
            "product_name": "Smart Watch",
            "image_url": "https://via.placeholder.com/200?text=Smart+Watch",
            "description": "A versatile smart watch with fitness tracking, heart rate monitoring, and customizable watch faces."
        },
        {
            "product_id": 4,
            "product_name": "Portable Speaker",
            "image_url": "https://via.placeholder.com/200?text=Portable+Speaker",
            "description": "A compact portable speaker with powerful sound and long-lasting battery for outdoor use."
        },
        {
            "product_id": 5,
            "product_name": "External Hard Drive",
            "image_url": "https://via.placeholder.com/200?text=External+Hard+Drive",
            "description": "A high-capacity external hard drive with fast data transfer speeds and durable design."
        },
        {
            "product_id": 6,
            "product_name": "Wireless Mouse",
            "image_url": "https://via.placeholder.com/200?text=Wireless+Mouse",
            "description": "A sleek and ergonomic wireless mouse with high precision and long battery life."
        },
        {
            "product_id": 7,
            "product_name": "Bluetooth Headphones",
            "image_url": "https://via.placeholder.com/200?text=Bluetooth+Headphones",
            "description": "Noise-cancelling Bluetooth headphones with superior sound quality and comfortable fit."
        },
        {
            "product_id": 8,
            "product_name": "Smart Watch",
            "image_url": "https://via.placeholder.com/200?text=Smart+Watch",
            "description": "A versatile smart watch with fitness tracking, heart rate monitoring, and customizable watch faces."
        },
        {
            "product_id": 9,
            "product_name": "Portable Speaker",
            "image_url": "https://via.placeholder.com/200?text=Portable+Speaker",
            "description": "A compact portable speaker with powerful sound and long-lasting battery for outdoor use."
        },
        {
            "product_id": 10,
            "product_name": "External Hard Drive",
            "image_url": "https://via.placeholder.com/200?text=External+Hard+Drive",
            "description": "A high-capacity external hard drive with fast data transfer speeds and durable design."
        }
    ];

    return (
        <div className='w-[1200px] mx-auto mt-[64px]'>
            <div>
                <div className='flex'>
                    <div className={toggleState === 1 ? 'tabButton active-tabButton' : 'tabButton'} onClick={() => toggleTab(1)}>PRODECT DETAILS</div>
                    <div className={toggleState === 2 ? 'tabButton active-tabButton' : 'tabButton'} onClick={() => toggleTab(2)}>CUSTOMER REVIEWS</div>
                    <div className={toggleState === 3 ? 'tabButton active-tabButton' : 'tabButton'} onClick={() => toggleTab(3)}>MORE INFO</div>
                </div>
                <div>

                    <div className={toggleState === 1 ? 'tabContent active-tabContent' : 'tabContent'}>
                        <div className='mt-[32px]'>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos. Donec pretium egestas sapien et mollis</div>
                        <div className='mt-[12px]'>- Multi stripe midi length shirt dress</div>
                        <div className='mt-[12px]'>- 3/4 sleeve with ruffle for cuff</div>
                        <div className='mt-[12px]'>- Asymmetrical gathered skirt tiers at front</div>
                        <div className='mt-[12px]'>- Classic collared neckline</div>
                        <div className='mt-[12px]'>- Exposed self covered button closure to centre front</div>
                        <div className='mt-[12px]'>- Fits true to size for a relaxed fit</div>
                        <div className='mt-[12px]'>- Customers who prefer a slimmer fit may choose to size down</div>
                        <div className='mt-[12px]'>- 100% Cotton</div>
                        <div className='mt-[12px]'>- Light-weight, non stretchy fabric</div>
                        <div className='mt-[12px]'>- Gentle machine wash in cold water</div>
                    </div>





                    <div className={toggleState === 2 ? 'tabContent active-tabContent' : 'tabContent'}>

                        <div>
                            <div className='mt-[24px] text-[16px] font-semibold leading-5'>Ratings</div>
                            <div className='mt-[20px] flex items-center'>
                                <div className='text-[32px] font-medium leading-[40px]'>4.4</div>
                                <div className='ml-2'>
                                    <img className='w-[24px] h-[24px]' src={RatingStar}></img>
                                </div>
                            </div>
                            <div className='mt-[4px] text-[14px] font-normal leading-5 text-[#001325B8]'>506 verified ratings</div>
                        </div>

                        <div className='mt-[24px] border-y border-[#EBEBEB] pb-[24px] w-[792px]'>
                            <div className='mt-[24px] text-[16px] font-semibold leading-6'>Customer Photos</div>
                            <div className='mt-[16px] flex gap-6'>
                                <div>
                                    <img className='w-[66px] h-[64px] rounded' src={customerImage}></img>
                                </div>
                                <div>
                                    <img className='w-[66px] h-[64px] rounded' src={customerImage}></img>
                                </div>
                                <div>
                                    <img className='w-[66px] h-[64px] rounded' src={customerImage}></img>
                                </div>
                                <div>
                                    <img className='w-[66px] h-[64px] rounded' src={customerImage}></img>
                                </div>
                            </div>
                        </div>

                        <div className='w-[792px]'>
                            <div className='mt-[24px] text-[16px] font-semibold leading-6'>Customer Reviews</div>

                            <div className='border border-[#EBEBEB] rounded-lg mt-[16px]'>
                                <div className='p-[24px]'>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <div className='border-2 border-[#304BA0] rounded-full w-[50px] h-[50px] bg-[#D3DBF6] flex items-center justify-center text-[16px] font-semibold text-[#304BA0]'>V</div>
                                            <div className='ml-2'>
                                                <div className='text-[14px] font-medium leading-5'>Varun varma</div>
                                                <div className='mt-[8px] w-[38px] h-[24px] bg-[#304BA0] rounded text-white text-[14px] font-medium flex items-center justify-center leading-5'>4.5</div>
                                            </div>
                                        </div>
                                        <div className='text-[12px] text-[#A8A8A8] leading-4 font-normal text-right'>
                                            <div className='flex items-center'>
                                                <img className='w-[14px] h-[14px]' src={checkCircle}></img>
                                                <div className='ml-[3px]'>Verified Buyers</div>
                                            </div>

                                            <div className='mt-[8px]'>18/05/2024</div>
                                        </div>
                                    </div>
                                    <div className='mt-[24px]'>
                                        <div className='text-[14px] font-semibold leading-5'>"Amazing"</div>
                                        <div className='mt-[16px] text-[14px] font-normal leading-[22px]'>I have been using the other spf50 sunscreen from minimalist, i decided to try this one just to compare them. I love this one wayyyy more since i live in a very humid climate</div>
                                    </div>
                                    <div className='mt-[16px] hidden gap-6'>
                                        <div>
                                            <img className='w-[66px] h-[64px] rounded' src={customerImage}></img>
                                        </div>
                                        <div>
                                            <img className='w-[66px] h-[64px] rounded' src={customerImage}></img>
                                        </div>
                                        <div>
                                            <img className='w-[66px] h-[64px] rounded' src={customerImage}></img>
                                        </div>
                                        <div>
                                            <img className='w-[66px] h-[64px] rounded' src={customerImage}></img>
                                        </div>
                                    </div>
                                </div>

                                <div className='border-b'></div>

                                <div className='px-[24px] py-[16px] '>
                                    <div className='flex justify-between'>
                                        <div className='text-[14px] leading-[20px] font-medium'>Is this review helpful for you?</div>
                                        <div className='flex gap-6'>
                                            <div className='flex items-center'>
                                                <img className='h-[24px] w-[24px]' src={LikeButton}></img>
                                                <div className='ml-[8px] text-[14px] font-normal leading-6'>(16)</div>
                                            </div>
                                            <div className='flex items-center'>
                                                <img className='h-[24px] w-[24px]' src={DislikeButton}></img>
                                                <div className='ml-[8px] text-[14px] font-normal leading-6'>(6)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='border border-[#EBEBEB] rounded-lg mt-[16px]'>
                                <div className='p-[24px]'>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <div className='border-2 border-[#304BA0] rounded-full w-[50px] h-[50px] bg-[#D3DBF6] flex items-center justify-center text-[16px] font-semibold text-[#304BA0]'>V</div>
                                            <div className='ml-2'>
                                                <div className='text-[14px] font-medium leading-5'>Varun varma</div>
                                                <div className='mt-[8px] w-[38px] h-[24px] bg-[#304BA0] rounded text-white text-[14px] font-medium flex items-center justify-center leading-5'>4.5</div>
                                            </div>
                                        </div>
                                        <div className='text-[12px] text-[#A8A8A8] leading-4 font-normal text-right'>
                                            <div className='flex items-center'>
                                                <img className='w-[14px] h-[14px]' src={checkCircle}></img>
                                                <div className='ml-[3px]'>Verified Buyers</div>
                                            </div>

                                            <div className='mt-[8px]'>18/05/2024</div>
                                        </div>
                                    </div>
                                    <div className='mt-[24px]'>
                                        <div className='text-[14px] font-semibold leading-5'>"Amazing"</div>
                                        <div className='mt-[16px] text-[14px] font-normal leading-[22px]'>I have been using the other spf50 sunscreen from minimalist, i decided to try this one just to compare them. I love this one wayyyy more since i live in a very humid climate</div>
                                    </div>
                                    <div className='mt-[16px] flex gap-6'>
                                        <div>
                                            <img className='w-[66px] h-[64px] rounded' src={customerImage}></img>
                                        </div>
                                        <div>
                                            <img className='w-[66px] h-[64px] rounded' src={customerImage}></img>
                                        </div>
                                        <div>
                                            <img className='w-[66px] h-[64px] rounded' src={customerImage}></img>
                                        </div>
                                        <div>
                                            <img className='w-[66px] h-[64px] rounded' src={customerImage}></img>
                                        </div>
                                    </div>
                                </div>

                                <div className='border-b'></div>

                                <div className='px-[24px] py-[16px] '>
                                    <div className='flex justify-between'>
                                        <div className='text-[14px] leading-[20px] font-medium'>Is this review helpful for you?</div>
                                        <div className='flex gap-6'>
                                            <div className='flex items-center'>
                                                <img className='h-[24px] w-[24px]' src={LikeButton}></img>
                                                <div className='ml-[8px] text-[14px] font-normal leading-6'>(16)</div>
                                            </div>
                                            <div className='flex items-center'>
                                                <img className='h-[24px] w-[24px]' src={DislikeButton}></img>
                                                <div className='ml-[8px] text-[14px] font-normal leading-6'>(6)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='border border-[#EBEBEB] rounded-lg mt-[16px]'>
                                <div className='p-[24px]'>
                                    <div className='flex justify-between'>
                                        <div className='flex items-center'>
                                            <div className='border-2 border-[#304BA0] rounded-full w-[50px] h-[50px] bg-[#D3DBF6] flex items-center justify-center text-[16px] font-semibold text-[#304BA0]'>V</div>
                                            <div className='ml-2'>
                                                <div className='text-[14px] font-medium leading-5'>Varun varma</div>
                                                <div className='mt-[8px] w-[38px] h-[24px] bg-[#304BA0] rounded text-white text-[14px] font-medium flex items-center justify-center leading-5'>4.5</div>
                                            </div>
                                        </div>
                                        <div className='text-[12px] text-[#A8A8A8] leading-4 font-normal text-right'>
                                            <div className='flex items-center'>
                                                <img className='w-[14px] h-[14px]' src={checkCircle}></img>
                                                <div className='ml-[3px]'>Verified Buyers</div>
                                            </div>

                                            <div className='mt-[8px]'>18/05/2024</div>
                                        </div>
                                    </div>
                                    <div className='mt-[24px]'>
                                        <div className='text-[14px] font-semibold leading-5'>"Amazing"</div>
                                        <div className='mt-[16px] text-[14px] font-normal leading-[22px]'>I have been using the other spf50 sunscreen from minimalist, i decided to try this one just to compare them. I love this one wayyyy more since i live in a very humid climate</div>
                                    </div>
                                    <div className='mt-[16px] hidden gap-6'>
                                        <div>
                                            <img className='w-[66px] h-[64px] rounded' src={customerImage}></img>
                                        </div>
                                        <div>
                                            <img className='w-[66px] h-[64px] rounded' src={customerImage}></img>
                                        </div>
                                        <div>
                                            <img className='w-[66px] h-[64px] rounded' src={customerImage}></img>
                                        </div>
                                        <div>
                                            <img className='w-[66px] h-[64px] rounded' src={customerImage}></img>
                                        </div>
                                    </div>
                                </div>

                                <div className='border-b'></div>

                                <div className='px-[24px] py-[16px] '>
                                    <div className='flex justify-between'>
                                        <div className='text-[14px] leading-[20px] font-medium'>Is this review helpful for you?</div>
                                        <div className='flex gap-6'>
                                            <div className='flex items-center'>
                                                <img className='h-[24px] w-[24px]' src={LikeButton}></img>
                                                <div className='ml-[8px] text-[14px] font-normal leading-6'>(16)</div>
                                            </div>
                                            <div className='flex items-center'>
                                                <img className='h-[24px] w-[24px]' src={DislikeButton}></img>
                                                <div className='ml-[8px] text-[14px] font-normal leading-6'>(6)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-[26px] flex items-center justify-between pr-[24px]'>
                                <div className='text-[14px] leading-5 font-medium text-[#304BA0]'>Read all 185 reviews</div>
                                <img className='h-[12px] w-[7px]' src={forwardIcon}></img>
                            </div>

                            <div className='border-b mt-[24px]'></div>

                        </div>     

                    </div>


                    <div className={toggleState === 3 ? 'tabContent active-tabContent' : 'tabContent'}>

                        <div className='mt-[24px]'>
                            <div className='text-[16px] leading-6 font-medium'>Marketer details</div>
                            <div className='mt-[5px] text-[14px] leading-[21px] font-normal'>
                                <div className='mt-[3px]'>Name: Zuventus Healthcare Ltd</div>
                                <div className='mt-[3px]'>Address: C/50, Agro park,UPSCID Kursi Road, Uttarpradesh</div>
                            </div>
                        </div>

                        <div className='mt-[24px]'>
                            <div className='text-[16px] leading-6 font-medium'>Manufacture details</div>
                            <div className='mt-[5px] text-[14px] leading-[21px] font-normal'>
                                <div className='mt-[3px]'>Name: Zuventus Healthcare Ltd</div>
                                <div className='mt-[3px]'>Address: C/50, Agro park,UPSCID Kursi Road, Uttarpradesh</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default PDPDetailsComponent
