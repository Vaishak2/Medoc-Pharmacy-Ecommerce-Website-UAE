import React, { useState } from 'react'
import LocateIcon from '../../../../Assets/Icons/my_location.png'

function AddNewAddress() {

    const [addressTitle, setAddressTitle] = useState()
    const [addressTitleError, setAddressTitleError] = useState(false)
    const [name, setName] = useState()
    const [nameError, setNameError] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState()
    const [phoneNumberError, setPhoneNumberError] = useState(false)
    const [houseName,setHouseName] = useState()
    const [houseNameError,setHouseNameError] = useState(false)
    const [streetName, setStreetName] = useState()
    const [streetNameError, setStreetNameError] = useState(false)
    const [town, setTown] = useState()
    const [townError, setTownError] = useState(false)
    const [country, setCountry] = useState()
    const [countryError, setCountryError] = useState(false)
    const [emirate, setEmirate] = useState()
    const [emirateError, setEmirateError] = useState(false)

    const addressTitleValidation = () => {
        if (!addressTitle) {
            setAddressTitleError(true)
        }
        else if (addressTitle.length < 1) {
            setAddressTitleError(true)
        }
        else setAddressTitleError(false)
    }

    const nameValidation = () => {
        if (!name) {
            setNameError(true)
        }
        else if (name.length < 1) {
            setNameError(true)
        }
        else setNameError(false)
    }

    const phoneNumberValidation = () => {
        const reg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
        const result = reg.test(phoneNumber)
        if (!phoneNumber) {
            setPhoneNumberError(true)
        }
        else if(result===false) {
            setPhoneNumberError(true)
        }
        else setPhoneNumberError(false)
    }

    const houseNameValidation = () => {
        if(!houseName) {
            setHouseNameError(true)
        }
        else if(houseName.length < 1) {
            setHouseNameError(true)
        }
        else setHouseNameError(false)
    }

    const streetNameValidation = () => {
        if(!streetName) {
            setStreetNameError(true)
        }
        else if(streetName.length < 1) {
            setStreetNameError(true)
        }
        else setStreetNameError(false)
    }

    const townValidation = () => {
        if(!town) {
            setTownError(true)
        }
        else if(town.length < 1) {
            setTownError(true)
        }
        else setTownError(false)
    }

    const countryValidation = () => {
        if(!country) {
            setCountryError(true)
        }
        else if(country.length < 1) {
            setCountryError(true)
        }
        else setCountryError(false)
    }

    const emirateValidation = () => {
        if(!emirate) {
            setEmirateError(true)
        }
        else if(emirate.length < 1) {
            setEmirateError(true)
        }
        else setEmirateError(false)
    }

    const handleSubmit = () => {
        addressTitleValidation();
        nameValidation();
        phoneNumberValidation();
        houseNameValidation();
        streetNameValidation();
        townValidation();
        countryValidation();
        emirateValidation();
    }

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
                    <div>
                        <input type='text' placeholder='Home, Office, Personal..etc (Required)' className='sm:w-[403px] border-2 border-[#dddddd] text-[14px] py-3 px-[18px] rounded-lg placeholder:text-[#B3B3B3] mt-2' onChange={(e)=>setAddressTitle(e.target.value)}></input>
                        {addressTitleError ? <div className='text-[14px] text-left text-[#FC5050] mt-2'>Please enter your address title</div> : null}
                    </div>
                </div>
            </div>

            <div className='sm:mt-6 border-b border-[#DDDBDB] sm:pb-6'>
                <div className='text-[14px] font-medium text-left'>Contact Details</div>
                <div className='grid grid-cols-2 gap-x-6'>
                    <div>
                        <div className='text-[14px] text-left mt-4'>Name</div>
                        <input type='text' placeholder='Type your name (Required)' className='sm:w-[403px] border-2 border-[#dddddd] text-[14px] py-3 px-[18px] rounded-lg placeholder:text-[#B3B3B3] mt-2' onChange={(e)=>setName(e.target.value)}></input>
                        {nameError ? <div className='text-[14px] text-left text-[#FC5050] mt-2'>Please enter your name</div> : null}
                    </div>
                    <div>
                        <div className='text-[14px] text-left mt-4'>Phone number</div>
                        <input type='text' placeholder='+971 (555) 000-0000 (Required)' className='sm:w-[403px] border-2 border-[#dddddd] text-[14px] py-3 px-[18px] rounded-lg placeholder:text-[#B3B3B3] mt-2' onChange={(e)=>setPhoneNumber(e.target.value)}></input>
                        {phoneNumberError ? <div className='text-[14px] text-left text-[#FC5050] mt-2'>Please enter a valid phone number</div> : null}
                    </div>
                </div>
            </div>

            <div className='sm:mt-6'>
                <div className='text-[14px] font-medium text-left'>Address Details</div>
                <div className='grid grid-cols-2 gap-x-6'>
                    <div>
                        <div className='text-[14px] text-left mt-4'>House Name</div>
                        <input type='text' placeholder='Enter house name (Required)' className='sm:w-[403px] border-2 border-[#dddddd] text-[14px] py-3 px-[18px] rounded-lg placeholder:text-[#B3B3B3] mt-2' onChange={(e)=>setHouseName(e.target.value)}></input>
                        {houseNameError ? <div className='text-[14px] text-left text-[#FC5050] mt-2'>Please enter your house name</div> : null}
                    </div>
                    <div>
                        <div className='text-[14px] text-left mt-4'>street Name</div>
                        <input type='text' placeholder='Type street name (Required)' className='sm:w-[403px] border-2 border-[#dddddd] text-[14px] py-3 px-[18px] rounded-lg placeholder:text-[#B3B3B3] mt-2' onChange={(e)=>setStreetName(e.target.value)}></input>
                        {streetNameError ? <div className='text-[14px] text-left text-[#FC5050] mt-2'>Please enter your street name</div> : null}
                    </div>
                    <div>
                        <div className='text-[14px] text-left mt-4'>Town</div>
                        <input type='text' placeholder='Enter town/city name (Required)' className='sm:w-[403px] border-2 border-[#dddddd] text-[14px] py-3 px-[18px] rounded-lg placeholder:text-[#B3B3B3] mt-2' onChange={(e)=>setTown(e.target.value)}></input>
                        {townError ? <div className='text-[14px] text-left text-[#FC5050] mt-2'>Please enter your town</div> : null}
                    </div>
                    <div>
                        <div className='text-[14px] text-left mt-4'>Country</div>
                        <input type='text' placeholder='Enter Country (Required)' className='sm:w-[403px] border-2 border-[#dddddd] text-[14px] py-3 px-[18px] rounded-lg placeholder:text-[#B3B3B3] mt-2' onChange={(e)=>setCountry(e.target.value)}></input>
                        {countryError ? <div className='text-[14px] text-left text-[#FC5050] mt-2'>Please enter your country</div> : null}
                    </div>
                    <div>
                        <div className='text-[14px] text-left mt-4'>Emirate</div>
                        <input type='text' placeholder='Enter State  (Required)' className='sm:w-[403px] border-2 border-[#dddddd] text-[14px] py-3 px-[18px] rounded-lg placeholder:text-[#B3B3B3] mt-2' onChange={(e)=>setEmirate(e.target.value)}></input>
                        {emirateError ? <div className='text-[14px] text-left text-[#FC5050] mt-2'>Please enter your emirate</div> : null}
                    </div>
                </div>
                <div>
                    <div className='text-[14px] text-left mt-4'>Landmark (Optional)</div>
                    <textarea type='text' placeholder='Provide your landmark (If any)' className='sm:w-full sm:h-[136px] border-2 border-[#dddddd] text-[14px] py-3 px-[18px] rounded-lg placeholder:text-[#B3B3B3] mt-2'></textarea>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-x-6 mt-8'>
                <div className='sm:w-[403px] sm:h-[56px] text-[14px] font-medium flex items-center justify-center border-2 border-[#304BA0] rounded-lg cursor-pointer'>Reset</div>
                <div className='bg-[#304BA0] sm:w-[403px] sm:h-[56px] text-[14px] text-[#FFFFFF] font-medium flex items-center justify-center rounded-lg hover:bg-[#3E5FC5] cursor-pointer' onClick={handleSubmit}>Save Address</div>
            </div>



        </div>
    )
}

export default AddNewAddress
