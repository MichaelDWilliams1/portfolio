

import React from 'react'
import CloudsBG from './components/CloudsBG'
import Navigation from './components/Navigation'
import arrowDown from './assets/arrowDown.svg'
import AnimateLetters from './hooks/AnimateLetters'

const Header = () => {
    let aboutMeArr = ['Full-stack Web Developer', 'Coffee connoisseur', 'Perpetual learner', 'Lover of all Life', 'Gaming savant']
  return (
    <>
    <header className='headerBG h-screen text-white font-IBM flex flex-col justify-center items-center relative'>
        <article className='xsm:space-y-10 2xsm:space-y-5 md:space-y-20 w-11/12 md:w-4/5 lg:w-auto lg:ml-10 lg:mr-10'>
        <p className='xsm:text-4xl 2xsm:text-3xl md:text-5xl lg:text-6xl font-semibold z-10'>Hi my name is,</p>
        <h1 className='xsm:text-7xl 2xsm:text-5xl md:text-6xl lg:text-8xl  font-extrabold z-10'>Michael Williams</h1>
        <p className='xsm:text-4xl 2xsm:text-3xl md:text-5xl lg:text-6xl  font-semibold z-10'><AnimateLetters letters={aboutMeArr.map(phrase => phrase)}/></p>
        </article>
        <CloudsBG />
        <img className='xsm:h-20 2xsm:h-12 md:h-20 absolute bottom-10 animate-bounce hover:animate-none' src={arrowDown}></img>
    </header>
   
    </>
  )
}

export default Header
