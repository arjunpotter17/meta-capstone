import React from 'react'
import heroimage from '../assets/icons_assets/restauranfood.jpg'
import {Routes, Route, Link} from 'react-router-dom'
import About from './About'


const Main = () => {

  return (
    <main className='hero-container'>
        <div className='hero-text'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        
        <Link to='/reserve'>
        <button>Reserve a Table</button>
        </Link>
                
            
 
        
        </div>
        <div className='hero-image'>
        <img src={heroimage} alt='restaurant-food-img' id='hero-image'/>
        </div>
        
        </main>
  )
}

export default Main