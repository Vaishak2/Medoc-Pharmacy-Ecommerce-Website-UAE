import React from 'react'
import MultiSpecialityIcon from "../../../Assets/Icons/Group 562.png"
import MedicalService from "../../../Assets/Icons/Group 564.png"

function HomeBanner2() {
  return (
    <div>
      <div className=' bg-Home-banner-image2 bg-cover h-[550px] relative sm:mt-[58px] '>
         <div className='sm:w-[434px] sm:h-[440px] bg-white rounded-[8px] sm:mr-[120px] sm:ml-[886px] sm:translate-y-[57px] '>
         <div className='sm:py-[40px] sm:px-[48px]  '>
          <div  className='sm:mb-[48px] sm:text-[32px] font-medium  '>Doctors Appoinment</div>
          <div className='text-center flex sm:mb-[48px] '>
          <img className='sm:w-[56px] sm:h-[56px] ' src={MultiSpecialityIcon} alt="" /> <div  className='text-justify my-auto text-[18px] font-normal leading-normal sm:ml-[16px]'>Multispecialty Pharma <br />
          Treatment</div>
           </div>
           <div className='text-center flex sm:mb-[48px] '>
          <img className='sm:w-[56px] sm:h-[56px] ' src={MedicalService} alt="" /> <div  className='text-justify my-auto text-[18px] font-normal leading-normal sm:ml-[16px]'>24 Hours Medical  <br />
          Services</div>
           </div>
           <div className='btn sm:w-[195px] sm:h-[56px]  rounded-[8px] bg-[#304BA0]  text-white content-center cursor-pointer sm:leading-[18px] sm:text-[14px]'>
          Book An Appoinment
        </div>
         </div>
        

         </div>
      </div>
    </div>
  )
}

export default HomeBanner2
