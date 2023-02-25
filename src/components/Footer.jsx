import React from 'react'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import { Link } from 'react-router-dom'
const footer = () => {
  return (
    <footer className='headerBG h-40'>
        <article className='flex flex-col border-2 h-full items-center justify-center space-y-5'>
            <div className='flex space-x-4'>
            <Link target='_blank' to='https://www.linkedin.com/in/michael-williams-43960722b/'><img className='h-10' src={linkedin} /></Link>
            <Link target='_blank' to='https://github.com/MichaelDWilliams1'><img className='h-10' src={github} /></Link>
            </div>
            <p className='text-white-100 font-IBM'>Michael Williams ©2023</p>
        </article>
    </footer>
  )
}

export default footer