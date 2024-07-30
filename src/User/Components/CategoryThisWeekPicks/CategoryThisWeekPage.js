import React,{useState} from 'react'
import FavLogo from "../../../Assets/Icons/heart-svgrepo-com 1.svg";
import FavLogoFilled from "../../../Assets/Icons/heart-svgrepo.svg"; 
import ProductImage from "../../../Assets/Top Product image/pngwing.com (14) 1.png";
import Star from "../../../Assets/Icons/star.png";
import Cart from "../../../Assets/Icons/shopping_cart_svg.svg";



function CategoryThisWeekPage() {
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
    ]

  return (
    <div>
      <div className='sm:w-[1200px] sm:h-[535px] sm:mt-[64px] sm:mx-auto '>
      <div>
     
        <div className='sm:text-[32px] sm:leading-[24px] font-medium sm:mb-[16px] text-start'>This Week’s Picks</div>
        <div className='sm:text-[16px] leading-[28px] font-normal flex justify-start  '>Get ahead of the curve with our top picks of the week.
       
        </div>
        <div className='grid sm:grid-cols-4 gap-[24px]'>
          {productList.map((product, index) => (

            <div className='sm:w-[282px] sm:h-[421px] mr-[24px] mt-[48px] '>
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
          ))
          }
          
       
          
        </div>

      </div>
    </div>
       
      </div>

  )
}

export default CategoryThisWeekPage
