import React from 'react'
import { motion } from 'framer-motion'
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
       <section className='projectContainer'>
        <div className='projectsHolder'>
        <div className='projects'>
            <div id='One' onMouseEnter={(e)=> gifToggleOn(e)} onMouseLeave={(e)=> gifToggleOff(e)}   className='projectsGrid'>
                <img id='One' className='projectGif' src={isHovered.One ? countryGIF : countryScreenShot} />
            </div>
            <div className='projectsGrid'>
                <p>This app allows a user to search any country in the world and find some basic information on that country. 
                    The user can also toggle between light and dark mode.        
                </p>
                <div className='projectButtonsContainer'>
                <button className='projectButton'>Code</button><button className='projectButton'>Website</button>
                </div>
            
            </div>
        </div>
        <div  className='projects'>
            
            <div className='projectsGrid '><p className='leftText'>This is my version of the classic casino game, Blackjack. You start the game with 500 dollars and you can either get rich
                or go broke trying. 
                </p>
                <div className='projectButtonsContainer'>
                <button className='projectButton'>Code</button><button className='projectButton'>Website</button>
                </div></div>
            <div id='Two' onMouseEnter={(e)=> gifToggleOn(e)} onMouseLeave={(e)=> gifToggleOff(e)}  className='projectsGrid'>
                <img id='Two' className='projectGif' src={isHovered.Two ? blackJackGif : blackJackScreen}  />
            </div>
        </div>
        <div className='projects'>
            <div id='Three' onMouseEnter={(e)=> gifToggleOn(e)} onMouseLeave={(e)=> gifToggleOff(e)} className='projectsGrid'>
            <img id='Three' className='projectGif' src={isHovered.Three ? matchingGif : matchingScreen}  />
            </div>
            <div className='projectsGrid'><p>This is a simple math matching game where the user has one minute to try and matching
                the simple match problem to the correct answer.</p>
                <div className='projectButtonsContainer'>
                <button className='projectButton'>Code</button><button className='projectButton'>Website</button>
                </div></div>
        </div>
        </div>
       </section>
    )
}

export default Projects