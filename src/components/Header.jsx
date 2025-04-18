import React, { useState } from 'react'
import Logo from "../../public/images/logo.png"
import { AiOutlineBars } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const [menuBar, setMenuBar] = useState(false);
  const [item, setItem] = useState(1);

  const handleMenuToggle = () => {
    setMenuBar(!menuBar);
  }

const handleActivetoggole = (number) => {
  setItem(number)
}

  return (
    <header className='border-b border-font_primary/10 lg:py-12 py-3'>
      <nav>
        <div className='container'>
          <div className='flex justify-between'>
            <a href="#">
              <img src={Logo} alt="logo" />
            </a>

            {menuBar ? (
              <IoCloseSharp onClick={handleMenuToggle}
                className='text-white text-3xl font-bold lg:hidden' />
            ) : (
              <AiOutlineBars onClick={handleMenuToggle}
                className='text-white text-3xl font-bold lg:hidden' />
            )}

            <ul className='hidden lg:flex gap-12'>
              <li onClick={() => handleActivetoggole(1)}
               className={`${item == 1 ? "list after active" : 'list after'}`}><a href="#">Home</a></li>
              <li onClick={() => handleActivetoggole(2)}
               className={`${item == 2 ? "list after active" : 'list after'}`}><a href="#">About Me</a></li>
              <li onClick={() => handleActivetoggole(3)}
               className={`${item == 3 ? "list after active" : 'list after'}`}><a href="#">Contact</a></li>
            </ul>

            {/* Menu View */}
            {menuBar && (
              <ul className='lg:flex gap-12 menubar'>
                <li className='menuli'><a href="#">Home</a></li>
                <li className='menuli'><a href="#">About Me</a></li>
                <li className='menuli'><a href="#">Contact</a></li>
              </ul>
            )}

          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header