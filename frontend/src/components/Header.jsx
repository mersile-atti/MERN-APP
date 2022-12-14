import React from 'react';
import {FaSignInAlt, FaSignLanguage, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>GoalSetter</Link>
        <ul>
          <li>
            <Link to='/login'>
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link to='/register'>
              <FaUser /> Register
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header