import React,{useContext, useEffect, useState} from 'react'
import FavLogo from "../../../Assets/Icons/heart-svgrepo-com 1.svg";
import FavLogoFilled from "../../../Assets/Icons/heart-svgrepo.svg"; 
import ProductImage from "../../../Assets/Top Product image/pngwing.com (14) 1.png";
import Star from "../../../Assets/Icons/star.png";
import Cart from "../../../Assets/Icons/shopping_cart_svg.svg";
import Api from '../../../Services/Api';
import { userContext } from '../../UserLayout';



function CategoryThisWeekPage() {

    const [thisWeekPicks, setThisWeekPicks] = useState([])

    const {cart,setCart} = useContext(userContext)

    const userId = localStorage.getItem("userId")

    const [favorite, setFavorite] = useState(Array(8).fill(false)); // Array to hold favorite status for each product

    const addToCart =(productId)=> {
      Api.post('cart/add', {
        "userId": userId,
        "productId": productId,
        "quantity": 1,
        "size": "300"
      })
      .then(response=>{
        console.log(response.data.message,'This week added to cart')
      })
    }

    const removeFromCart =(productId)=> {
      Api.post('cart/remove', {
        "userId": userId,
        "productId": productId
      })
      .then(response=>{
        console.log(response.data.message)
      })
    }

    const toggleFavorite = (index) => {
      const newFavorite = [...favorite];
      newFavorite[index] = !newFavorite[index];
      setFavorite(newFavorite);
    };
  

    useEffect(() => {
      Api.get('deals')
      .then(response => {
        console.log(response.data.data.productsList[0],'weeeeeekk')
        setThisWeekPicks(response.data.data.productsList[0])
      })
    },[])

    
  return (
    <div>
      <div className='sm:w-[1200px] sm:h-[535px] sm:mt-[64px] sm:mx-auto '>
      <div>
     
        <div className='sm:text-[32px] sm:leading-[24px] font-medium sm:mb-[16px] text-start'>This Week’s Picks</div>
        <div className='sm:text-[16px] leading-[28px] font-normal flex justify-start  '>Get ahead of the curve with our top picks of the week.
       
        </div>
        <div className='grid sm:grid-cols-4 gap-[24px]'>
          {thisWeekPicks.map((product, index) => (

            <div className='sm:w-[282px] sm:h-[421px] mr-[24px] mt-[48px] '>
              <div className='sm:w-[282px] sm:h-[213px] bg-[#ececec] rounded-[8px] pt-[11px] '>
              <img
                  className='ml-[242px] cursor-pointer  '
                  src={favorite[index] ? FavLogoFilled : FavLogo}
                  alt=""
                  onClick={() => toggleFavorite(index)}
                />
                <img className='sm:w-[103] sm:h-[132px] mx-auto ' src={product.product.image_url} alt="" />
                <div className='sm:w-[69px] sm:h-[28px] border bg-[#ffff] rounded-[4px] flex ml-[10px] mt-[4px]  '>
                  <div className=' flex text-center ml-[12px] '>
                    <img className='sm:w-[16px] sm:h-[16px] mt-[6px] ' src={Star} alt="" />
                    <div className='sm:w-[23px] sm:h-[16px] text-[16px] translate-y-[2px] ml-[6px] '>{product.product.rating}</div>

                  </div>

                </div>

              </div>
              <div className='sm:text-start sm:text-[16px] sm:leading-[24px] font-normal sm:mt-[16px] mb-[16px] '>
                {product.product.name}
              </div>
              <div className='sm:w-[281px] sm:h-[128] '>
                <div className='flex sm:text-start sm:text-[16px] sm:leading-[28px] '>
                  <h1 className='line-through text-[#A8A8A8]'>AED {product.product.beforePrice}</h1>
                  <h1 className='ml-[8px] text-[#0FB015]'>{product.product.offer}% OFF</h1>
                </div>
                <h1 className='sm:text-[18px] sm:leading-[28px] font-medium text-start mb-[16px]  '>AED {product.product.price} </h1>
                <div className='sm:w-[281px] sm:h-[48px] bg-[#304BA0] rounded-[8px] pt-[12px] cursor-pointer '>

                  <img className='sm:w-[24px] sm:h-[24px]  ml-[83px]' src={Cart} alt="" />
                  {product.product.isCart ? <div className='text-white ml-[42px] mt-[-23px]' onClick={()=>removeFromCart(product.product.id)}>Remove</div> :
                  <div className='text-white ml-[42px] mt-[-23px]' onClick={()=>addToCart(product.product.id)}>Add To Cart</div>
                }
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
