import React from 'react'
import Workimg_1 from '../assets/images/mywork_1.png'
import Workimg_2 from '../assets/images/mywork_2.png'
import Workimg_3 from '../assets/images/mywork_3.png'

const Mywork = () => {
  return (
    <section className="bg-[url('assets/images/myworkbg.png')] bg-no-repeat bg-cover py-15 lg:py-67">
      <div className='container'>
        <h2 className='text-4xl sm:text-[60px] font-bold text-font_primary text-center lg:text-left'>My recent <span className='text-secondary'>works</span></h2>
        <div className='flex mt-4 mb-12 justify-center lg:block'>
          <button className='btn text_shadow border-0 mr-2 sm:mr-4'>All</button>
          <button className='btn text_shadow border-0 mr-2 sm:mr-4'>UI</button>
          <button className='btn text_shadow border-0 mr-2 sm:mr-4'>UX</button>
          <button className='btn text_shadow border-0'>Web Design</button>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center lg:justify-between'>
          <div className='recent_work'>
            <img className='w-[360px] px-5' src={Workimg_1} alt="workimg-1" />
          </div>
          <div className='recent_work'>
            <img src={Workimg_2} alt="workimg-2" />
          </div>
          <div className='recent_work'>
            <img src={Workimg_3} alt="workimg-3" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mywork