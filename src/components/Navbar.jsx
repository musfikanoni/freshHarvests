'use client'
import { usePathname } from 'next/navigation';
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Badge } from 'antd';
import { useEffect, useState } from 'react'
import { MdOutlineFavorite } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import logo from '../../public/assets/logo.png';
import Image from 'next/image';
import Login from '@/app/components/login/Login';

export default function Navbar() {
  const { data: session } = useSession();

  const [activeLink, setActiveLink] = useState('');

  const pathname = usePathname();
  const isHome = pathname === '/';

  const textColor = isHome ? 'text-white' : 'text-[#749B3F]';
  const signBtn = isHome ? 'text-white' : 'text-black';

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ['banner', 'shop', 'aboutus', 'blog'];

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop - 80 &&
            scrollPosition < offsetTop + offsetHeight - 80
          ) {
            setActiveLink(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = () => {
    document.getElementById('my_modal_3')?.showModal();
  };

  const navMenu = () => (
    <>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/shop">Shop</Link></li>
      <li><Link href="/aboutus">About Us</Link></li>
      <li><Link href="/blog">Blog</Link></li>
    </>
  );

  return (
    <div>
      <div className="navbar lg:px-32 bg-transparent absolute z-10">
        <div className="navbar-start">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="" width={40} />
            <h2 className="lg:text-2xl text-xl font-bold">Fresh Harvests</h2>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navMenu()}
          </ul>
        </div>

            <div className="navbar-end hidden lg:flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <MdOutlineFavorite className={`w-5 h-5 ${textColor}`} />
              <p className={`font-medium ${signBtn}`}>Favorites</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge count={5}>
                <FaCartShopping className={`w-5 h-5 ${textColor}`} />
              </Badge>
              <p className={`font-medium ${signBtn}`}>Carts</p>
            </div>
    

          {/* Sign In / Sign Out logic */}
          {session?.user ? (
            <button onClick={() => signOut()} className={`btn bg-transparent shadow-none ${signBtn}`}>
              Sign out
            </button>
          ) : (
            <button onClick={openModal} className={`btn bg-transparent shadow-none ${signBtn}`}>
              Sign in
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="dropdown lg:hidden navbar-end">
          <Link href="/">
            <Badge count={5}>
              <FaCartShopping className="w-5 h-5" />
            </Badge>
          </Link>
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="size-6">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-56 w-52 p-2 shadow">
            {navMenu()}
            <li>
              <Link href="/favorites" className="flex items-center gap-1">
                Favorites
              </Link>
            </li>
            <li>
              {session?.user ? (
                <button onClick={() => signOut()} className="text-left">Sign out</button>
              ) : (
                <button onClick={openModal} className="text-left">Sign in</button>
              )}
            </li>
          </ul>
        </div>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-11/12 max-w-md mx-auto">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <Login />
        </div>
      </dialog>
    </div>
  );
}
