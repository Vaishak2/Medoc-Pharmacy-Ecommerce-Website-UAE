import React from 'react';
import AdButton1 from "../../../Assets/Ad Image/shop now.png"
import AdButton2 from "../../../Assets/Ad Image/Frame 553 (1).png"




function AdPage() {
    return (
        <div className='sm:w-[1200px] sm:h-[307px] mt-[64px] flex sm:mx-auto '>
            <div 
                className='sm:w-[588px] sm:h-[307px] bg-AdBnner bg-cover'>
                 <img className='sm:w-[118px] sm:h-[40px] sm:mt-[227px] sm:ml-[32px] ' src={AdButton1} alt="" />
            
            </div>
            <div 
                className='sm:w-[588px] sm:h-[307px] bg-AdBnner2 bg-cover sm:ml-[24px]'>
                <img className='sm:w-[118px] sm:h-[40px]  sm:ml-[319px] sm:mt-[203px]' src={AdButton2} alt="" />
            
            </div>
        </div>
    );
}

export default AdPage;
