import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className=' w-full h-screen bg-[#9193c3]'>

        {/* {container} */}
        <div className='max-w-[100px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#0a819f]'>Hello, my name is</p>
            <h1>Elena Sparshott</h1>
            <p>I'm a full stack delevoper working on responsive full stack web applications</p>
            <div>
                <button>View work <HiArrowNarrowRight /></button>
            </div>
        </div>
        

    </div>
  )
}

export default Home