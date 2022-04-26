import React from 'react'
import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Favicon from "../assets/favicon.ico"

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full flex justify-between items-center px-4 bg-[#0a129f] text-gray-300'>
        <div>
            <img src={Favicon} alt="My Logo" style={{width: '50px'}}/>
        </div>

        {/* { menu } */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        

        {/* {hamburger} */}
        <div onClick={handleClick} className='md:hidden z-10'>
            <FaBars/>
        </div>

        {/* {mobile menu} */}
        <ul className='absolute top-0 left-0 w-full h-screen bg-[#0a129f] flex flex-col justify-center item'>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* {Social icons} */}
        <div></div>

    </div>
  )
}

export default Navbar