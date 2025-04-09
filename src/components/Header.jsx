import React from 'react'
import Logo from "../../public/images/logo.png"
import { AiOutlineBars } from "react-icons/ai";

const Header = () => {
  return (
    <header className='border-b border-font_primary/10 lg:py-12 py-3'>
      <nav>
        <div className='container'>
          <div className='flex justify-between'>
            <a href="#">
              <img src={Logo} alt="logo" />
            </a>
            <AiOutlineBars className='text-white text-3xl font-bold lg:hidden ' />
            <ul className='hidden lg:flex gap-12'>
              <li className='list after'><a href="#">Home</a></li>
              <li className='list after'><a href="#">About Me</a></li>
              <li className='list after'><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header