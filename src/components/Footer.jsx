import React from 'react'
import { FiHome } from "react-icons/fi";
import { MdOutlineAccountBox } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { TbBrandYoutube } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className='pt-25'>
      <div className='container'>
        <div>
          <ul className='flex justify-center gap-12'>
            <li className='list group'><a className='flex group-hover:text-secondary' href=""><FiHome className='mx-3 icon pb-0.5' />Home</a></li>
            <li className='list group'><a className='flex group-hover:text-secondary' href=""><MdOutlineAccountBox className='mx-3 icon pb-0.5' />About me</a></li>
            <li className='list group'><a className='flex group-hover:text-secondary' href=""><FiPhone className='mx-3 icon pb-0.5'/>Contact</a></li>
          </ul>
        </div>
        <div className='mt-[38px] mb-11'>
          <ul className='flex justify-center gap-6'>
            <li className='btn border-0 rounded-full p-3'><a href=""><FiFacebook className='icon' /></a></li>
            <li className='btn border-0 rounded-full p-3'><a href=""><FaInstagram className='icon' /></a></li>
            <li className='btn border-0 rounded-full p-3'><a href=""><RiTwitterLine className='icon' /></a></li>
            <li className='btn border-0 rounded-full p-3'><a href=""><TbBrandYoutube className='icon' /></a></li>
          </ul>
        </div>
        <h6 className='text-end text-lg font-normal text-font_primary py-12'>Terms of Service - Privacy Policy</h6>
      </div>
    </footer>
  )
}

export default Footer