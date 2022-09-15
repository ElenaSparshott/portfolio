import React from 'react'

const About = () => {
  return (
  <div name ="about" className='w-full h-screen bg-[#9193c3] text-[#474b59]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-left pb-8 pl-4'>
                        <p className='text-6xl font-bold inline border-b-4 border-[#0a819f] text-[#0a819f]'>
                        About
                        </p>
                    </div>

                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-left text-6xl font-bold'>               
                  <p>Hi, I'm Ellie</p>
                </div>                  
                <div className='sm:text-left text-2xl font-bold'>
                <br></br>
                <br></br>
                  <h1>I am an alumni of the School of Code.
                  I focus on JavaScript building full-stack applications. I have projects written in javaScript and react, dart with flutter and python with flask. The bootcamp taught us problem solving techniques and we worked in teams with agile workflows to build software application.</h1>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;