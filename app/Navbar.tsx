"use client"
import { useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { SearchIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';
import Image from "next/image";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] =
  useState(false);

  const toggleDropdown = ()=> {
    setIsDropdownOpen(! isDropdownOpen);
  };
   


  return (
   <nav  className="w-full h-[80px] fixed top-5 shadow-lg shadow-[#2A0E61]/50 bg-black backdrop-blur-md z-50 rounded-full">
    <div className='w-full h-full flex flex-row items-center  m-auto px-[10px]'>
      <div className='flex p-2 max-w-full h-auto  '>
     <Image src="/logo.png" alt='logo-image'
     width={78} height={20}
     className='rounded-full'
      />
      
    </div>
    <div className='flex space-x-5 text-white p-10 '>
     <Link href="/products">Products</Link>
     <Link href="/products">Contact</Link>
     <Link href="/products">About</Link>
     <SearchIcon className= " h-5 w-11 text-grey-900" />
     <button onClick={toggleDropdown} className='flex items-center space-x-1'>
      <span className='ml-9'>
        <MenuIcon className='h-6 w-6' />
      </span>
     </button>
     {isDropdownOpen && (
       <div className='absolute mt-2 py-2 w-72 bg-gray-800 rounded-md'>
          <Link href="/products" className='block px-4 py-2'>Products</Link>
          <Link href="/products" className='block px-4 py-2'>Products</Link>
          
        
       </div>

     )}
     
      </div>

    </div>
    
    
   </nav>
  )
}

export default Navbar
