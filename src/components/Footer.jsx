import React from 'react';
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Image from 'next/image';
import logo from '../../public/assets/logo.png';
import app from '../../public/assets/app.png';
import google from '../../public/assets/google.png';
import pay from '../../public/assets/pay.jpg';
import paypal from '../../public/assets/paypal.jpg';
import visa from '../../public/assets/visa.webp';
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
    const newLocal = 'text-xl font-bold';
  return (
    <div className='sm:footer-horizontal bg-base-200 text-base-content p-10'>
        <footer>
        <div className="footer max-w-7xl mx-auto lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
            <aside>
                <div className="flex items-center gap-3">
                    <Image src={logo} height={60} width={60} alt='' />
                    <p className='text-3xl font-bold'>Fresh Harvests</p>
                </div>
                <div className=" pt-14">
                    <p className='ml-2'>Download App:</p>
                    <div className="flex items-center gap-2">
                        <Image src={app} alt=''  width={140} />
                        <Image src={google} alt='' width={135} />
                    </div>
                </div>
            </aside>
            <nav>
                <h6 className="uppercase font-bold text-black">Quick links 1</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">shop</a>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Blog</a>
                <a className="link link-hover">Detail Blog</a>
            </nav>
            <nav>
                <h6 className="uppercase font-bold text-black">Quick links 2</h6>
                <a className="link link-hover">Favorites</a>
                <a className="link link-hover">Cart</a>
                <a className="link link-hover">Sign in</a>
                <a className="link link-hover">Register</a>
            </nav>
            <nav>
                <h6 className="uppercase font-bold text-black">Contact us</h6>
                <div className="flex items-center gap-2">
                    <IoCallOutline className='text-[#749B3F] text-xl' />
                    <p>1234 5678 90</p>
                </div>
                <div className="flex items-center gap-2">
                    <MdOutlineEmail className='text-[#749B3F] text-xl' />
                    <p>Freshharvests@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                    <IoLocationOutline className='text-[#749B3F] text-xl' />
                    <p>Tanjung Sari Street, Pontianak, Indonesia</p>
                </div>
                <p className={newLocal}>Accepted Payment Methods:</p>
                <div className="flex gap-3">
                    <Image src={pay} alt='' width={100} />
                    <Image src={paypal} alt='' width={100} />
                    <Image src={visa} alt='' width={100} />
                </div>
            </nav>
            </div>
            <div className='max-w-7xl mx-auto'>
                <div className='border-gray-300 my-5 border-t border-1 '></div>
                <div className="grid mt-3 lg:grid-cols-2 grid-cols-2 items-center">
                
                <aside className="grid-flow-col items-center">
                    <p>© Copyright 2024, All Rights Reserved by Banana Studio</p>
                </aside>
                <nav className="grid-flow-col grid lg:grid-cols-2 grid-cols-1 gap-4 md:place-self-center md:justify-self-end">
                    <a href="#" className='bg-[#212337] text-white p-2 rounded-full'>
                        <FaTwitter className='text-xl text-white' />
                    </a>
                    <a href="#" className='bg-[#212337] text-white p-2 rounded-full'>
                        <FaFacebookF className='text-xl text-white' />
                    </a>
                    <a href="#" className='bg-[#212337] text-white p-2 rounded-full'>
                        <FiInstagram className='text-xl text-white' />
                    </a>
                </nav>
                </div>
            </div>
        </footer>
    </div>

  )
}
