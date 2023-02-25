import React from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import arrowUp from '../assets/arrowUp.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
const [isLoading, setIsLoading] = useState(false)

const sendEmail = (e) => {
e.preventDefault()

    emailjs.sendForm('service_2a9fpxf', 'template_ltktbph', e.target, '93KL5tpAXDzsxtpnO')
    .then((result) => {
        toast.success('Your message was successfully sent', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }, (error) => {
        toast.warn('Uh oh something went wrong', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    });
    e.target.reset()
}


  return (
    <section id='contactSection' className='md:h-full bg-white-100 pb-16 relative'>
        <h6 className='emailTitle text-5xl md:text-6xl text-center pt-16 mb-16 font-IBM'>Contact Me</h6>
    <form className='flex flex-col m-auto w-11/12 lg:w-800 h-500 md:h-3/4 justify-around rounded-lg items-center border-2 font-IBM  bg-gradient-to-l from-blue-500 to bg-blue-400'  onSubmit={sendEmail}>
    <input className='w-11/12 h-16 bg-white-100 pl-4' required={true} placeholder='name' type="text" name="name" />
    <input className='w-11/12 h-16 bg-white-100 pl-4' required={true} placeholder='email' type="email" name="email" />
    <input className='w-11/12 h-16 bg-white-100 pl-4' required={true} placeholder='subject' type="text" name="subject" />
    <textarea className='w-11/12 h-16 bg-white-100 pl-4' required={true} placeholder='message' name="message" />
    <input className='text-white-100 w-1/2 border-2 h-14 text-2xl hover:cursor-pointer' type="submit" value="Submit" />
  </form>
  <ToastContainer />
  </section>
  )
}

export default Contact