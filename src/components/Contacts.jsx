import React from 'react'

function Contacts() {
  return (
    <div name='contact' className='w-full h-screen bg-[#9193c3] flex justify-center items-center p-4'>
        {/* <form method="POST" çaction="https://getform.io/f/f293bd4d-e593-4a14-9d0b-4034dd5a4b01" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#0a819f] text-[#474b59]'>Contact</p>
                <p className='py-4 text-[#474b59]'>Use the form below to send me an email</p>
            </div>
            <input className='bg-[#dae0f3]' type="text" placeholder="Name" name="name"/>
            <input className='my-4 p-2 bg-[#dae0f3]' type="email" placeholder="Email" name="email"/>
            <textarea className='bg-[#dae0f3]' p-2 name="message" placeholder='Message' rows="10"/>
            <button className='text-white border-2  hover:bg-[#0a819f] hover:border-[#dae0f3] px-4 py-3 mx-auto my-8 flex items-center' >Submit</button>
        </form> */}
        <p>
          About Me
          I am a trainee software developer on the School of Code bootcamp, which is a 16 week intensive course to prepare for a career in software engineering. We are working in JavaScript on full-stack applications.
          Skills
          JavaScript, React, CSS, HTML5, Node.js, SQL, Postgres, GitHub, JEST and Cypress.
          Experience
          School of Code Bootcamp — November 2021 to present
          My first team project was a pomodoro application with daily blog posts to record learning progress. My month project is a fun app to learn maths and improve financial literacy.
          Community Pharmacist  — 2005-2022
          I am a qualified registered pharmacist. I have been the responsible pharmacist running community pharmacies since 2005.
          Counter assistant and Dispenser — 1998-2004
          Counter assistant and dispenser in community pharmacy.
          Education
          University of Portsmouth — Masters of Pharmacy 2:1 with Honours
          Masters of Pharmacy 2:1 with honours
          A Levels in Biology, Chemistry and Physics 

          References 
          Available on request
        </p>
    </div>
  )
}

export default Contacts