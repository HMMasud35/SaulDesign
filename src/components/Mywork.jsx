import React, { useState } from 'react'
import Workimg_1 from '../assets/images/mywork_1.png'
import Workimg_2 from '../assets/images/mywork_2.png'
import Workimg_3 from '../assets/images/mywork_3.png'

const Mywork = () => {
  const [activenumber, setActiveNumber] = useState(1);

  const handleActivetoggole = (number) => {
    setActiveNumber(number)
  }
  return (
    <section className="bg-[url('assets/images/myworkbg.png')] bg-no-repeat bg-cover py-15 lg:py-67">
      <div className='container'>
        <h2 className='text-4xl sm:text-[60px] font-bold text-font_primary text-center lg:text-left'>My recent <span className='text-secondary'>works</span></h2>
        <div className='flex mt-4 mb-12 justify-center lg:block'>
          <button onClick={() => handleActivetoggole(1)}
            className={`${activenumber == 1 ? "bg-secondary btn text_shadow border-0 mr-2 sm:mr-4" : 'btn text_shadow border-0 mr-2 sm:mr-4'}`}>All</button>
          <button onClick={() => handleActivetoggole(2)}
            className={`${activenumber == 2 ? "bg-secondary btn text_shadow border-0 mr-2 sm:mr-4" : 'btn text_shadow border-0 mr-2 sm:mr-4'}`}>UI</button>
          <button onClick={() => handleActivetoggole(3)}
            className={`${activenumber == 3 ? "bg-secondary btn text_shadow border-0 mr-2 sm:mr-4" : 'btn text_shadow border-0 mr-2 sm:mr-4'}`}>UX</button>
          <button onClick={() => handleActivetoggole(4)}
            className={`${activenumber == 4 ? "bg-secondary btn text_shadow border-0 mr-2 sm:mr-4" : 'btn text_shadow border-0'}`}>Web Design</button>
        </div>

        {activenumber == 1 ? (
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
        ) : activenumber == 2 ? (
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center lg:justify-between'>
            <div className='recent_work'>
              <img src={Workimg_2} alt="workimg-2" />
            </div>
            <div className='recent_work'>
              <img src={Workimg_3} alt="workimg-3" />
            </div>
            <div className='recent_work'>
              <img className='w-[360px] px-5' src={Workimg_1} alt="workimg-1" />
            </div>
          </div>
        ) : activenumber == 3 ? (
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center lg:justify-between'>
            <div className='recent_work'>
              <img src={Workimg_3} alt="workimg-3" />
            </div>
            <div className='recent_work'>
              <img className='w-[360px] px-5' src={Workimg_1} alt="workimg-1" />
            </div>
            <div className='recent_work'>
              <img src={Workimg_2} alt="workimg-2" />
            </div>
          </div>
        ) : (
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center lg:justify-between'>
            <div className='recent_work'>
              <img src={Workimg_3} alt="workimg-3" />
            </div>
            <div className='recent_work'>
              <img src={Workimg_2} alt="workimg-2" />
            </div>
            <div className='recent_work'>
              <img className='w-[360px] px-5' src={Workimg_1} alt="workimg-1" />
            </div>
          </div>
        )}

      </div>
    </section>
  )
}

export default Mywork