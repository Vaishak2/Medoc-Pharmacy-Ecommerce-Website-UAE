import React, { useState } from 'react';
import ProductImg from "../../../Assets/Top Product image/pngwing.com (14) 1.png";
import star from "../../../Assets/Icons/star.png";
import Review from "../../../Assets/customer Review/photo.png";
import Verify from "../../../Assets/Icons/check_circle.svg"
import Like from "../../../Assets/Icons/thumb_up.svg"
import UnLike from "../../../Assets/Icons/thumb_down.svg"
import clearLike from "../../../Assets/Icons/thumb_up clear (1).svg"
import clearUnLike from "../../../Assets/Icons/thumb_up clear (2).svg"



function CustomerPhotos({ photos }) {
    const maxVisiblePhotos = 8;
    const remainingPhotos = photos.length - maxVisiblePhotos;

    return (
        <div className="sm:mt-6">
            <h3 className="font-bold text-base mb-4 text-justify">Customer Photos</h3>
            <div className=" flex grid-cols-8 gap-6">
                {photos.slice(0, maxVisiblePhotos).map((photo, index) => (
                    <div key={index} className="relative w-16 h-16 overflow-hidden rounded-lg">
                        <img
                            src={photo}
                            alt={`Customer photo ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        {/* Apply overlay on the last visible photo if there are more photos */}
                        {index === maxVisiblePhotos - 1 && remainingPhotos > 0 && (
                            <div
                                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
                                onClick={() => alert('See More Photos')}
                            >
                                <span className="text-white font-bold">+{remainingPhotos}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="border sm:w-[792px] sm:mt-6"></div>

        </div>
    );
}




function PDPreviewedDetails() {
    const [activeFilter, setActiveFilter] = useState(null);
    const handleClick =(filter)=>{
        setActiveFilter(filter);
    }




    const customerPhotos = [
        Review, // Use the `Review` image source directly
        Review,
        Review,
        Review,
        Review,
        Review,
        Review,
        Review,
        Review,
        Review,
        Review,
        Review,
        Review, 
       
    ];

    const reviews = [
        {
            id: 1,
            name: "Varun Varma",
            rating: 4.5,
            date: "18/05/2024",
            review: "I have been using the other spf50 sunscreen from minimalist, I decided to try this one just to compare them. I love this one wayyyy more since I live in a very humid climate.",
            helpful: '(16)',
            notHelpful: '(6)',
            tittle : "Amazing",
            verified: true,
        },
        {
            id: 2,
            name: "Abhiram Varma",
            rating: 4,
            date: "18/05/2024",
            review: "I have been using the other spf50 sunscreen from minimalist, I decided to try this one just to compare them. I love this one wayyyy more since I live in a very humid climate.",
            helpful: '(16)',
            notHelpful: '(6)',
            tittle : "Amazing",
            verified: true,
        },
    ];


    return (
        <div className="container">
            <div className="flex">
                {/* Left Section - Product Details */}
                <div className=''>
                    <div className="sm:w-[384px] h-[384px] bg-[#F0F0F0] rounded-lg p-[94px]">
                        <img className="sm:w-[154px] sm:h-[195px] mx-auto" src={ProductImg} alt="Product" />
                    </div>
                    <div className="sm:w-[383px] sm:h-[47px] text-justify sm:text-[18px] sm:leading-6 sm:font-normal sm:mt-[21px]">
                        Multivitamin Vitality Vitamin Healthkart <br /> Veg 2m Tablet
                    </div>
                    <div>
                        <h1 className="sm:text-[18px] sm:leading-6 sm:mt-6 text-justify">
                            <span className=" sm:font-semibold">AED 405</span>
                            <span className="sm:font-normal text-[#A8A8A8] line-through mx-4">AED 600</span>
                            <span className="text-[#0FB015]">30% OFF</span>
                        </h1>
                    </div>
                    <div className="sm:text-[14px] sm:leading-4 sm:font-medium text-[#304BA0] text-justify mt-[9px]">
                        YOU SAVE: AED 12.00
                        <span className="sm:text-[14px] sm:leading-4 text-black sm:ml-[11px]">Inclusive of all taxes</span>
                    </div>
                </div>

                {/* Right Section - Reviews */}
                <div className="flex-1 ml-6">
                    <div className="text-justify">
                        <h3 className="text-[16px] font-semibold">Ratings</h3>
                        <div className="text-[32px] font-bold flex sm:font-medium">4.4
                            <img className="sm:w-6 sm:h-6 my-auto sm:ml-2" src={star} alt="Star" />
                        </div>
                        <div className="text-sm text-[#001325B8] opacity-[72%]">506 verified ratings</div>
                    </div>
                    <div className="border sm:w-[792px] sm:mt-6"></div>

                    {/* Customer Photos */}
                    <CustomerPhotos photos={customerPhotos} />
                     <div className='sm:mt-6'>
                    <h1 className=' sm:text-sm sm:text-justify'> Filter photos and reviews by </h1>
                    <div className="mt-4 flex gap-2 ">
                        <button className={`px-4 py-2 border border-[#304BA0] text-[#304BA0] rounded-lg ${activeFilter === 'mostHelpful' ? 'bg-[#304BA0] text-white':''} `}
                        onClick={()=>handleClick('mostHelpful')}
                        >Most helpful</button>
                        <button className={`px-4 py-2 border border-[#304ba0] text-[#304ba0] rounded-lg ${activeFilter=== 'mostRecent' ? 'bg-[#304ba0] text-white':''} `}
                        onClick={()=>handleClick("mostRecent")}
                        >Most recent</button>
                   <button className={`px-4 py-2 border border-[#304ba0] text-[#304ba0] rounded-lg ${activeFilter=== 'positive' ? 'bg-[#304ba0] text-white':''} `}
                        onClick={()=>handleClick("positive")}
                        >Positive</button>
                         <button className={`px-4 py-2 border border-[#304ba0] text-[#304ba0] rounded-lg ${activeFilter=== 'negative' ? 'bg-[#304ba0] text-white':''} `}
                        onClick={()=>handleClick("negative")}
                        >Negative</button>
                    </div>
                    </div>

                    <div className="mt-6 mb-6">
                        {reviews.map((review) => (
                            <div key={review.id} className="">
                            <div className='border-t border-r border-l rounded-b-none rounded-lg px-6 pt-6 pb-4'>
                                <div className="flex items-center gap-2">
                                    <div className="w-[50px] h-[50px] border-2 border-[#304ba4] text-[16px] leading-6 sm:font-semibold text-[#304ba0] bg-[#D3DBF6] flex items-center justify-center rounded-full">
                                        {review.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="sm:font-medium sm:text-[14px] sm:leading-6 sm:tracking-tighter">{review.name}</h4>
                                        <div className="sm:w-[38px] sm:h-[24px] text-center text-white text-sm border sm:px-2 sm:pt-[2px] rounded bg-[#304ba0]">{review.rating}</div>
                                    </div>
                                    {review.verified && (
                                        <span className="text-[12px] text-gray-500 ml-auto flex">{review.date}</span>
                                    )}
                                </div>
                                <div className='text-justify text-sm sm:font-semibold sm:mt-6'>{review.tittle}</div>
                                <div className="mt-4 text-justify sm:text-sm sm:font-normal">{review.review}</div>
                                </div>
                                <div className=" justify-between flex gap-4 border rounded-b-lg  px-6 pt-6 pb-4 mb-4">
                                <div className='sm:text-sm sm:font-medium'>Is this review helpful for you?</div>
                                <div className='flex gap-6'>
                                    <button className="flex items-center gap-1 text-black">
                                        <img src={Like} alt="" /> {review.helpful}
                                    </button>
                                    <button className="flex items-center gap-1 text-black">
                                        <img src={UnLike} alt="" /> {review.notHelpful}
                                    </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PDPreviewedDetails;
