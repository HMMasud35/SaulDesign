import React from 'react'
import Projectimg from '../assets/images/projectimg.png'
import Projectshape from '../assets/images/project-shape.png'
import { TbSend } from "react-icons/tb";

const Projectmind = () => {
  return (
    <section className='py-64.5 border-b-1 border-font_primary/10'>
      <img className='absolute -z-10 mt-[-182px] ml-[375px]' src={Projectshape} alt="" />
      <div className='container'>
        <div className='flex'>
        <div className='w-1/2'>
          <h2 className='text-[64px] leading-20 font-bold text-font_primary'>Got a project in <br/> <span className='text-secondary'>mind?</span></h2>
          <img className='ml-55' src={Projectimg} alt="" />
        </div>
        <div className='w-1/2 h-[508px]'>
          <label className='project_label mr-[210px]' htmlFor="">Your name</label>
          <label className='project_label' htmlFor="">Your email</label> <br />
          <input className='project_input mt-[10px] mr-6' placeholder='Name' type="text" />
          <input className='project_input mb-[24px]' placeholder='Email' type="email" /> <br/>
          <label className='project_label' htmlFor="">Your Message</label> <br />
          <textarea className='project_input w-[600px] h-[280px] mt-[10px] py-5' name="text" placeholder='Message'></textarea>
          <button className='btn text_shadow border-0 mt-6 flex gap-3 group'>Send Message <TbSend className='text-2xl' /></button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Projectmind