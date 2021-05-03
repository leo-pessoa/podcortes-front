import React from 'react'
import './style.scss'
import users from '../../assets/users.svg'
import Player from '../player'

export default function Post() {
  return (
    <div className='post'>
      <div className='post-header'>
        <img src={users} alt='' />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A expedita
          rem officiis dicta cumque deleniti quisquam velit nisi doloribus!
        </p>
      </div>
      <div className='player-box'>
        <div className='player'></div>
        <Player />
      </div>
    </div>
  )
}
