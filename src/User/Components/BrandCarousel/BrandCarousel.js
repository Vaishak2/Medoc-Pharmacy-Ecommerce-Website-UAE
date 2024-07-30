import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftScrollArrow from '../../../Assets/Icons/Left scroll arrow.png'
import RightScrollArrow from '../../../Assets/Icons/Right scroll arrow.png'
import ViewArrow from "../../../Assets/Icons/Group 515.png";
import './BrandCarousel.css'


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
    slidesToShow: 6,
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

function BrandCarousel() {

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
    <div className=' w-[1200px] mx-auto pt-[64px]'>

    <div className='text-[32px] leading-[24px]  font-medium text-black text-left'>Shop By Brand</div>

    <div className='sm:text-[16px] leading-[24px] font-normal flex justify-end'>View All
          <img className='sm:w-[16px] sm:h-[16px] my-auto ml-[8px]  ' src={ViewArrow} alt="" />
        </div>

    <div className='pt-[24px]'>

        <Slider {...settings}>
            {products.map((product) => (
                <div className='brandCard text-black rounded-full border border-[#D9D9D9]  px-[8px] py-[8px] ' key={product.id}>
                    <div className='h-[164px] w-[164px] bg-[#EFEFEF] rounded-full'>
                        {/* <img src={product.image_url} className=' rounded-lg' alt={product.product_name} /> */}
                    </div>
                </div>
            ))}
        </Slider>
    </div>
</div>
  )
}

export default BrandCarousel
