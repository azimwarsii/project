'use client'
import { useState } from 'react';
import React from 'react'
import { useUser } from "@auth0/nextjs-auth0/client";
import {AiOutlineMenu, AiOutlineClose , AiOutlineInstagram , AiOutlineFacebook , AiOutlineTwitter} from 'react-icons/ai'

const Navbar1 = () => {
    const { user, error, isLoading } = useUser();
    const [show , setShow] = useState(false);

    const handleNav = () => {
      setShow(!show)
    }

  return (
    <nav>
    <div className="container mx-auto px-6 py-2 flex justify-between items-center">
      <a className="font-bold text-2xl lg:text-4xl" href="#">
      Med+
      </a>

      <div className="hidden lg:block">
        <ul className="inline-flex">
          <li>
          <a
            type="button"
            href="/api/auth/logout"
            className="black_btn mx-2"
            
            >
                        Log Out
            </a>
          </li>
        </ul>
      </div>
 {/* Mobile Menu */}

 <div onClick={handleNav}className='md:hidden cursor-pointer pl-24'>
        <AiOutlineMenu size={25}/>
      </div>
      <div className={
        show?"fixed left-0 top-0 w-[65%] md:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
        :"fixed left-[-100%] top-0 p-10 ease-in duration-500"
      }>
      <div className='flex w-full items-center justify-end'>
      <div onClick={handleNav}className=' md:hidden cursor-pointer pl-24'>
        <AiOutlineClose size={25}/>
      </div>
      </div>
      <div className='flex-col py-4'>
      <ul className="">
          <li>
          <a
            type="button"
            href=""
            className="py-4 cursor-pointer"
            >
              Profile
            </a>
          </li>
          <li>
          <a
            type="button"
            href="/api/auth/logout"
            className="py-4 cursor-pointer"
            >
              Log Out
            </a>
          </li>
        </ul>
      </div>
    

     <div className='flex flex-row justify-around pt-10 items-center'>
      <AiOutlineInstagram size={25} className="cursor-point" />
      <AiOutlineFacebook size={25} className="cursor-point" />
      <AiOutlineTwitter size={25} className="cursor-point" />
     </div>
    </div>
  </div>
  </nav>
  
  )
}

export default Navbar1