import React from 'react'
import CountdownTimer from './components/CountdownTimer'
import Image from 'next/image'
import fruit from '../../../../public/assets/about-fruit.png';


export default function SpecialOffer() {
  return (
    <div className='special h-[75vh] w-[490px] lg:w-[1140px]'>
      <div className="mx-auto lg:flex flex-none max-w-7xl items-center justify-between">
        <div className='lg:mt-20 '>
            <div className="flex lg:justify-start justify-center">
              <span className='bg-[#759b3f22] text-sm lg:text-base lg:mt-5 mt-5  px-4 py-2.5 rounded text-[#749B3F] font-bold'>Special Offer</span>
            </div>
            <h2 className='lg:text-4xl text-2xl lg:text-left text-center font-bold my-3'>Seasonal Fruit Bundle</h2>
            <h3 className='lg:text-3xl lg:text-left text-center font-bold text-2xl'>Discount up to <span className='text-[#FF6A1A]'>80% OFF</span></h3>
            

            <div className="flex lg:justify-start justify-center">
                <CountdownTimer targetDate="2025-06-05T00:00:00" />
                  </div>
              <div className="lg:mt-16 mt-5 flex lg:justify-start justify-center">
                  <span 
                  className='bg-[#176D38] px-5 py-3 lg:text-2xl text-base rounded-full font-bold'>
                    <span className='text-white'>CODE :</span> <span className='text-warning'>FRESH28</span>
                </span>
              </div>
          
          </div>
        <div className='mt-16'>
          <Image src={fruit} alt='' className='lg:w-[625px] w-[425px] lg:h-[380px] h-[280px]' />
        </div>
      </div>
      
    </div>
  )
}
