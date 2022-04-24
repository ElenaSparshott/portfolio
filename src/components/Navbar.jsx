import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Favicon from "../assets/favicon.ico"

const Navbar = () => {
  return (
    <div className='fixed w-full flex justify-between items-center px-4 bg-[#0a129f] text-gray-300'>
        <div>
            <img src={Favicon} alt="My Logo" style={{width: '50px'}}/>
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
        {/* {hamburger} */}
        <div className='hidden'>
            <FaBars/>
        </div>

        {/* {mobile menu} */}
        <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>

        {/* {Social icons} */}
        <div></div>

    </div>
  )
}

export default Navbar