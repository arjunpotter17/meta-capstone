import React from 'react'
import lemon from '../assets/icons_assets/lemon-dessert.jpg'
import salad from '../assets/icons_assets/greek-salad.jpg'

const About = () => {
  return (
    <main className='about-container' id='about'>
        <div className='about-text'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a classic but lively environment. The restaurant features a locally sourced menu with daily specials.</p>
        
                
            
 
        
        </div>
        <div className='about-images'>
        <img src={lemon} alt='chef-image-2' id='hero-image'/>
    
        </div>
        </main>
  )
}

export default About