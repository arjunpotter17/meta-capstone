import React from 'react'
import Logo from '../assets/icons_assets/Logo.svg'

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={Logo} alt='logo'/>
      </div>
      <p>Copyright 2023 Little Lemon</p>
    </footer>
  )
}

export default Footer