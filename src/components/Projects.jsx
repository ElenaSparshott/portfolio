import React from 'react'

const Projects = () => {
  return (
    <div name="projects" className='w-full text-[#474b59] bg-[#9193c3] md:h-screen '>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-6xl font-bold inline border-b-4 text-[#474b59] border-[#0a819f]'>Projects</p>
                <p className='py-6 text-3xl'>Some of my recent projects</p>
            </div>
        
            {/* {set the grid} */}           
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-10'>

                {/* card item */}
                <div className='shasow-lg shadow-[#065a6f] group container rounded-md flex justify-center items-end mx-auto content-div'>                 
                    <div>
                         <a href='https://scratch.mit.edu/projects/576151242'>
                                <button className='text-center font-bold rounded-lg px-4 py-3 m-2 bg-[#0a819f] text-[white]'>   Bats in Space. (Scratch)</button>
                        </a>                        
                    </div>
                </div>


                <div className='shasow-lg shadow-[#065a6f] group container rounded-md flex justify-center items-end mx-auto content-div'> 
                    <div>
                         <a href="https://jellly.netlify.app/">
                                <button className='text-center font-bold rounded-lg px-4 py-3 m-2 bg-[#0a819f] text-[white]'>Jellly Maths. (React)</button>
                        </a>                        
                    </div>
                </div>

                <div className='shasow-lg shadow-[#065a6f] group container rounded-md flex justify-center items-end mx-auto content-div'> 
                    <div>
                         <a href="https://github.com/ElenaSparshott/pomodoro">
                                <button className='text-center font-bold rounded-lg px-4 py-3 m-2 bg-[#0a819f] text-[white]'>Pomodoro (JS).</button>
                        </a>                        
                    </div>
                </div>

                <div className='shasow-lg shadow-[#065a6f] group container rounded-md flex justify-center items-end mx-auto content-div'> 
                    <div>
                         <a href="https://github.com/ElenaSparshott/react-rock-paper-scissors">
                                <button className='text-center font-bold rounded-lg px-4 py-3 m-2 bg-[#0a819f] text-[white]'>Rock Paper Scissors.(React)</button>
                        </a>                        
                    </div>
                </div>

                <div className='shasow-lg shadow-[#065a6f] group container rounded-md flex justify-center items-end mx-auto content-div'> 
                    <div>
                         <a href="https://github.com/ElenaSparshott/QuizGame">
                                <button className='text-center font-bold rounded-lg px-4 py-3 m-2 bg-[#0a819f] text-[white]'>Quiz Game. (JS)</button>
                        </a>                        
                    </div>
                </div>

                <div className='shasow-lg shadow-[#065a6f] group container rounded-md flex justify-center items-end mx-auto content-div'> 
                    <div>
                         <a href="https://github.com/SchoolOfCode/w1d5_rock-paper-scissors-hackathon-group32ellie-and-fatou">
                                <button className='text-center font-bold rounded-lg px-4 py-3 m-2 bg-[#0a819f] text-[white]'>Rock Paper Scissors. (JS)</button>
                        </a>                        
                    </div>
                </div>

                 <div className='shasow-lg shadow-[#065a6f] group container rounded-md flex justify-center items-end mx-auto content-div'> 
                    <div>
                         <a href="https://github.com/ElenaSparshott/superheroes">
                                <button className='text-center font-bold rounded-lg px-4 py-3 m-2 bg-[#0a819f] text-[white]'> Superheros. (JS)</button>
                        </a>                        
                    </div>
                </div>

                 <div className='shasow-lg shadow-[#065a6f] group container rounded-md flex justify-center items-end mx-auto content-div'> 
                    <div>
                         <a href="https://github.com/ElenaSparshott/I-am-rich">
                                <button className='text-center font-bold rounded-lg px-4 py-3 m-2 bg-[#0a819f] text-[white]'> I am rich. (Flutter)</button>
                        </a>                        
                    </div>
                </div>

                 <div className='shasow-lg shadow-[#065a6f] group container rounded-md flex justify-center items-end mx-auto content-div'> 
                    <div>
                         <a href="https://github.com/ElenaSparshott/pythonTodoApp.git">
                                <button className='text-center font-bold rounded-lg px-4 py-3 m-2 bg-[#0a819f] text-[white]'>Todo App.(Python)</button>
                        </a>                        
                    </div>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Projects