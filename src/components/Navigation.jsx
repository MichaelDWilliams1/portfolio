import React from 'react'
import { useState, useEffect } from 'react'
import burgerMenu from '../assets/burgerMenu.svg'
import blueBurgerMenu from '../assets/blueBurgerMenu.svg'

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
    <nav className='absolute top-0 h-full md:h-1/10 z-10 font-IBM text-2xl w-screen md:flex md:items-center md:justify-center'>
        <img onClick={handleClick} className={`h-20 z-50 absolute flex md:hidden`}src={toggleMenu ? blueBurgerMenu : burgerMenu} />
        <div className={`${toggleMenu ? 'flex' : 'hidden'} md:flex md:bg-transparent bg-white w-full h-full md:w-11/12`}>   
        <ul className={`flex flex-col md:flex-row md:justify-center md:items-center justify-around w-full h-full  md:w-96 md:text-white text-5xl md:text-2xl`}>
            <li className='w-full h-1/5 flex justify-center items-center shadow-sm md:shadow-none hover:bg-sky-400'>Projects</li>
            <li className='w-full h-1/5 flex justify-center items-center shadow-sm md:shadow-none hover:bg-sky-400'>About</li>
            <li className='w-full h-1/5 flex justify-center items-center shadow-sm md:shadow-none hover:bg-sky-400'>Contact</li>
            <li></li>
        </ul>
        </div>
    </nav>
  )
}

export default Navigation