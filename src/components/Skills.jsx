import React from 'react'

import CSS from '../assets/css.png';
import GITHUB from '../assets/github.png';
import HTML from '../assets/html.png';
import JAVASCRIPT from '../assets/javascript.png';
import NODE from '../assets/node.png';
import REACT from '../assets/react.png';

export const Skills = () => {
  return (
    <div name='skills' className="bg-[#9193c3]">
    
      {/* {container} */}
      <div className='max-w-[1000px] mx-auto p-14 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl text-[#474b59] font-bold inline border-b-4 border-[#0a819f]'>Skills</p>

          <p className='py-6 text-[#474b59]'>These are the technologies I have worked with</p>
        </div>


        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-10'>

          <div className='shadow-md shadow-[#040c16] hover:scale-150 duration-500'>
            <img className='w-20 mx-auto py-4'  src={HTML} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-150 duration-500'>
            <img className='w-20 mx-auto py-4'  src={CSS} alt="HTML icon" />
            <p className='my-4'>CSS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-150 duration-500'>
            <img className='w-20 mx-auto py-4'  src={JAVASCRIPT} alt="HTML icon" />
            <p className='my-4'>JAVASCRIPT</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-150 duration-500'>
            <img className='w-20 mx-auto py-4'  src={GITHUB} alt="HTML icon" />
            <p className='my-4'>GITHUB</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-150 duration-500'>
            <img className='w-20 mx-auto py-4'  src={NODE} alt="HTML icon" />
            <p className='my-4'>NODE</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-150 duration-500'>
            <img className='w-20 mx-auto py-4'  src={REACT} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills