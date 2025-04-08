import React from 'react'
import Logo from "../../public/images/logo.png"

const Header = () => {
  return (
    <header className='border-b border-font_primary/10'>
      <nav>
        <div className='container flex justify-between py-12'>
          <a href="#">
            <img src={Logo} alt="logo"/>
          </a>
          <ul className='flex gap-12'>
            <li className='list after relative'><a href="#">Home</a></li>
            <li className='list after relative'><a href="#">Blog</a></li>
            <li className='list after relative'><a href="#">About Me</a></li>
            <li className='list after relative'><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header