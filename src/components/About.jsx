import React from 'react'
import Aboutimg from '../assets/images/about_img.png'
import Aboutshape_1 from '../assets/images/about_shape-1.png'
import Aboutshape_2 from '../assets/images/ablut-shape-2.png'
import Aboutshape_3 from '../assets/images/about-shape-3.png'

function About() {
  return (
    <section className='h-256 py-34 border-t-1 border-font_primary/10'>
      <div className='container flex'>
        <div className='w-2/4'>
          <img className='mb-[75px]' src={Aboutshape_1} alt="aboutshape-1" />
          <h2 className='text-[60px] font-bold text-font_primary'>About <span className='text-secondary'>me</span></h2>
          <img className='mt-[-100px] ml-87' src={Aboutshape_3} alt="aboutshape-3" />
          <p className='w-[389px] text-lg font-normal text-font_primary/75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... <a className='text-font_primary font-bold cursor-pointer'>Read more</a></p>
          <img className='mt-[65px] ml-40' src={Aboutshape_2} alt="aboutshape-2" />
        </div>
        <div className='w-2/4'>
          <img className='mt-[100px] ml-auto' src={Aboutimg} alt="about img" />
        </div>
      </div>
    </section>
  )
}

export default About