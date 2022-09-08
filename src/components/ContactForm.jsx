import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com'

const ContactForm = () => {
const [formInfo, setFormInfo] = useState(
  {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
)

const onChange = (event) => {
  setFormInfo(prev => ({
    ...prev,
    [event.target.id]: event.target.value
  }))
  console.log(formInfo)
}

const sendEmail = (e) => {
e.preventDefault()

if(e.target[0].value === '' || e.target[1].value === '' || e.target[2].value === '' || e.target[3].value === '') 
return toast.error('Please fill out all sections of the form', {
  position: toast.POSITION.TOP_RIGHT
})

    emailjs.sendForm('service_2a9fpxf', 'template_ltktbph', e.target, '93KL5tpAXDzsxtpnO')
    .then((result) => {
        toast.success('email sent!');
        setFormInfo(  {
          name: '',
          email: '',
          subject: '',
          message: ''
        })
    }, (error) => {
        console.log(error.text);
        toast.error("there was an error")
    });
    e.target.reset()
    
}
   

  return (
    <div className='formContainer'>
    <form  onSubmit={sendEmail}>
        <h6 className='emailTitle'>Send me a message</h6>
 
    <input placeholder='name' type="text" name="name" id='name' onChange={onChange} value={formInfo.name}/>
 
    <input placeholder='email' type="email" name="email" id='email'  onChange={onChange} value={formInfo.email}/>

    <input placeholder='subject' type="text" name="subject" id='subject'  onChange={onChange} value={formInfo.subject}/>
  
    <textarea placeholder='message' name="message" id='message'  onChange={onChange} value={formInfo.message}/>
    <input type="submit" value="Send Message" />
  </form>
  <ToastContainer />
  </div>
  )
}

export default ContactForm