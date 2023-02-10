import React from 'react'

const Navigation = () => {
  return (
    <nav className='absolute h-1/10 z-10 font-IBM text-2xl w-screen flex items-center justify-center'>
        <div className='w-11/12'>
        <ul className='flex justify-around w-96 text-white'>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
            <li></li>
        </ul>
        </div>
    </nav>
  )
}

export default Navigation