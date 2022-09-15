import React from 'react'
import { useState } from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import Favicon from "../assets/favicon.ico"
import {BsFillPersonLinesFill} from "react-icons/bs"
import {HiMail} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full flex justify-between items-center px-4 bg-[#0a819f] text-[#474b59] text-4xl'>
        <div>
            <img src={Favicon} alt="My Logo" style={{width: '100px'}}/>
        </div>

        {/* { menu } */}
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                    Home
                    </Link>
                </li>               
                <li>
                    <Link to="about" smooth={true} duration={500}>
                    About
                    </Link>
                </li>
                <li><Link to="skills" smooth={true} duration={500}>
                    Skills
                    </Link>
                </li>
                <li><Link to="projects" smooth={true} duration={500}>
                    Projects
                    </Link>
                </li>
                <li><a href={process.env.PUBLIC_URL + 'ElenaSparshottCV.pdf'}
                    >CV
                    </a>
                </li>
            </ul>
        

        {/* {hamburger} */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* {mobile menu} */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a129f] flex flex-col justify-center item'}>

            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* {Social icons} */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'   href="https://www.linkedin.com/in/elena-sparshott/">
                        Linkedin <FaLinkedin size={30}/>                    
                    </a>
                </li>
                 <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333335]'>
                    <a className='flex justify-between items-center w-full text-gray-300'   href="https://github.com/ElenaSparshott">
                        Github <FaGithub size={30}/>                    
                    </a>
                </li>
                 <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a className='flex justify-between items-center w-full text-gray-300'   href="mailto:elenaevans@hotmail.co.uk">
                        Email <HiMail size={30}/>                    
                    </a>
                </li>
                 <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items w-full text-gray-300' href={process.env.PUBLIC_URL + 'ElenaSparshottCV.pdf'}>                                  
                        CV<BsFillPersonLinesFill size={30}/></a>                
                    
                </li>
            </ul>

        </div>

    </div>
  )
}

export default Navbar