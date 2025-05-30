import React from 'react'
import about from '../../../../public/assets/about me.png'
import Image from 'next/image'

export default function About() {
  return (
    <div className='mx-auto max-w-7xl my-16'>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className=''>
            <Image src={about} alt='df' className='lg:h-[600px] h-[380px] w-[350px] lg:w-[670px]' />
        </div>
        <div className="lg:mt-44 mt-12 lg:pl-0 pl-5">
            <span className='bg-[#759b3f22] text-sm lg:text-base px-4 py-2.5 rounded text-[#749B3F] font-bold'>About Us</span>
            <h2 className='font-bold my-5 lg:text-3xl text-xl'>About Fresh Harvest</h2>
            <p>Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>
            <button className='btn my-5 btn-outline border border-[#FF6A1A] text-[#FF6A1A]'>Ream More</button>
        </div>
      </div>
    </div>
  )
}
