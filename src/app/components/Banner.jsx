import React from 'react'
import man from '../../../public/assets/ban-man.png';
import Image from 'next/image';
import menu from '../../../public/assets/ban-menu.png';

export default function Banner() {
    
  return (
    <div className='banner -mt-50px h-[110vh] lg:h-[100vh]'>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mt-40 flex lg:pl-0 pl-5 flex-col gap-7">
            <h3 className=' text-[#749B3F] font-bold'>
                <span className='bg-[#759b3f22] text-sm lg:text-base px-4 py-2.5 rounded'>Welcome to Fresh Harvest</span>
            </h3>
            <h1 className='lg:text-5xl text-3xl font-bold'>Fresh Fruits and <br /> Vegetables</h1>
            <p>At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables</p>
            <div className=" flex lg:gap-28 gap-12">
                <button className='btn border-none bg-[#FF6A1A] text-white'>Shop Now</button>
                <Image src={menu} alt='' className='rounded-xl lg:w-[280px] mt-10 lg:h-[120px] h-[80px] w-[170px]' />
            </div>
        </div>
        <div className="lg:mt-[89px] mt-5 flex items-end float-end">
            <Image src={man} alt='' className='h-650px w-550px' />
        </div>
      </div>
      </div>
    </div>
  )
}
