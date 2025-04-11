import React from 'react'
import Banner_img from '../assets/images/banner.png'
import Banner_shape from '../assets/images/banner-shape.png'
import { LuDownload } from "react-icons/lu";

const Banner = () => {
  return (
    <section className='py-5 sm:py-10 lg:py-50.5'>
      <div className='container'>
        <div className='sm:flex'>
          <img className='hidden lg:block w-22.5 h-58.5 mt-12 mr-5 rotate-3' src={Banner_shape} alt="Banner Shape" />
          <div className='sm:w-[60%]'>
            <h1 className='text-5xl lg:text-7xl font-bold leading-14 sm:leading-16 lg:leading-24 text-font_primary mb-6 lg:mb-12 text-center sm:text-left'>CREATIVE UI <span className='text-secondary'>DESIGNER</span></h1>
            <div className='flex mb-2 justify-center lg:justify-start'>
              <button className='btn text_shadow mr-6'>Hire me</button>
              <button className='btn text_shadow flex gap-3'>Download CV <LuDownload className='text-lg lg:text-2xl' /> </button>
            </div>
          </div>
          <div className='sm:w-[50%] lg:w-[40%]'>
            <img className='ml-auto sm:mt-[-30px] lg:mt-[-20px]' src={Banner_img} alt="Banner_img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner