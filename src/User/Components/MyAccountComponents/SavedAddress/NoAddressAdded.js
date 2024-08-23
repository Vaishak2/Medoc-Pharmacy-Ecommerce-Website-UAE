import React from 'react'
import NoAddress from "../../../../Assets/Icons/NoAdress.svg"
import AddCircle from "../../../../Assets/Icons/add_circle.png"

function NoAddressAdded() {
  return (
    <div>
       <div className='sm:text-base sm:font-semibold text-justify'>Saved Address</div>
      <div className='sm:w-[362px] sm:h-[252px] sm:mt-[188px] sm:mx-auto '>
        <div className='sm:w-16 sm:h-16 bg-[#EDF1FF] rounded-full py-4 mx-auto'>
  <img className='justify-center m-auto' src={NoAddress} alt="" />
        </div>
        <div className='sm:text-[18px] sm:font-medium sm:leading-[20px] mt-6'>
        No addresses added
        </div>
        <div className='text-[#A8A8A8] sm:text-sm sm:font-normal mt-4'>There are no addresses added to this account. Please add an address</div>
        <div className='sm:w-[396px] border border-[#304BA0] hover:bg-[#3E5FC5] rounded-lg text-[#304BA0] sm:font-medium px-8 py-5 sm:text-[14px] leading-4 mt-6 flex text-justify sm:ml- '>
       <div className='flex mx-auto'> <img className=' w-4 mr-2' src={AddCircle} alt="" />
        Add New Address
        </div>
        </div>
      </div>
    </div>
  )
}

export default NoAddressAdded
