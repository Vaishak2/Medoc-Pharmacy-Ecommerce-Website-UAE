
import React, { useState } from 'react'
import MaleIcon from "../../../../Assets/Icons/maleIcon.svg"
import FemaleIcon from "../../../../Assets/Icons/femaleIcon.svg"
import DeleteAccount from '../DeleteAccount/DeleteAccount';

function EditProefil() {
  const [gender, setGender] = useState('male');

  const [isFocused, setIsFocused] = useState(false);

  const [isDeleteAccount, setIsDeleteAccount] = useState(false)



  const handleGenderChange = (selectedGender) => {
    setGender(selectedGender);
  };
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const switchToDeleteAccount = () => {
    setIsDeleteAccount(!isDeleteAccount)
  }


  return (
    <div>
      {isDeleteAccount ? <DeleteAccount /> :
        <div>
          <div className='sm:text-[16px] sm:leading-6 font-semibold text-left'>Edit Profile</div>
          <div className='flex sm:mt-8'>
            <div className='sm:w-[405px] sm:text-justify sm:text-14px] '>
              <div>Full Name</div>
              <input className='border rounded-lg pl-4 focus:outline-[#304BA0] sm:mt-2 sm:w-full py-3 placeholder:text-[16px] placeholder:leading-6 placeholder:tracking-tighter ' type="text" placeholder='Enter your name' />
            </div>
            <div className=' sm:text-justify sm:ml-6'>
              <h1>Phone Number</h1>
              <div
                className={`flex border sm:mt-2 rounded-lg ${isFocused ? 'border-[#304BA0]' : ''
                  }`}
              >
                <select
                  className={`sm:h-[50px] focus:outline-none pl-4 rounded-l-lg ${isFocused ? 'border-[#304BA0]' : ''
                    }`}
                  name=""
                  id=""
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                >
                  <option value="">UAE</option>
                </select>
                <input
                  className={`sm:w-[326px] pl-4 py-3 rounded-r-lg focus:outline-none placeholder:text-[16px] placeholder:leading-6 placeholder:tracking-tighter ${isFocused ? 'border-[#304BA0]' : ''
                    }`}
                  type="phone"
                  placeholder="+971 (555) 000-0000"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

            </div>
          </div>
          <div className='sm:w-[833px] sm:text-justify sm:mt-6'>
            <div>Email ID</div>
            <input className='border rounded-lg pl-4 focus:outline-[#304BA0] sm:mt-2 sm:w-full py-3 placeholder:text-[16px] placeholder:leading-6 placeholder:tracking-tighter '
              type="email"
              placeholder='Enter your mail ID'
            />

          </div>
          <div className='sm:text-justify flex sm:mt-8'>
            <div className={`sm:w-[417px] border rounded-l-lg  sm:py-4 ${gender === 'male' ? 'bg-[#EEF2FF] border-[#304BA0]' : 'border-gray-300'} `}
              onClick={() => handleGenderChange('male')}>
              <div className='mx-auto flex sm:px-[168px]'> <img src={MaleIcon} alt="" />
                <h1>Male</h1>
              </div>

            </div>
            <div className={`sm:w-[417px] border rounded-r-lg  sm:py-4 ${gender === 'female' ? 'bg-[#EEF2FF] border-[#304BA0]' : 'border-gray-300'} `}
              onClick={() => handleGenderChange('female')}>
              <div className='mx-auto flex sm:px-[168px]'> <img src={FemaleIcon} alt="" />
                <h1>Female</h1>
              </div>

            </div>
          </div>
          <div className='flex sm:mt-[64px] '>
            <button className='border border-[#304BA0] rounded-lg sm:py-4 sm:px-[178px] sm:text-[14px] sm:leading-4 font-semibold text-[#304BA0]' >Cancel</button>
            <button className='border  rounded-lg sm:py-4 sm:px-[178px] sm:text-[14px] sm:leading-4 font-semibold bg-[#304BA0] text-white sm:ml-4 hover:bg-[#3e5fc5]' >Update</button>
          </div>
          <div className='sm:w-[833px] border sm:mt-10'>

          </div>
          <div className='sm:mt-8 sm:text-[14px] sm:leading-6 cursor-pointer' onClick={switchToDeleteAccount}>
            Delete Account
          </div>
        </div>
      }
    </div>
  )
}

export default EditProefil;
