import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import b1 from '../../../../public/assets/b-1.jpg';
import Image from 'next/image';
import b2 from '../../../../public/assets/b-2.jpg';
import b3 from '../../../../public/assets/b-3.jpg';

export default function Blog() {
    
  return (
    <div className='my-20'>
      <h3 className='text-center text-[#749B3F] text-xl font-bold'><span className='bg-slate-200 px-3 rounded py-1.5'>Our Blog</span></h3>
      <h2 className='text-center font-bold text-4xl py-5'>Fresh Harvest Blog</h2>
      <div className="lg:w-2/6 w-6/6 lg:px-0 px-5 mx-auto pb-5">
        <p className='text-center'>Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.</p></div>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-7 gap-4 mx-auto max-w-7xl'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                    src={b1}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-light">May 23, 2024</h2>
                    <p className='font-semibold'>Exploring Seasonal Delights: A Guide to What's Fresh Right Now</p>
                    <div className="card-actions justify-start">
                        <a href="#" className='underline flex
                        items-center gap-1 text-[#FF6A1A] font-semibold'><p>Read More </p><FaArrowRightLong /></a>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                    src={b2}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-light">May 23, 2024</h2>
                    <p className='font-semibold'>Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads</p>
                    <div className="card-actions justify-start">
                        <a href="#" className='underline flex
                        items-center gap-1 text-[#FF6A1A] font-semibold'><p>Read More </p><FaArrowRightLong /></a>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                    src={b3}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-light">May 23, 2024</h2>
                    <p className='font-semibold'>The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week</p>
                    <div className="card-actions justify-start">
                        <a href="#" className='underline flex
                        items-center gap-1 text-[#FF6A1A] font-semibold'><p>Read More </p><FaArrowRightLong /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}
