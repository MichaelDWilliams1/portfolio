

import React from 'react'
import CloudsBG from './components/CloudsBG'
import Navigation from './components/Navigation'
import arrowDown from './assets/arrowDown.svg'
const Header = () => {
  return (
    <>
    <header className='headerBG h-screen text-white font-IBM flex flex-col justify-center items-center relative'>
        <article className='space-y-20 ml-10 mr-10'>
        <p className='text-6xl font-semibold z-10'>Hi my Name is,</p>
        <h1 className='text-9xl font-extrabold z-10'>Michael Williams</h1>
        <p className='text-6xl font-semibold z-10'>Full-stack Web Developer</p>
        </article>
        <CloudsBG />
        <img className='h-40 absolute bottom-1 animate-bounce hover:animate-none' src={arrowDown}></img>
    </header>
   
    </>
  )
}

export default Header
