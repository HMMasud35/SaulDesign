import React from 'react'
import Banner_img from '../assets/images/banner.png'
import Banner_shape from '../assets/images/banner-shape.png'


import { LuDownload } from "react-icons/lu";
const Banner = () => {
  return (
    <section className='h-256'>
      <div className='container flex py-50.5'>
        <img className='w-22.5 h-58.5 mt-22 mr-5 rotate-3' src={Banner_shape} alt="Banner Shape" />
        <div className='w-[60%] mt-10'>
          <h1 className='text-8xl font-bold leading-24 text-font_primary mb-12'>CREATIVE UI <span className='text-secondary'>DESIGNER</span></h1>
          <div className='flex'>
          <button className='btn text_shadow mr-6'>Hire me</button>
          <button className='btn text_shadow flex gap-3'>Download CV <LuDownload className='text-2xl' /> </button>
          </div>
        </div>
        <div className='w-[40%]'>
          <img className='ml-auto' src={Banner_img} alt="Banner_img" />
        </div>
      </div>
    </section>
  )
}

export default Banner