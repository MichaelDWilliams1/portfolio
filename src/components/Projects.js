import React from 'react'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
import countryGIF from '../assets/countryProject.gif'
import countryScreenShot from '../assets/countryScreen.png'
import blackJackGif from '../assets/blackjackGif.gif'
import blackJackScreen from '../assets/blackjackScreen.png'
import matchingGif from '../assets/matching.gif'
import matchingScreen from '../assets/matchingScreen.png'

import { useState } from 'react'

function Projects(){

    const [isHovered, setIsHovered] = useState(
        [
            {
        One: false
            },
            {
        Two: false
            },
            {
        Three: false
            }
        ]
    )

    const gifToggleOn= (e) => {
        console.log(e.target.id)
       setIsHovered(prev => ({...prev, [e.target.id]: true}))
    }
    const gifToggleOff= (e) => {
        console.log(e.target.id)
       setIsHovered(prev => ({...prev, [e.target.id]: false}))
    }
    console.log(isHovered)

    return(
       <section id='projectSection' className='projectContainer'>
        <h2 className='projectContainerTitle'>Projects</h2>
        <div className='projectsHolder'>
        <div className='projects'>
            <div id='One' onMouseEnter={(e)=> gifToggleOn(e)} onMouseLeave={(e)=> gifToggleOff(e)}   className='projectsGrid'>
                <img id='One' className='projectGif' src={isHovered.One ? countryGIF : countryScreenShot} />
            </div>
            <div className='projectsGrid'>
                <p><h4 className='projectDescriptionTitle'>Where in the world?</h4>This app allows a user to search any country in the world and find some basic information on that country. 
                   This app was built using ReactJS and Tailwindcss       
                </p>
                <div className='projectButtonsContainer'>
                <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href='https://github.com/MichaelDWilliams1/rest-countries-api' className='projectButton'>Code</motion.a><motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href='https://phenomenal-donut-0fdd1c.netlify.app/' className='projectButton'>Website</motion.a>
                </div>
            
            </div>
        </div>
        <div  className='projects'>
            
            <div className='projectsGrid '><p className='leftText'><h4 className='projectDescriptionTitle'>Blackjack</h4>This is my version of the classic casino game, Blackjack. You start the game with 500 dollars and you can either get rich
                or go broke trying. This game was built using HTML, CSS, and Javascript 
                </p>
                <div className='projectButtonsContainer'>
                <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href='https://github.com/MichaelDWilliams1/Blackjack' className='projectButton'>Code</motion.a><motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} href='https://wonderful-blackwell-74b22b.netlify.app/' className='projectButton'>Website</motion.a>
                </div></div>
            <div id='Two' onMouseEnter={(e)=> gifToggleOn(e)} onMouseLeave={(e)=> gifToggleOff(e)}  className='projectsGrid'>
                <img id='Two' className='projectGif' src={isHovered.Two ? blackJackGif : blackJackScreen}  />
            </div>
        </div>
        <div className='projects'>
            <div id='Three' onMouseEnter={(e)=> gifToggleOn(e)} onMouseLeave={(e)=> gifToggleOff(e)} className='projectsGrid'>
            <img id='Three' className='projectGif' src={isHovered.Three ? matchingGif : matchingScreen}  />
            </div>
            <div className='projectsGrid'><p><h4 className='projectDescriptionTitle'>Match the math</h4>This is a simple math matching game where the user has one minute to try and matching
                the simple math problem to the correct answer. This game was built using HTML, CSS, Javascript</p>
                <div className='projectButtonsContainer'>
                <motion.a href='https://github.com/MichaelDWilliams1/Simple-Math-Matching-Game' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='projectButton'>Code</motion.a><motion.a href='https://unruffled-pike-faa01a.netlify.app/' whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className='projectButton'>Website</motion.a>
                </div></div>
        </div>
        </div>
       </section>
    )
}

export default Projects