import React from 'react'
import Basket from '../assets/icons_assets/Basket.svg'
import { useState } from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <>
    <nav>
        <ul id='navbar'>
            <li><a href='/'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a>Menu</a></li>
            <li><a href='/success'>Reservations</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>
        </ul>
    </nav>

    <img src={Basket} id='hamburger-menu' alt='hamburger-menu' onClick={()=>setToggleMenu(!toggleMenu)}/>
    <div className={toggleMenu?'active':'hidden'}>
    <ul id='hidden-navbar'>
    <li><a href='/'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a>Menu</a></li>
            <li><a href='/success'>Reservations</a></li>
            <li><a>Order Online</a></li>
            <li><a>Login</a></li>
        </ul>
    </div>
    </>
    
  )
}

export default Navbar