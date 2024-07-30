import React from 'react'
import Star from "../../../Assets/Icons/star.png";
import FavLogo from "../../../Assets/Icons/heart-svgrepo-com 1.svg";
import FavLogoFilled from "../../../Assets/Icons/heart-svgrepo.svg";
import productImage from '../../../Assets/Top Product image/21e177529079430cab79f5055e8587a5 6.png'
import Plus from '../../../Assets/Icons/Plus.png'
import Equal from '../../../Assets/Icons/equal.png'
import Cart from '../../../Assets/Icons/shopping_cart (white).png'


function PDPFrequentlyBoughtTogether() {




  return (
    <div className='sm:w-[1200px] mx-auto mt-[64px]'>
      <div className='w-[706px] border border-[#EAEAEA] p-[32px]'>
        <div className='text-[24px] leading-[32px] font-medium text-left'>Frequently bought together</div>

        <div className='flex gap-[32px]'>

          <div className='mt-[32px] w-[282px] h-[357px]'>
            <div className='sm:h-[213px] bg-[#ececec]  rounded-lg'>
              <div className='pt-[41px]'>
                <img className='sm:w-[103] sm:h-[132px] mx-auto' src={productImage} alt="" />
              </div>
              <div className='sm:w-[69px] sm:h-[28px] border bg-[#ffff] rounded-[4px] flex items-center gap-[6px] ml-[10px] mt-[4px] px-[12px]  '>
                <img className='sm:w-[16px] sm:h-[16px] ' src={Star} alt="" />
                <div className='text-[16px] '>3.5</div>
              </div>
            </div>
            <div className='mt-[16px] text-[16px] leading-6 font-normal text-left'>Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet</div>
            <div className='mt-[16px] flex gap-2'>
              <div className='text-[16px] text-[#A8A8A8] line-through'>AED 600</div><div className='text-[16px] text-[#0FB015]'>30% OFF</div>
            </div>
            <div className='mt-[8px] text-[18px] leading-7 font-medium text-left'>AED 405</div>
          </div>

          <div className='my-auto'><img className='w-[14px] h-[15px]' src={Plus}></img></div>

          <div className='mt-[32px] w-[282px] h-[357px]'>
            <div className='sm:h-[213px] bg-[#ececec]  rounded-lg'>
              <div className='pt-[41px]'>
                <img className='sm:w-[103] sm:h-[132px] mx-auto' src={productImage} alt="" />
              </div>
              <div className='sm:w-[69px] sm:h-[28px] border bg-[#ffff] rounded-[4px] flex items-center gap-[6px] ml-[10px] mt-[4px] px-[12px]  '>
                <img className='sm:w-[16px] sm:h-[16px] ' src={Star} alt="" />
                <div className='text-[16px] '>3.5</div>
              </div>
            </div>
            <div className='mt-[16px] text-[16px] leading-6 font-normal text-left'>Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet</div>
            <div className='mt-[16px] flex gap-2'>
              <div className='text-[16px] text-[#A8A8A8] line-through'>AED 600</div><div className='text-[16px] text-[#0FB015]'>30% OFF</div>
            </div>
            <div className='mt-[8px] text-[18px] leading-7 font-medium text-left'>AED 405</div>
          </div>

        </div>

        <div className='mt-[32px] border-b'></div>

        <div className='mt-[32px] flex gap-[59px]'>
        
          <div className='flex gap-[26px]'>

            <div className='text-left'>
              <div className='text-[16px] font-normal leading-4 text-[#A8A8A8]'>1 item</div>
              <div className='text-[18px] font-medium leading-7 mt-[16px]'>AED 405</div>
            </div>

            <div className='my-auto'>
              <img className='w-[14px] h-[14px]' src={Plus}></img>
            </div>

            <div className='text-left'>
              <div className='text-[16px] font-normal leading-4 text-[#A8A8A8]'>1 Add-on</div>
              <div className='text-[18px] font-medium leading-7 mt-[16px]'>AED 105</div>
            </div>

            <div className='my-auto'>
              <img className='w-[15px] h-[9px]' src={Equal}></img>
            </div>

            <div className='text-left'>
              <div className='text-[16px] font-normal leading-4 text-[#A8A8A8]'>Total</div>
              <div className='text-[18px] font-medium leading-7 mt-[16px]'>AED 610</div>
            </div>

          </div>

          <div className='w-[233px] h-[60px] bg-[#304BA0] rounded-lg flex items-center justify-center gap-2'>
            <div><img className='w-[19px] h-[20px]' src={Cart}></img></div>
            <div className='text-[14px] text-[#F6F8F9] font-medium leading-6'>Add All To Cart</div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default PDPFrequentlyBoughtTogether
