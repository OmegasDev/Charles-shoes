import React from 'react'
import Image from "next/image";
import Link from 'next/link';


const Footer = () => {
  return (
   <footer className='py-0 bg-gray-500 text-gray-600'>
    <div className='container mx-auto flex flex-row md:flex-row items-center justify-between'>
        <div className='flex items-center mb-1'>
            <img src="/logo.png" alt="logo" className='h-40 mr-2' />
        
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 px-2 pt-1  mt-0 text-white text-sm ml-24'>
            <Link href="/products" className='ml-18 hover:text-blue-700'>Products</Link>
            <Link href="/products" className='ml-18 hover:text-blue-700'>Products</Link>
             <Link href="/products" className='ml-18 hover:text-blue-700'>Products</Link>
                </div>
                
        </div>
    </div>
    <div className=' mx-auto text-center  bg-slate-600'>
        <p className='text-xs text-gray-300'>
            &copy; 2023. All right reserved.
        </p>
    </div>
   </footer>
  );
};

export default Footer
