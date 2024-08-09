import React from 'react'
import LocateIcon from '../../../../Assets/Icons/my_location.png'

function AddNewAddress() {
    return (
        <div>
            <div className='sm:text-[16px] sm:leading-6 font-semibold text-left'>Add New Address</div>

            <div className='bg-[#304BA0] sm:mt-8 py-[14px] px-6 w-fit hover:bg-[#3E5FC5] rounded-lg flex items-center gap-2 cursor-pointer'>
                <div>
                    <img className='w-6 h-6' src={LocateIcon}></img>
                </div>
                <div className='text-[14px] text-[#FFFFFF] tracking-wide'>Use my current location</div>
            </div>

            <div className='sm:mt-8 border-b border-[#DDDBDB] sm:pb-6'>
                <div className='text-[14px] font-medium text-left'>Address Title</div>
                <div className='grid grid-cols-2 gap-6'>
                    <input type='text' placeholder='Home, Office, Personal..etc (Required)' className='sm:w-[403px] border-2 border-[#dddddd] text-[14px] py-3 px-[18px] rounded-lg placeholder:text-[#B3B3B3] mt-2'></input>
                </div>
            </div>

            <div className='sm:mt-6 border-b border-[#DDDBDB] sm:pb-6'>
                <div className='text-[14px] font-medium text-left'>Contact Details</div>
                <div className='grid grid-cols-2 gap-x-6'>
                    <div>
                        <div className='text-[14px] text-left mt-4'>Name</div>
                        <input type='text' placeholder='Type your name (Required)' className='sm:w-[403px] border-2 border-[#dddddd] text-[14px] py-3 px-[18px] rounded-lg placeholder:text-[#B3B3B3] mt-2'></input>
                    </div>
                    <div>
                        <div className='text-[14px] text-left mt-4'>Phone number</div>
                        <input type='text' placeholder='+971 (555) 000-0000 (Required)' className='sm:w-[403px] border-2 border-[#dddddd] text-[14px] py-3 px-[18px] rounded-lg placeholder:text-[#B3B3B3] mt-2'></input>
                    </div>
                </div>
            </div>

            <div className='sm:mt-6'>
                <div className='text-[14px] font-medium text-left'>Address Details</div>
                <div className='grid grid-cols-2 gap-x-6'>
                    <div>
                        <div className='text-[14px] text-left mt-4'>House Name</div>
                        <input type='text' placeholder='Enter house name (Required)' className='sm:w-[403px] border-2 border-[#dddddd] text-[14px] py-3 px-[18px] rounded-lg placeholder:text-[#B3B3B3] mt-2'></input>
                    </div>
                    <div>
                        <div className='text-[14px] text-left mt-4'>street Name</div>
                        <input type='text' placeholder='Type street name (Required)' className='sm:w-[403px] border-2 border-[#dddddd] text-[14px] py-3 px-[18px] rounded-lg placeholder:text-[#B3B3B3] mt-2'></input>
                    </div>
                    <div>
                        <div className='text-[14px] text-left mt-4'>Town</div>
                        <input type='text' placeholder='Enter town/city name (Required)' className='sm:w-[403px] border-2 border-[#dddddd] text-[14px] py-3 px-[18px] rounded-lg placeholder:text-[#B3B3B3] mt-2'></input>
                    </div>
                    <div>
                        <div className='text-[14px] text-left mt-4'>Country</div>
                        <input type='text' placeholder='Enter Country (Required)' className='sm:w-[403px] border-2 border-[#dddddd] text-[14px] py-3 px-[18px] rounded-lg placeholder:text-[#B3B3B3] mt-2'></input>
                    </div>
                    <div>
                        <div className='text-[14px] text-left mt-4'>Emirate</div>
                        <input type='text' placeholder='Enter State  (Required)' className='sm:w-[403px] border-2 border-[#dddddd] text-[14px] py-3 px-[18px] rounded-lg placeholder:text-[#B3B3B3] mt-2'></input>
                    </div>
                </div>
                <div>
                    <div className='text-[14px] text-left mt-4'>Landmark (Optional)</div>
                    <textarea type='text' placeholder='Provide your landmark (If any)' className='sm:w-full sm:h-[136px] border-2 border-[#dddddd] text-[14px] py-3 px-[18px] rounded-lg placeholder:text-[#B3B3B3] mt-2'></textarea>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-x-6 mt-8'>
                <div className='sm:w-[403px] sm:h-[56px] text-[14px] font-medium flex items-center justify-center border-2 border-[#304BA0] rounded-lg cursor-pointer'>Reset</div>
                <div className='bg-[#304BA0] sm:w-[403px] sm:h-[56px] text-[14px] text-[#FFFFFF] font-medium flex items-center justify-center rounded-lg hover:bg-[#3E5FC5] cursor-pointer'>Save Address</div>
            </div>

        </div>
    )
}

export default AddNewAddress
