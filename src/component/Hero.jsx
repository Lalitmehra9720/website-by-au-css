import React from 'react'
import { Telescope } from 'lucide-react';
const Hero = () => {
  return (
    <div>
      <div className="bg-[url('https://wallpapercrafter.com/desktop/123830-nature-plants-leaves-monochrome.jpg')] flex justify-center items-center w-full pt-[65px] w-full h-[70vh] overflow-hidden rounded-lg shadow-lg bg-cover bg-center">
        <div className='flex flex-col justify-center md:items-left items-center gap-[20px] text-white '>
          <h1 className='text-lg font-roboto'>Signature Elegance</h1>
          <p className='text-[20px] font-roboto'>Discover Your Signature Style with Our Hero Collection - Where Fashion Meets Individuality!</p>
          
          <h1  className='bg-[#7d7f8061] border border-2 p-3 rounded-full text-[15px] border-white tracking-[5px] cursor-pointer font-roboto '><a className='no-underline text-white' href="#product">Explore Now </a></h1>
       
         </div>
          
      </div>
    </div>
  )
}

export default Hero
