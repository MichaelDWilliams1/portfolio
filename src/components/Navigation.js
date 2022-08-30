import React from 'react'
import { render } from 'react-dom'
import { motion } from  'framer-motion'


function Navigation(){


    return(
        <nav>
            <ul>
             <motion.a  whileHover={{ scale: 1.2 }} 
             whileTap={{ scale: 0.8 }} 
             href='https://github.com/MichaelDWilliams1'>
                <li>
                    <i className="ri-github-line logo">
    </i>
    </li>
    </motion.a>
    <motion.a whileHover={{ scale: 1.2 }} 
    whileTap={{ scale: 0.8 }}
     href='https://www.linkedin.com/in/michael-williams-43960722b/'>
             <li>
                <i class="ri-linkedin-box-line logo"></i>
                </li>
                </motion.a>
            </ul>
        </nav>
    )
}

export default Navigation