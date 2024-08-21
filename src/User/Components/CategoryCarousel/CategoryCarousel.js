import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftScrollArrow from '../../../Assets/Icons/Left scroll arrow.png'
import RightScrollArrow from '../../../Assets/Icons/Right scroll arrow.png'
import CategoryImage1 from '../../../Assets/CategoryImage/Rectangle 203.png'
import CategoryImage2 from '../../../Assets/CategoryImage/Rectangle 203 (1).png'
import CategoryImage3 from '../../../Assets/CategoryImage/Rectangle 203 (2).png'
import CategoryImage4 from '../../../Assets/CategoryImage/Rectangle 203 (3).png'
import CategoryImage5 from '../../../Assets/CategoryImage/Rectangle 203 (4).png'
import CategoryImage6 from '../../../Assets/CategoryImage/Rectangle 203 (5).png'
import './CategoryCarousel.css'
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

function CategoryCarousel() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        Api.get('categories')
        .then(response => {
            console.log(response.data.data,'cccccc')
            setCategories(response.data.data)
        })
    },[])

    return (
        
        <div className=' w-[1200px] mx-auto pt-[64px]'>

            <div className='text-[32px] leading-[24px]  font-medium text-black text-left'>Shop By Category</div>

            <div className='pt-[48px]'>

                <Slider {...settings}>
                    {categories.map((category) => (
                        <div className='categoryCard text-black rounded-lg border cursor-pointer' key={category.id}>
                            <div className=' flex justify-center items-center'>
                                <img src={category.image_url} className='h-[151px] w-[164px] mt-[8px] rounded-lg' alt={category.name} />
                            </div>
                            <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                <p className='text-[16px] font-medium leading-[20px]'>{category.name}</p>
                                {/* <p>{product.description}</p> */}
                                {/* <button className='bg-yellow-300 text-white text-lg px-6 py-1 rounded-xl'>Read more</button> */}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
        
    )
}

export default CategoryCarousel
