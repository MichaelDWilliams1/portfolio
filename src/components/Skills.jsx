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
    <section className='h-screen'>
      <div className='h-full w-10/11 lg:w-3/5 m-auto'>
        <ul className='grid grid-cols-3 grid-rows-3 h-full lg:text-3xl font-IBM mt-10 mb-10 border-2'>
          <li className='flex flex-col items-center justify-around'><img className='h-3/4' src={js} /><p>Javascript</p></li>
          <li className='flex flex-col items-center justify-around'><img className='h-3/4' src={reactSVG} /><p>React</p></li>
          <li className='flex flex-col items-center justify-around'><img className='h-3/4' src={express} /><p>Javascript</p></li>
          <li className='flex flex-col items-center justify-around'><img className='h-3/4' src={mongo} /><p>Javascript</p></li>
          <li className='flex flex-col items-center justify-around'><img className='h-3/4' src={html} /><p>Javascript</p></li>
          <li className='flex flex-col items-center justify-around'><img className='h-3/4' src={css} /><p>Javascript</p></li>
          <li className='flex flex-col items-center justify-around'><img className='h-3/4' src={jest} /><p>Javascript</p></li>
          <li className='flex flex-col items-center justify-around'><img className='h-3/4' src={tailwind} /><p>Javascript</p></li>
          <li className='flex flex-col items-center justify-around'><img className='h-3/4' src={bootstrap} /><p>Javascript</p></li>
        </ul>
      </div>
 
    </section>
  )
}

export default skills