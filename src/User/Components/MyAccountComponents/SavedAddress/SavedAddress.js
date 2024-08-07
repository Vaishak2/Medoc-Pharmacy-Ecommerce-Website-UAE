import React from 'react'
import AddCircleIcon from '../../../../Assets/Icons/add_circle.png'
import TickIcon from '../../../../Assets/Icons/tick Vector.png'
import UntickIcon from '../../../../Assets/Icons/untick Vector.png'
import EditIcon from '../../../../Assets/Icons/edit_square.png'
import DeleteIcon from '../../../../Assets/Icons/delete_icon.png'

function SavedAddress() {
  return (
    <div>
      <div className='sm:text-[16px] sm:leading-6 font-semibold text-left'>Saved Address</div>
      <div className='flex items-center border-2 border-[#EBEBEB] sm:rounded-lg sm:py-6 sm:px-8 gap-2 sm:mt-[32px]'>
        <div>
          <img className='sm:w-4 sm:h-4' src={AddCircleIcon}></img>
        </div>
        <div className='sm:text-[14px] text-[#304BA0]'>Add new Address</div>
      </div>
      <div className='grid grid-cols-2 sm:mt-6'>
        <div className='sm:w-[403px] border-2 border-[#EBEBEB] rounded-lg sm:p-6'>
          <div className='flex items-center justify-between'>
            <div className='text-[#304BA0] text-[14px] sm:h-[24px] font-medium bg-[#DDE4F9] rounded-xl sm:w-fit px-2 flex items-center'>Home</div>
            <div>
              <img className='h-5 w-5' src={TickIcon}></img>
            </div>
          </div>

          <div className='text-left sm:w-[294px]'>
            <div className='text-[14px] font-semibold sm:mt-4'>Robert Wilson Carolins Davids Andrews</div>
            <div className='text-[14px] sm:mt-4'>3501 Maloy Court, East Elmhurst, New York City, NY 11369</div>
            <div className='text-[14px] sm:mt-4'>Phone No: 123-456-7890</div>
          </div>

          <div className='sm:mt-6 flex gap-8'>
            <div className='flex gap-2'>
              <div>
                <img className='w-4 h-4' src={EditIcon}></img>
              </div>
              <div className='text-[14px] font-medium text-[#304BA0]'>Edit</div>
            </div>
            <div className='flex gap-2'>
              <div>
                <img className='w-5 h-5' src={DeleteIcon}></img>
              </div>
              <div className='text-[14px] font-medium text-[#FC5050]'>Delete</div>
            </div>
          </div>

        </div>


        <div className='sm:w-[403px] border-2 border-[#EBEBEB] rounded-lg sm:p-6'>
          <div className='flex items-center justify-between'>
            <div className='text-[#304BA0] text-[14px] sm:h-[24px] font-medium bg-[#DDE4F9] rounded-xl sm:w-fit px-2 flex items-center'>Home</div>
            <div>
              <img className='h-5 w-5' src={UntickIcon}></img>
            </div>
          </div>

          <div className='text-left sm:w-[294px]'>
            <div className='text-[14px] font-semibold sm:mt-4'>Robert Wilson Carolins Davids Andrews</div>
            <div className='text-[14px] sm:mt-4'>3501 Maloy Court, East Elmhurst, New York City, NY 11369</div>
            <div className='text-[14px] sm:mt-4'>Phone No: 123-456-7890</div>
          </div>

          <div className='sm:mt-6 flex gap-8'>
            <div className='flex gap-2'>
              <div>
                <img className='w-4 h-4' src={EditIcon}></img>
              </div>
              <div className='text-[14px] font-medium text-[#304BA0]'>Edit</div>
            </div>
            <div className='flex gap-2'>
              <div>
                <img className='w-5 h-5' src={DeleteIcon}></img>
              </div>
              <div className='text-[14px] font-medium text-[#FC5050]'>Delete</div>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default SavedAddress
