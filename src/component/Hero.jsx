import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className='relative flex w-full pt-[65px] w-full h-[70vh] overflow-hidden rounded-lg shadow-lg'>
          <img className=' w-full h-full object-cover' src="https://wallpapercrafter.com/desktop/123830-nature-plants-leaves-monochrome.jpg" alt="" />
          <div className='absolute flex top-[100px] text-white left-[10vw] w-[40vw] h-full flex flex-col gap-2 items-center'>
           <h1>Top Web Development Companies</h1>
           <p>Web Development Companies have a  4.5 avg. rating from 13,133 verified reviews</p>
          </div>
          
      </div>
    </div>
  )
}

export default Hero
