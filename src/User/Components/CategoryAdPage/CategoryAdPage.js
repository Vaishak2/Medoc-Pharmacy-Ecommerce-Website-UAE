import React from 'react'
import Adv1 from '../../../Assets/CategoryImage/ad 2.png'
import Adv2 from '../../../Assets/CategoryImage/ad 3.png'

function CategoryAdPage() {
  return (
    <div className='flex'>
      <div className='sm:w-[1200px] sm:h-[587px] flex sm:mt-[64px] sm:mx-auto '>
        <img className='sm:w-[588px] sm:h-[587px] ' src={Adv1} alt="" />
        <img className='sm:w-[588px] sm:h-[587px] sm:ml-[24px]' src={Adv2} alt="" />
      </div>
    </div>
  )
}

export default CategoryAdPage
