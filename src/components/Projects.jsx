import React from 'react'
import audiophile from '../assets/audiophile.png'
import country from '../assets/countryAPI.png'

const Projects = () => {
  return (
    <section className='h-screen bg-blue-500 justify-center'>
        <div className='h-full w-1000 lg:w-1000 m-auto flex flex-col items-center justify-center font-IBM border-2'>
        <h3 className='text-5xl mt-16 text-white-100'>Projects</h3>
        <div className='w-full h-full flex justify-center items-center space-x-10'>
            <div className='w-auto w-500 h-3/4 flex flex-col items-center break-words justify-center bg-white-100'>
                <div className='w-full h-1/2'><img className='h-full' src={audiophile} /></div>
                <div className='w-full h-1/2 flex flex-col flex-wrap justify-around items-center'>
                    <p className='text-2xl w-96 text-center'>Audiophile E-commerce</p>
                    <p className='w-96'>This is a fully functional E-commerce website. Users can login and out of their account, add and remove items from their cart, and make purchases.</p>
                    <div className='flex w-96 space-x-10'>
                        <button className='w-1/2 h-14 text-xl bg-blue-500 text-white-100'>Github</button>
                        <button className='w-1/2 h-14 text-xl bg-blue-500 text-white-100'>Website</button>
                    </div>
                </div>

            </div>
            <div className='w-500 h-3/4 flex flex-col items-center justify-center bg-white-100'>
            <div className='w-full h-1/2'><img className='h-full' src={country} /></div>
                <div className='w-full h-1/2 flex flex-col flex-wrap justify-around items-center'>
                <p className='text-2xl w-96 text-center'>Countries API</p>
                    <p className='w-96'>This website allows users to search any country in the world to find out some basic information. Switch from light to darkmode seemlessly</p>
                    <div className='flex w-96 space-x-10'>
                        <button className='w-1/2 h-14 text-xl bg-blue-500 text-white-100'>Github</button>
                        <button className='w-1/2 h-14 text-xl bg-blue-500 text-white-100'>Website</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Projects