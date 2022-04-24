import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Favicon from "../assets/favicon.ico"

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a129f] text-gray-300'>
        <div>
            <img src={Favicon} alt="Logo"/>
        </div>

    </div>
  )
}

export default Navbar