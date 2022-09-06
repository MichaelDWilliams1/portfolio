import React from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {

const sendEmail = (e) => {
e.preventDefault()

    emailjs.sendForm('service_2a9fpxf', 'template_ltktbph', e.target, '93KL5tpAXDzsxtpnO')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
}
   

  return (
    <div className='formContainer'>
    <form  onSubmit={sendEmail}>
        <h6 className='emailTitle'>Send me a message</h6>
 
    <input placeholder='name' type="text" name="name" />
 
    <input placeholder='email' type="email" name="email" />

    <input placeholder='subject' type="text" name="subject" />
  
    <textarea placeholder='message' name="message" />
    <input type="submit" value="Send Message" />
  </form>
  </div>
  )
}

export default ContactForm