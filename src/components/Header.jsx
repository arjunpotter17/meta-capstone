import React from 'react'
import logo from '../assets/icons_assets/Logo.svg'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <Link to='/'>
      <img src={logo} alt='logo'/>
      </Link>
        
        <Navbar/>
    </header>
  )
}

export default Header