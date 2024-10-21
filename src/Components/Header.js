import React from 'react'
import './Header.css'
import userlogo from '../Assets/Vector (1).svg'

const Header = () => {
  return (
    <div className='header'>
        <div className='user'>
            <div className='user-logo'><img src={userlogo} alt='userlogo'></img></div>
            <div className='user-name'>Hello, Sumit</div>
        </div>
      
    </div>
  )
}

export default Header
