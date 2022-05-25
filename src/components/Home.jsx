import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#9193c3]'>

        {/* {container} */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#0a819f] text-4xl py-4'>Hello, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#0a819f] py-4'>Elena Sparshott</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#474b59] py-4'>I'm a full stack delevoper.</h2>
            <p className='text-[#474b59] py-4 max-w[600px]'>I am a full-stack developer working on responsive full stack web applications.</p>

            <div>
                <button className='bg-[#0a819f] text-[white] group border-2 px-6 my-2 py-3 flex items-center hover:bg-[#3b9fb8] hover:border[#46bad7]'><Link to="projects" smooth={true} duration={500}>
                    {/* Projects */}
                    View projects</Link>
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-4'/>
                    </span>
                </button>
            </div>
        </div>
        

    </div>
  )
}

export default Home