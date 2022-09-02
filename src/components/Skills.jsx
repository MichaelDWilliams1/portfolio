import React from 'react'

const Skills = () => {
  return (
   <section className='skillsContainer'>
    <h2 className='projectContainerTitle'>Skills</h2>
    <div  className='iconContainer'>
        <div className='iconFlex'><i class="fa-brands fa-node"></i><p>NodeJS</p></div>
        <div className='iconFlex'><i class="fa-brands fa-square-js"></i><p>JavaScript</p></div>
        <div className='iconFlex'><i class="fa-brands fa-css3-alt"></i><p>CSS3</p></div>
        <div className='iconFlex'><i class="fa-brands fa-html5"></i><p>HTML5</p></div>
        <div className='iconFlex'><i class="fa-brands fa-react"></i><p>ReactJS</p></div>
    </div>

   </section>
  )
}

export default Skills