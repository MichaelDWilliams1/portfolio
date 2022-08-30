import React from 'react'
import { motion } from 'framer-motion'

function Header(){

    return(
        <>
        <div className='headerContainer'>
            <p>Hi my name is,</p>
           <h1>Michael Williams.</h1>
            <h2>Frontend Web Developer.</h2>
            <p>I am a Navy Verteran 🇺🇸 turned Software Engineer 💻</p>
            <p>I have a passion for building web applications that</p>
            <p>make the user experience a pleasant one</p>
            <p>I love to learn, eat pizza 🍕, and drink entirely too much coffee ☕️</p>
        </div>
        <div className='buttonContainer'>
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>resume</motion.button>
            <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}  className='rightButton'>projects</motion.button>
        </div>
        </>
    )
}

export default Header