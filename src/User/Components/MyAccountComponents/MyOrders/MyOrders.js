import React from 'react'
import SearchIcon from '../../../../Assets/Icons/search.png'

function MyOrders() {
    return (
        <div>

            <div className='flex justify-between'>
                <div className='text-left'>
                    <div className='sm:text-[16px] sm:leading-6 font-semibold'>All Orders</div>
                    <div className='sm:text-[12px] sm:leading-4'>8 Items</div>
                </div>
                <div className='flex'>
                    <div className='border border-[#B3B3B3] rounded-lg flex sm:mb-[30px]'>
                        <img className='sm:h-6 sm:w-6 my-auto sm:ml-4' src={SearchIcon}></img>
                        <input className='sm:ml-2 sm:h-[48px] placeholder-[16px] placeholder-[#A8A8A8] rounded-lg' type='text' placeholder='Search Position'></input>
                    </div>
                    <div>Filters</div>
                </div>
            </div>

        </div>
    )
}

export default MyOrders
