import React from 'react'
import { motion } from 'framer-motion'
import { Link, animateScroll as scroll } from "react-scroll";
function Header(){

    return(
        <>
        <div className='headerContainer'>
            <p>Hi my name is,</p>
           <h1>Michael Williams.</h1>
            <h2>Frontend Web Developer.</h2>
            <p>Navy Verteran 🇺🇸 turned Software Engineer 💻</p>
            <p>I have a passion for building web applications that</p>
            <p>make the user experience a pleasant one.</p>
            <p>I love to learn new things, read, play videos games, and drink entirely too much coffee ☕️</p>
        </div>
        <div className='buttonContainer'>
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}><a className='leftButton' href='https://docs.google.com/document/d/e/2PACX-1vSNjbf1qD5eUANo-1k1_spymUyv9X-nmZnV8pA9VTlyI1m2_VQLiIRW2EvjojDDiHMvHowhW3ncMMxC/pub'>resume</a></motion.button>
            <Link spy={true} smooth={true} to='projectSection'><motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='rightButton'>projects</motion.button></Link>
        </div>
        </>
    )
}

export default Header