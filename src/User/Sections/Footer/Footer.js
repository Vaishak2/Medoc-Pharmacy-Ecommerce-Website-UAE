import React from 'react'
import AppleStore from "../../../Assets/Footer images/Frame 1033.png"
import PlayStore from "../../../Assets/Footer images/Play store icon.png"
import Facebook from "../../../Assets/Footer images/Group 585.png"
import Instagram from "../../../Assets/Footer images/Group 586.png"
import Twitter from "../../../Assets/Footer images/Group 587.png"

function Footer() {
  return (
    <div>
      <div className=' sm:h-[390px] bg-[#DEE2F1] flex justify-between sm:mt-[64px] '>
        <div className='sm:w-[707px] sm:h-[229px] flex sm:pt-[64px] sm:ml-[120px] justify-between text-justify '>
          <div className=''>
            <div className='sm:text-[18px] sm:font-medium sm:leading-[20px] sm:mb-[16px] '>Explore</div>
            <div className='sm:text-[16px] sm:leading-[32px] sm:text-[#545454] '><ul>
              <li className='cursor-pointer'>Home</li>
              <li className='cursor-pointer'>Blog Page</li>
              <li className='cursor-pointer'>About us</li>
              <li className='cursor-pointer'>Our Policies</li>
              <li className='cursor-pointer'>News</li>
            </ul></div>
          </div>

          <div>
            <div className='sm:text-[18px] sm:font-medium sm:leading-[20px] sm:mb-[16px]  ' >Uitility Pages</div>
            <div className='sm:text-[16px] sm:leading-[32px] sm:text-[#545454] '><ul>
              <li className='cursor-pointer'>Refund Policy</li>
              <li className='cursor-pointer'>Shipping Terms</li>
              <li className='cursor-pointer'>Privacy Policy</li>
              <li className='cursor-pointer'>Terms & Conditions</li>
              <li></li>
            </ul></div>
          </div>
          <div>
            <div className='sm:text-[18px] sm:font-medium sm:leading-[20px] sm:mb-[16px]  '>Quick Links</div>
            <div className='sm:text-[16px] sm:leading-[32px] sm:text-[#545454] '><ul>
              <li className='cursor-pointer'>Beauty Care</li>
              <li className='cursor-pointer'>Sports Nutrition</li>
              <li className='cursor-pointer'>Nutrition & Supplements</li>
              <li className='cursor-pointer'>Mother & Baby Care</li>
              <li className='cursor-pointer'>Personal Care</li>
            </ul></div>
          </div>
        </div>
        <div>
          <div className='sm:w-[384px] sm:h-[97px] sm:text-start sm:pt-[62px] sm:text-[18px] font-medium sm:mr-[123px] '>
            <div className='sm:text-[18px] leading-[28px] font-medium sm:w-[359px] '>Experience Medo Pharma App in Mobile </div>
            <div className='flex sm:w-[180px] sm:h-[53px] sm:mt-[16px] '>
              <img className='cursor-pointer' src={AppleStore} alt="" />
              <img className='sm:ml-[24px] cursor-pointer' src={PlayStore} alt="" />
            </div>

          </div>
          <div className='sm:w-[384px] sm:h-[97px] sm:text-start sm:mt-[107px] sm:text-[18px] font-medium sm:mr-[123px] '>
            <div className='sm:text-[18px] leading-[28px] font-medium sm:w-[359px] '>Experience Medo Pharma App in Mobile </div>
            <div className='flex sm:w-[152px] sm:h-[40px] sm:mt-[16px] justify-between '>
              <img className='sm:w-[40px] sm:h-[40px] cursor-pointer ' src={Facebook} alt="" />
              <img className='sm:w-[40px] sm:h-[40px] cursor-pointer ' src={Instagram} alt="" />
              <img className='sm:w-[40px] sm:h-[40px] cursor-pointer ' src={Twitter} alt="" />
            </div>

          </div>
        </div>
      </div>
        <div className='sm:w-[346px] sm:h-[28px] sm:text-[14px] font-normal sm:leading-[28px] sm:text-[#545454] sm:my-[16px] sm:mx-auto cursor-default '>© 2024 www.Medpharma.com. All rights reserved.</div>

    </div>
  )
}

export default Footer
