import React from 'react'
import Projectimg from '../assets/images/projectimg.png'
import Projectshape from '../assets/images/project-shape.png'
import { TbSend } from "react-icons/tb";

const Projectmind = () => {
  return (
    <section className='py-15 lg:py-64.5 border-b-1 border-font_primary/10'>
      <img className='absolute mt-[-25px] lg:mt-[-182px] xl:ml-[375px] xl:mt-[-182px] lg:ml-0 -z-1 lg:hidden' src={Projectshape} alt="" />
      <div className='container'>
        <div className='flex flex-col sm:flex-row sm:gap-8'>
          <div className='lg:w-1/2'>
            <h2 className='text-4xl lg:text-[60px] leading-13 lg:leading-20 font-bold text-font_primary'>Got a project in <span className='text-secondary'>mind?</span></h2>
            <img className='mt-15 lg:ml-55' src={Projectimg} alt="project-shape.png" />
          </div>
          <div className='lg:w-1/2 mt-4 lg:mt-6'>
            <div className='flex flex-col lg:flex-row gap-2 lg:gap-4'>
              <form className='lg:w-2/4'>
                <label className='project_label' htmlFor="">Your name</label>
                <input className='project_input mt-2.5 w-full' placeholder='Name' type="text" />
              </form>
              <form className='lg:w-2/4'>
                <label className='project_label' htmlFor="">Your email</label> <br />
                <input className='project_input mt-2.5 mb-[24px] w-full' placeholder='Email' type="email" /> <br />
              </form>
            </div>
            <label className='project_label' htmlFor="">Your Message</label> <br />
            <textarea className='project_input w-full h-[280px] mt-2.5 py-5' name="text" placeholder='Message'></textarea>
            <button className='btn text_shadow border-0 mt-6 flex gap-3'>Send Message <TbSend className='text-2xl' /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projectmind