import React from 'react'

const Skills = () => {
  return (
   <section className='skillsContainer'>
    <h2 className='skillsTitle projectContainerTitle'>Skills</h2>
    <div  className='iconContainer'>
        <div className='iconFlex'><i class="fa-brands fa-node"></i><p className='iconText'>NodeJS</p></div>
        <div className='iconFlex'><i class="fa-brands fa-square-js"></i><p className='iconText'>JavaScript</p></div>
        <div className='iconFlex'><i class="fa-brands fa-css3-alt"></i><p className='iconText'>CSS3</p></div>
        <div className='iconFlex'><i class="fa-brands fa-html5"></i><p className='iconText'>HTML5</p></div>
        <div className='iconFlex'><i class="fa-brands fa-react"></i><p className='iconText'>ReactJS</p></div>
    </div>

   </section>
  )
}

export default Skills