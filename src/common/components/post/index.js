import React, { useState } from 'react'
import './style.scss'
import neymar from '../../assets/neymar.jpg'
import PlayerContainer from '../playerContainer'

export default function Post() {
  const [user, setUser] = useState('Ricardo')
  return (
    <div className='post'>
      <div className='post-header'>
        <img className='post-user-image' src={neymar} alt='' />
        <div className='post-content'>
          <p className='post-user'>
            {user} <span className='said'>said</span>{' '}
          </p>
          <p className='post-text'>
            Muito merda esse vídeo aqui. Sem condições de ver. Mas, de qualquer
            forma, toma meu like AHHHHHHHHHHHHHHHHHHHHH
          </p>
        </div>
      </div>
      <div className='player-box'>
        <PlayerContainer />
      </div>
    </div>
  )
}
