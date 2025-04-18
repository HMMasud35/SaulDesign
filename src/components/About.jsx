import React, { useState } from 'react'
import Aboutimg from '../assets/images/about_img.png'
import Aboutshape_1 from '../assets/images/about_shape-1.png'
import Aboutshape_2 from '../assets/images/ablut-shape-2.png'
import Aboutshape_3 from '../assets/images/about-shape-3.png'

function About() {
  const [readmore, setReadMore] = useState(false)

  const handleReadMore = () => [
    setReadMore(!readmore)
  ]

  return (
    <section className='py-22 sm:py-22 lg:py-54 border-t-1 border-font_primary/10'>
      <div className='container'>
        <div className='flex flex-col sm:flex-row lg:flex-row'>
          <div className='sm:w-2/4 lg:w-2/4'>
            <img className='absolute mt-[-60px] sm:mt-[-65px] lg:mt-[-120px]' src={Aboutshape_1} alt="aboutshape-1" />
            <img className='absolute mt-[-40px] sm:mt-[-50px] lg:mt-[-20px] ml-50 lg:ml-87' src={Aboutshape_3} alt="aboutshape-3" />
            <img className='absolute mt-45 sm:mt-50 lg:mt-100 sm:ml-30 ml-40' src={Aboutshape_2} alt="aboutshape-2" />
            <h2 className='text-4xl lg:text-[60px] font-bold text-font_primary mb-6 sm:mb-4 lg:mb-5'>About <span className='text-secondary'>me</span></h2>
            <p className='w-full sm:w-2xs lg:w-[389px]  text-lg font-normal text-justify text-font_primary/75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus at turpis condimentum lobortis

              {readmore || (
                <span className='ml-1 mr-2 font-normal tracking-widest text-font_primary/75'>.....</span>
              )}

              {readmore && (
                <span className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit facere nobis eos, quam at obcaecati amet tenetur ducimus laboriosam magnam!</span>
              )}

              {readmore ? (
                <span onClick={handleReadMore} className='text-font_primary font-bold cursor-pointer ml-2'>Read lese</span>
              ) : (
                <span onClick={handleReadMore} className='text-font_primary font-bold cursor-pointer ml-2'>Read more</span>
              )}
            </p>


          </div>
          <div className='sm:w-2/4 lg:w-2/4'>
            <img className='mt-10 lg:mt-[-50px]' src={Aboutimg} alt="about img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About