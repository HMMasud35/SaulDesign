import React from 'react'
import Workimg_1 from '../assets/images/mywork_1.png'
import Workimg_2 from '../assets/images/mywork_2.png'
import Workimg_3 from '../assets/images/mywork_3.png'

const Mywork = () => {
  return (
    <section className="bg-[url('assets/images/myworkbg.png')] bg-no-repeat bg-cover py-67">
      <div className='container'>
        <h2 className='text-[64px] font-bold text-font_primary'>My recent <span className='text-secondary'>works</span></h2>
        <div className='mt-4 mb-12'>
          <button className='btn text_shadow border-0 mr-4'>All</button>
          <button className='btn text_shadow border-0 mr-4'>UI</button>
          <button className='btn text_shadow border-0 mr-4'>UX</button>
          <button className='btn text_shadow border-0'>Web Design</button>
        </div>
        <div className='flex justify-between'>
          <div className='recent_work'>
            <img src={Workimg_1} alt="workimg-1" />
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