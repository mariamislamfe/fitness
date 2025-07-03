'use client';

import Link from "next/link"
import Image from "next/image"
import MobileNav from "./MobileNav"
import Nav from "./Nav"
import { useEffect, useState } from "react"
import { MdMenu } from "react-icons/md"

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  
  useEffect(() => {
    const handlescroll = ( ) =>{
      setHeaderActive(window.scrollY > 50)

    }
    window.addEventListener('scroll', handlescroll)
    return () => {
      window.removeEventListener('scroll', handlescroll)
    };
    }, []);


  return (
    <header className={`${headerActive ? 'h-[100px]' : 'h-[124px]'} fixed max-w-[1920] top-0 w-full bg-black h-[100px] transition-all z-50`}>
      <div className="container mx-auto h-full flex items-center justify-between">
        <Link href=''>
        <Image src={'/assets/img/logo.png'} width={117} height={55} alt="logo"></Image>
        </Link>
        <MobileNav containerStyles={` ${headerActive ? 'top-[90px]' : 'top-[124px]'}
        ${openNav ? 'max-h-max pt-8 pb-10 border-t border-white/10' : 'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'}
        xl:hidden text-white flex flex-col text-center gap-8 fixed bg-black w-full left-0 text-base uppercase font-medium transition-all`} />
        <Nav containerStyles="flex gap-4 text-white hidden text-base uppercase font-medium transition-all xl:flex" />
        <div className="flex items-center gap-4">
          <div className="text-white flex items-center gap-4">
            <button className="hover:text-red-700 transition-all text-base uppercase font-medium ">Login</button>
            <button className="hover:text-red-700 transition-all text-base uppercase font-medium ">Register</button>
          </div>
          <button onClick={() => setOpenNav(!openNav)}
           className="text-white xl:hidden">
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
