import React, { useState } from 'react'
import './style.scss'
import neymar from '../../assets/neymar.jpg'
import Player from '../player'

export default function Post() {
  const [user, setUser] = useState('Ricardo')
  return (
    <div className='post'>
      <div className='post-header'>
        <img className='post-user-image' src={neymar} alt='' />
        <div className='post-text'>
          <p className='post-user'>
            {user} <span className='said'>said</span>{' '}
          </p>
          <p className='post-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A expedita
            rem officiis dicta cumque deleniti quisquam velit nisi doloribus!
          </p>
        </div>
      </div>
      <div className='player-box'>
        <div className='player'></div>
        <Player />
      </div>
    </div>
  )
}
