import React from 'react'
import reactSVG from '../assets/react.svg'
import bootstrap from '../assets/bootstrap.svg'
import css from '../assets/css.svg'
import express from '../assets/express.svg'
import html from '../assets/html.svg'
import jest from '../assets/jest.svg'
import mongo from '../assets/mongo.svg'
import tailwind from '../assets/tailwind.svg'
import js from '../assets/js.svg'




const skills = () => {
  return (
    <section className='h-screen bg-white-100'>
      <article id='skillSection'  className='h-full w-10/11 lg:w-3/5 m-auto flex flex-col items-center justify-center font-IBM'>
      <h2 className='text-5xl'>Skills</h2>
        <ul className='grid  grid-rows-3 w-full h-3/4 md:text-3xl lg:text-3xl mt-10 mb-10 grid-flow-col'>
          <li className='flex flex-col items-center justify-around'><img className='h-1/2' src={js} /><p>Javascript</p></li>
          <li className='flex flex-col items-center justify-around'><img className='h-1/2' src={reactSVG} /><p>React</p></li>
          <li className='flex flex-col items-center justify-around'><img className='h-1/2' src={express} /><p>Express</p></li>
          <li className='flex flex-col items-center justify-around'><img className='h-1/2' src={mongo} /><p>MongoDB</p></li>
          <li className='flex flex-col items-center justify-around'><img className='h-1/2' src={html} /><p>HTML</p></li>
          <li className='flex flex-col items-center justify-around'><img className='h-1/2' src={css} /><p>CSS</p></li>
          <li className='flex flex-col items-center justify-around'><img className='h-1/2' src={jest} /><p>Jest</p></li>
          <li className='flex flex-col items-center justify-around'><img className='h-1/2' src={tailwind} /><p>Tailwindcss</p></li>
          <li className='flex flex-col items-center justify-around'><img className='h-1/2' src={bootstrap} /><p>Bootstrap</p></li>
        </ul>
      </article>
 
    </section>
  )
}

export default skills