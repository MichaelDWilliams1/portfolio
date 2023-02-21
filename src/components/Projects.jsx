import React from 'react'
import audiophile from '../assets/audiophile.png'
import country from '../assets/countryAPI.png'

const Projects = () => {
  return (
    <section className='h-auto lg:h-screen bg-blue-500 justify-center pb-16'>
        <div className='h-auto lg:h-full flex flex-col items-center justify-center font-IBM'>
        <h3 className='text-5xl mt-16 text-white-100 mb-16 lg:mb-0'>Projects</h3>
        <div className='md:w-700 lg:w-1000 xl:w-1200 lg:h-full flex flex-col lg:flex-row justify-center items-center space-y-10 lg:space-y-0 lg:space-x-10'>
            <div className='2xsm:w-72 xsm:w-96 md:w-auto lg:h-4/5 flex flex-col items-center justify-center bg-white-100 shadow-md rounded-md'>
                <div className='w-full md:h-1/2'><img className='h-full rounded-t-md' src={audiophile} /></div>
                <div className='w-full h-48 md:h-60 lg:h-1/2 flex flex-col justify-evenly lg:justify-around items-center'>
                    <p className='text-xl md:text-2xl w-96 text-center hidden xsm:inline'>Audiophile E-commerce</p>
                    <p className='text-xl md:text-2xl w-96 text-center 2xsm:inline xsm:hidden'>Audiophile</p>
                    <p className='text-sm 2xsm:text-xs md:text-base pl-2 md:pl-0 w-11/12 md:w-4/5 lg:w-96'>This is a fully functional E-commerce website. Users can login and out of their account, add and remove items from their cart, and make purchases.</p>
                    <div className='flex justify-around w-4/5 lg:w-96 space-x-10'>
                        <button className='w-1/2 md:w-1/3 lg:w-1/2 h-10 md:h-14 text-xl bg-blue-500 text-white-100 rounded-md'>Github</button>
                        <button className='w-1/2 md:w-1/3 lg:w-1/2 h-10 md:h-14 text-xl bg-blue-500 text-white-100 rounded-md'>Website</button>
                    </div>
                </div>

            </div>
            <div className='2xsm:w-72 xsm:w-96 md:w-auto lg:h-4/5 flex flex-col items-center justify-center bg-white-100 shadow-md rounded-md'>
            <div className='w-full md:h-1/2'><img className='h-full rounded-t-md' src={country} /></div>
                <div className='w-full h-48 md:h-60 lg:h-1/2 flex flex-col justify-evenly lg:justify-around items-center'>
                <p className='text-xl md:text-2xl w-96 text-center'>Countries API</p>
                    <p className='xsm:text-sm 2xsm:text-xs md:text-base pl-2 md:pl-0 w-11/12 md:w-4/5 lg:w-96'>This website allows users to search any country in the world to find out some basic information. Switch from light to darkmode seemlessly</p>
                    <div className='flex justify-around w-4/5 lg:w-96 space-x-10'>
                        <button className='w-1/2 md:w-1/3 lg:w-1/2 h-10 md:h-14 text-xl bg-blue-500 text-white-100 rounded-md'>Github</button>
                        <button className='w-1/2 md:w-1/3 lg:w-1/2 h-10 md:h-14 text-xl bg-blue-500 text-white-100 rounded-md'>Website</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Projects