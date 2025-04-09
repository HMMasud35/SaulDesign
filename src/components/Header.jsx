import React from 'react'
import Logo from "../../public/images/logo.png"

const Header = () => {
  return (
    <header className='border-b border-font_primary/10 py-12'>
      <nav>
        <div className='container'>
          <div className='flex justify-between'>
            <a href="#">
              <img src={Logo} alt="logo" />
            </a>
            <ul className='flex gap-12'>
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