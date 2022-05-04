import React from 'react'

const About = () => {
  return (
  <div name ="about" className='w-full h-screen bg-[#9193c3] text-[#474b59]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 text-[#0a819f]'>About</p>
                    </div>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                  <p>Hi, I'm Ellie</p>
                </div>
                <div>
            </div>
        </div>

    </div>
  )
}

export default About;