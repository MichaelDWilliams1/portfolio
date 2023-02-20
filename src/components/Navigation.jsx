import React from 'react'
import { useState, useEffect } from 'react'
import burgerMenu from '../assets/burgerMenu.svg'
import blueBurgerMenu from '../assets/blueBurgerMenu.svg'
import linkedin from '../assets/linkedin.svg'
import github from '../assets/github.svg'
import { Link as Scroll } from "react-scroll";
import { Link } from 'react-router-dom'

const Navigation = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    const [canScroll, setCanScroll] = useState(false)
    useEffect(() => {
        const toggleScroll = () => {
       if(toggleMenu){
         document.body.style.overflow = 'hidden'
       }else{
         document.body.style.overflow = 'unset'
       }
        }
       
        toggleScroll()
       
         }, [toggleMenu])

    const handleClick = () => {
        setToggleMenu(prev => !prev)
    }

  return (
    <nav className='absolute md:flex top-0 h-screen md:h-1/10 z-10 font-IBM text-2xl w-screen md:items-center md:justify-center'>
        <img onClick={handleClick} className={`h-16 z-50 absolute flex md:hidden`}src={toggleMenu ? blueBurgerMenu : burgerMenu} />
        <div className={`${toggleMenu ? 'flex' : 'hidden'} md:flex md:bg-transparent bg-white-100 w-full h-full md:w-11/12 text-white-100`}>   
        <ul className={`flex flex-col md:flex-row md:justify-center md:items-center justify-around w-full h-full md:w-auto md:space-x-5 text-sky-400 md:text-white-100 text-5xl md:text-2xl`}>
            <Scroll className='h-1/4' spy={true} smooth={true} to='skillSection'><li className='w-full h-full flex justify-center items-center shadow-sm md:shadow-none hover:bg-sky-400 hover:text-white-100'>Skills</li></Scroll>
            <li className='w-full h-1/4 flex justify-center items-center shadow-sm md:shadow-none  hover:bg-sky-400 hover:text-white-100'>Projects</li>
            <li className='w-full h-1/4 flex justify-center items-center shadow-sm md:shadow-none  hover:bg-sky-400 hover:text-white-100'>About</li>
            <li className='w-full h-1/4 flex justify-center items-center shadow-sm md:shadow-none  hover:bg-sky-400 hover:text-white-100'>Contact</li>
        </ul>
        <section className='hidden w-full md:flex justify-end items-center space-x-10'>
        <div className=''> <Link target='_blank' to='https://www.linkedin.com/in/michael-williams-43960722b/'><img alt='Linked in link' className='h-12' src={linkedin} /></Link></div>
        <div> <Link target='_blank' to='https://github.com/MichaelDWilliams1'><img alt='github link' className='h-12' src={github} /></Link></div>
        
       </section>
        </div>
        <section className='flex mt-3 h-auto md:hidden w-11/12 justify-end items-center space-x-4'>
        <div className=''> <Link target='_blank' to='https://www.linkedin.com/in/michael-williams-43960722b/'><img alt='Linked in link' className='h-10 md:h-12' src={linkedin} /></Link></div>
        <div> <Link target='_blank' to='https://github.com/MichaelDWilliams1'><img alt='github link' className='h-10 md:h-12 ' src={github} /></Link></div>
        
       </section>
    </nav>
  )
}

export default Navigation