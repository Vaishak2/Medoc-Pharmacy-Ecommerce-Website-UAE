import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftScrollArrow from '../../../Assets/Icons/Left scroll arrow.png'
import RightScrollArrow from '../../../Assets/Icons/Right scroll arrow.png'
import FavLogo from "../../../Assets/Icons/heart-svgrepo-com 1.svg";
import FavLogoFilled from "../../../Assets/Icons/heart-svgrepo.svg";
import Star from "../../../Assets/Icons/star.png";
import Cart from "../../../Assets/Icons/shopping_cart_svg.svg";
import ViewArrow from "../../../Assets/Icons/Group 515.png";
import ProductImage from "../../../Assets/Top Product image/pngwing.com (14) 1.png";
import './RecentlyviewedCarousel.css'


const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <img src={RightScrollArrow}
            className={`${className} custom-next-arrow`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
        </img>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <img src={LeftScrollArrow}
            className={`${className} custom-prev-arrow`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
        </img>
    );
};

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 768, // Adjust the breakpoint value as needed
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ],

    className: "custom-carousel"

};


function RecentlyviewedCarousel() {

    const [favorite, setFavorite] = useState(Array(8).fill(false)); // Array to hold favorite status for each product

    const toggleFavorite = (index) => {
        const newFavorite = [...favorite];
        newFavorite[index] = !newFavorite[index];
        setFavorite(newFavorite);
    };


    const productList = [
        {
            "id": 1,
            "name": "Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet",
            "image": ProductImage,
            "rating": "3.5",
            "price": "AED 600",
            "discount": "30% OFF",
            "offerPrice": "AED 405"
        },
        {
            "id": 2,
            "name": "Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet",
            "image": ProductImage,
            "rating": "3.5",
            "price": "AED 600",
            "discount": "30% OFF",
            "offerPrice": "AED 405"
        },
        {
            "id": 3,
            "name": "Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet",
            "image": ProductImage,
            "rating": "3.5",
            "price": "AED 600",
            "discount": "30% OFF",
            "offerPrice": "AED 405"
        },
        {
            "id": 4,
            "name": "Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet",
            "image": ProductImage,
            "rating": "3.5",
            "price": "AED 600",
            "discount": "30% OFF",
            "offerPrice": "AED 405"
        },
        {
            "id": 1,
            "name": "Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet",
            "image": ProductImage,
            "rating": "3.5",
            "price": "AED 600",
            "discount": "30% OFF",
            "offerPrice": "AED 405"
        },
        {
            "id": 2,
            "name": "Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet",
            "image": ProductImage,
            "rating": "3.5",
            "price": "AED 600",
            "discount": "30% OFF",
            "offerPrice": "AED 405"
        },
        {
            "id": 3,
            "name": "Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet",
            "image": ProductImage,
            "rating": "3.5",
            "price": "AED 600",
            "discount": "30% OFF",
            "offerPrice": "AED 405"
        },
        {
            "id": 4,
            "name": "Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet",
            "image": ProductImage,
            "rating": "3.5",
            "price": "AED 600",
            "discount": "30% OFF",
            "offerPrice": "AED 405"
        },

    ]

    return (
        <div className=' w-[1200px] mx-auto pt-[64px]'>

            <div className='text-[32px] leading-[24px]  font-medium text-black text-left'>Recently Viewed</div>

            <div className='pt-[48px]'>

                <Slider {...settings}>
                    {productList.map((product, index) => (
                        <div className='recentlyviewedCard'>
                            <div className='sm:w-[282px] sm:h-[213px] bg-[#ececec] rounded-[8px] pt-[11px] '>
                                <img
                                    className='ml-[242px] cursor-pointer  '
                                    src={favorite[index] ? FavLogoFilled : FavLogo}
                                    alt=""
                                    onClick={() => toggleFavorite(index)}
                                />
                                <img className='sm:w-[103] sm:h-[132px] mx-auto ' src={product.image} alt="" />
                                <div className='sm:w-[69px] sm:h-[28px] border bg-[#ffff] rounded-[4px] flex ml-[10px] mt-[4px]  '>
                                    <div className=' flex text-center ml-[12px] '>
                                        <img className='sm:w-[16px] sm:h-[16px] mt-[6px] ' src={Star} alt="" />
                                        <div className='sm:w-[23px] sm:h-[16px] text-[16px] translate-y-[2px] ml-[6px] '>{product.rating}</div>

                                    </div>

                                </div>

                            </div>
                            <div className='sm:text-start sm:text-[16px] sm:leading-[24px] font-normal sm:mt-[16px] mb-[16px] '>
                                {product.name}
                            </div>
                            <div className='sm:w-[281px] sm:h-[128] '>
                                <div className='flex sm:text-start sm:text-[16px] sm:leading-[28px] '>
                                    <h1 className='line-through text-[#A8A8A8]'>{product.price}</h1>
                                    <h1 className='ml-[8px] text-[#0FB015]'>{product.discount} </h1>
                                </div>
                                <h1 className='sm:text-[18px] sm:leading-[28px] font-medium text-start mb-[16px]  '> {product.offerPrice} </h1>
                                <div className='sm:w-[281px] sm:h-[48px] bg-[#304BA0] rounded-[8px] pt-[12px] cursor-pointer '>

                                    <img className='sm:w-[24px] sm:h-[24px]  ml-[83px]  ' src={Cart} alt="" />
                                    <div className='text-white ml-[42px] mt-[-23px]  '>Add To Cart</div>

                                </div>

                            </div>

                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default RecentlyviewedCarousel
