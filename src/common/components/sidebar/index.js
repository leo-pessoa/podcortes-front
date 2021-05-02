import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import logo from '../../assets/logo.svg'
import home from '../../assets/home.svg'
import mic from '../../assets/mic.svg'
import users from '../../assets/users.svg'

export default function SideBar() {
  const [item, setItem] = useState()
  return (
    <nav className={'sidebar'}>
      <ul>
        <li>
          <Link to='/'>
            <div className='side-item logo'>
              <img className='item-image' src={logo} alt='' />
            </div>
          </Link>
        </li>
        <li>
          <Link to='/'>
            <div className='side-item'>
              <img className='item-image' src={home} alt='' />
              <span className='item-text'>Home</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/following'>
            <div className='side-item'>
              <img className='item-image' src={users} alt='' />
              <span className='item-text'>Following</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to='/podcasts'>
            <div className='side-item'>
              <img className='item-image' src={mic} alt='' />
              <span className='item-text'>Podcasts</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
