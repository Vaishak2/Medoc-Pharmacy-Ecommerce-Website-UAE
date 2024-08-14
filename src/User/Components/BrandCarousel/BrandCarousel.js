import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftScrollArrow from '../../../Assets/Icons/Left scroll arrow.png'
import RightScrollArrow from '../../../Assets/Icons/Right scroll arrow.png'
import ViewArrow from "../../../Assets/Icons/Group 515.png";
import BrandImg1 from '../../../Assets/Brand images/brand 1.png'
import BrandImg2 from '../../../Assets/Brand images/brand 2.png'
import BrandImg3 from '../../../Assets/Brand images/brand 3.png'
import BrandImg4 from '../../../Assets/Brand images/brand 4.png'
import BrandImg5 from '../../../Assets/Brand images/brand 5.png'
import BrandImg6 from '../../../Assets/Brand images/brand 6.png'
import './BrandCarousel.css'
import Api from '../../../Services/Api';




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

    const [brands, setBrands] = useState([])

    useEffect(() => {
        Api.get('top_brands')
        .then(response => {
            console.log(response.data.data,'bbbbbbbb')
            setBrands(response.data.data)
        })
    },[])


  return (
    <div className=' w-[1200px] mx-auto pt-[64px]'>

    <div className='text-[32px] leading-[24px]  font-medium text-black text-left'>Shop By Brand</div>

    <div className='sm:text-[16px] leading-[24px] font-normal flex justify-end'>View All
          <img className='sm:w-[16px] sm:h-[16px] my-auto ml-[8px]  ' src={ViewArrow} alt="" />
        </div>

    <div className='pt-[24px]'>

        <Slider {...settings}>
            {brands.map((brand) => (
                <div className='brandCard text-black rounded-full border border-[#D9D9D9] px-[8px] py-[8px]' key={brand.id}>
                    <div className='h-[164px] w-[164px] bg-[#EFEFEF] rounded-full flex items-center justify-center'>
                        <img src={brand.logo_url} className='sm:w-[99px] sm:h-[99px] rounded-full' alt={brand.brand_name} />
                    </div>
                </div>
            ))}
        </Slider>
    </div>
</div>
  )
}

export default BrandCarousel
