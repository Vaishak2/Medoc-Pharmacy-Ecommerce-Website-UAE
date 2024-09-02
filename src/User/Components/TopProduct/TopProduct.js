import React, { useContext, useEffect, useState } from 'react';
import FavLogo from "../../../Assets/Icons/heart-svgrepo-com 1.svg";
import FavLogoFilled from "../../../Assets/Icons/heart-svgrepo.svg";
import ProductImage from "../../../Assets/Top Product image/pngwing.com (14) 1.png";
import Star from "../../../Assets/Icons/star.png";
import Cart from "../../../Assets/Icons/shopping_cart_svg.svg";
import Carted from "../../../Assets/Icons/cart_check_circle.svg";
import ViewArrow from "../../../Assets/Icons/Group 515.png";
import Api from '../../../Services/Api';
import { userContext } from '../../UserLayout';
import { PulseLoader } from 'react-spinners';


function TopProduct() {

  const [topProducts, setTopProducts] = useState([])
  const [buttonLoadingId, setButtonLoadingId] = useState(null)

  const { cart, setCart } = useContext(userContext)

  const userId = 1;

  const [favorite, setFavorite] = useState(Array(8).fill(false)); // Array to hold favorite status for each product

  const getTopProducts = async () => {
    try {
      const response = await Api.get('deals');
      console.log(response.data.data.productsList, 'topproductsdaaaaata')
      setTopProducts(response.data.data.productsList)
    } catch (error) {
      console.error('Error fetcting toop products', error);
    }
  }

  const addToCart = (productId) => {
    setButtonLoadingId(productId)
    Api.post('cart/add', {
      "userId": 1,
      "productId": productId,
      "quantity": 1,
      "size": "300"
    })
      .then(response => { 
        console.log(response.data.message)
        return getTopProducts();
      })
      .then(()=>{
        setButtonLoadingId(null);
      })
      .catch(error => {
        console.error(error);
        setButtonLoadingId(null);
      })
  }

  const removeFromCart = (productId) => {
    setButtonLoadingId(productId)
    Api.post('cart/remove', {
      "userId": 1,
      "productId": productId
    })
      .then(response => {
        console.log(response.data.message)
        return getTopProducts();
      })
      .then(()=>{
        setButtonLoadingId(null)
      })
      .catch(error => {
        console.error(error);
        setButtonLoadingId(null);
      })
  }

  const toggleFavorite = (index) => {
    const newFavorite = [...favorite];
    newFavorite[index] = !newFavorite[index];
    setFavorite(newFavorite);
  };




  const pageNumber = '1'
  const pageSize = '8'

  useEffect(() => {
    getTopProducts();
  }, [])

  return (
    <div>
      <div className='sm:w-[1200px] sm:h-auto sm:mt-[64px] mx-auto '>
        <div className='sm:text-[32px] sm:leading-[24px] font-medium sm:mb-[48px] text-start'>Top Product</div>
        <div className='sm:text-[16px] leading-[28px] font-normal flex justify-end  '>View All
          <img className='sm:w-[16px] sm:h-[16px] my-auto ml-[8px]  ' src={ViewArrow} alt="" />
        </div>
        <div className='grid sm:grid-cols-4 gap-[24px] '>
          {topProducts.map((product, index) => (

            <div className='sm:w-[282px] sm:h-[421px] mr-[24px] mt-[24px] '>
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
                  <h1 className='line-through text-[#A8A8A8]'>{product.product.beforePrice}</h1>
                  <h1 className='ml-[8px] text-[#0FB015]'>{product.product.offer}% OFF </h1>
                </div>
                <h1 className='sm:text-[18px] sm:leading-[28px] font-medium text-start mb-[16px]  '> {product.product.price} </h1>

                <div className='sm:w-[281px] sm:h-[48px] border border-[#304BA0] rounded-[8px] cursor-pointer flex items-center justify-center gap-2'>
                  {buttonLoadingId === product.product.id ?
                    <div>
                      <PulseLoader
                        color={'#304BA0'}
                        loading={true}
                        size={10}
                        aria-label="Loading Spinner"
                        data-testid="Loader"
                      />
                    </div> :
                    <div>
                      {product.product.isCart ?
                        <div className='sm:w-[281px] sm:h-[48px] border border-[#304BA0] rounded-[8px] cursor-pointer flex items-center justify-center gap-2' onClick={() => removeFromCart(product.product.id)}>
                          <div><img className='sm:w-[24px] sm:h-[24px] ' src={Carted} alt="" /></div>
                          <div className='text-[#304BA0]'>Added to cart</div>
                        </div>
                        :
                        <div className='sm:w-[281px] sm:h-[48px] bg-[#304BA0] rounded-[8px] pt-[12px] cursor-pointer' onClick={() => addToCart(product.product.id)}>
                          <img className='sm:w-[24px] sm:h-[24px]  ml-[83px]  ' src={Cart} alt="" />
                          <div className='text-white ml-[42px] mt-[-23px] '>Add To Cart</div>
                        </div>
                      }
                    </div>
                  }
                </div>

              </div>

            </div>
          ))
          }



        </div>

      </div>
    </div>
  )
}

export default TopProduct
