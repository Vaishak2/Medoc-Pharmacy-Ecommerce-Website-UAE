import React, { useState } from 'react';
import carusal from '../../../Assets/Top Product image/21e177529079430cab79f5055e8587a5 6.png';
import fav from "../../../Assets/Icons/heart-svgrepo-com 1.svg";
import favFill from "../../../Assets/Icons/heart-svgrepo.svg";
import shareIcon from '../../../Assets/Icons/shareIcon.svg';
import Star from "../../../Assets/Icons/star.png";
import Tag from "../../../Assets/Icons/shoppingmode.svg"
import AddNewAdrss from "../../../Assets/Icons/add_circle.svg"
import orginalProductimg from "../../../Assets/Icons/Group 219.svg"
import ReturnImg from "../../../Assets/Icons/Group 220.svg"
import SecurePayImg from "../../../Assets/Icons/assured_workload.svg"
import cart from "../../../Assets/Icons/shopping_cart_blue.svg"
import basket from "../../../Assets/Icons/shopping_basket.svg"

function PDPMainComponent() {
  const [isFavorited, setIsFavorited] = useState(false);
  const [selectedButton, setSelectedButton] =useState(null)
  const [quantity, setQuantity] = useState(1);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  const handleSlelctedButton =(size) => {
     setSelectedButton(size)
  }
 

  const handleQuantityChange = (type) => {
    if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'increase') {
      setQuantity(quantity + 1);
    }
  };

 
  return (
    <div className='flex sm:mt-16'>
      <div className='ImageSection flex'>
        <div className='carusal ml-[120px] w-[78px] h-[88px] mr-[24px]'>
          <img className='mb-4 mt-[43px] w-[78px] h-[88px]' src={carusal} alt="Carousel Image" />
          <img className='mb-4 w-[78px] h-[88px]' src={carusal} alt="Carousel Image" />
          <img className='mb-4 w-[78px] h-[88px]' src={carusal} alt="Carousel Image" />
          <img className='mb-4 w-[78px] h-[88px]' src={carusal} alt="Carousel Image" />
        </div>
        <div className='productImg w-[486px] h-[486px] bg-[#F0F0F0] rounded-[16px] '>
          <img
            className='sm:ml-[422px] sm:mt-[24px] cursor-pointer'
            src={isFavorited ? favFill : fav}
            alt="Favorite Icon"
            onClick={handleFavoriteClick}
          />
          <img className='w-[195px] h-[247px] sm:mt-[55px] mx-auto' src={carusal} alt="Product Image" />
          <img className='sm:ml-[414px] sm:mt-[47px]' src={shareIcon} alt="Share Icon" />
        </div>
      </div>
      <div>
      <div className="product-details  justify-start text-start ml-6 ">
      <h2 className="product-name text-[18px] font-[400px] leading-[24px] ">Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet</h2>
      <div className=' flex text-center ml-[12px] sm:mt-4 border rounded-lg sm:h-8 sm:w-[166px]  '>
                    <img className='sm:w-6 sm:h-6 my-auto  ' src={Star} alt="" />
                    <div className=' text-[16px]  my-auto sm:ml-2  '>3.5 </div>
                    <div className='text-center text-[16px] my-auto border-l ml-[9px] px-2'>61 Ratings</div>
                    </div>
      <div className="price-section flex items-center mt-8">
        <span className="current-price text-[18px] font-semibold text-black leading-6">AED 405</span>
        <span className="original-price text-[18px] font-normal text-[#A8A8A8] leading-6 line-through ml-4">AED 600</span>
        <span className="discount text-[18px] font-normal text-[#0FB015] leading-6 ml-4">30% OFF</span>
      </div>
      <div className='flex mt-2'>
      <div className="savings text-sm text-[#304BA0] text-[14px] leading-[18px] font-medium ">YOU SAVE: AED 12.00</div>
      <div className="tax-info text-sm text-black text-[16px] leading-[18px] ml-3">Inclusive of all taxes</div>
      </div>
      
      <div className="offers mt-8">
        <h3 className="offers-title text-lg font-semibold">Available Offers</h3>
        <ul className="offers-list list-disc list-inside text-sm text-black sm:mt-4">
          <li className='flex '> <img className='mr-2' src={Tag} alt="" />Use code <span className='text-[14px] font-semibold leading-4'> EXTRA15 </span> to avail 15% off</li>
          <li className='flex my-2'> <img className='mr-2' src={Tag} alt="" />10% off on Orders above Rs. 1999 (only on first purchase)</li>
          <li className='flex'> <img className='mr-2' src={Tag} alt="" /> 15% Bank offer on credit cards</li>
        </ul>
      </div>
      
      <div className="delivery mt-4">
        <h3 className="delivery-title text-lg font-medium">Delivery</h3>
        </div>
        <div className=" add-address-btn sm:mt-5 flex ">
        <img src={AddNewAdrss} alt="" /> <div className='sm:ml-2'>Add New Address</div>
        </div>
      
      <div className="benefits mt-9 flex sm:h-[24px]">
      <img src={orginalProductimg} alt="" /> <div className='sm:ml-2'>100% Original Products</div>
       <div className='border-l border-r flex mx-4 px-4'><img src={ReturnImg} alt="" />  <div className='sm:ml-2'>Easy 30 day return</div></div>
      <img src={SecurePayImg} alt="" /> <div className='sm:ml-2'>Secure Payment</div>
      </div>
      
      <div className="sizes mt-8">
        <h3 className="sizes-title text-lg font-medium">Choose Size</h3>
        <div className="size-options flex mt-2">
      <button
        className={`size-option leading-6 tracking-tighter py-2 px-4 rounded-lg  ${
          selectedButton === '100 ml' ? 'bg-[#304BA0] text-white' : 'bg-gray-200 text-black text-[16px]'
        }`}
        onClick={() => handleSlelctedButton('100 ml')}
      >
        100 ml
      </button>
      <button
        className={`size-option leading-6 tracking-tighter py-2 px-4 mx-4 rounded-lg  ${
          selectedButton === '250 ml' ? 'bg-[#304BA0] text-white' : 'bg-gray-200 text-black text-[16px]'
        }`}
        onClick={() => handleSlelctedButton('250 ml')}
      >
        250 ml
      </button>
      <button
        className={`size-option leading-6 tracking-tighter py-2 px-4 rounded-lg ${
          selectedButton === '500 ml' ? 'bg-[#304BA0] text-white' : 'bg-gray-200 text-black text-[16px]'
        }`}
        onClick={() => handleSlelctedButton('500 ml')}
      >
        500 ml
      </button>
    </div>
      </div>
      <div className="product-actions mt-8">
      <div className="quantity-selector mb-4 items-center">
        <label htmlFor="quantity" className="block mr-4 font-medium text-lg leading-4">Choose Quantity</label>
        <button
          onClick={() => handleQuantityChange('decrease')}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-l sm:mt-4"
        >
          -
        </button>
        <input
          type="text"
          id="quantity"
          value={quantity}
          readOnly
          className=" bg-gray-200 py-2 px-4 text-center w-12"
        />
        <button
          onClick={() => handleQuantityChange('increase')}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-r"
        >
          +
        </button>
      </div>
     
      <div className="action-buttons flex space-x-4 mt-8 ">
      <button
          onClick=''
          className="">
             <div className='sm:w-[281px] sm:h-[48px] border-[#304BA0] border rounded-[8px] pt-[12px] cursor-pointer'>

<img className='sm:w-[24px] sm:h-[24px]  ml-[83px]  ' src={cart} alt="" />
<div className='text-[#304ba0] ml-[42px] mt-[-23px]  '>Add to Cart</div>

</div>
        </button>
        <button
          onClick=""
          className="">
             <div className='sm:w-[281px] sm:h-[48px] bg-[#304BA0] rounded-[8px] pt-[12px] cursor-pointer'>

<img className='sm:w-[24px] sm:h-[24px]  ml-[83px]  ' src={basket} alt="" />
<div className='text-white ml-[42px] mt-[-23px]  '>Buy Now</div>

</div>
        </button>
     
      </div>
    </div>
    </div>
      </div>
    </div>
  );
}

export default PDPMainComponent;
