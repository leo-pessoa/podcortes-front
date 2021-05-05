import React, { useState } from 'react'
import play from '../../assets/play.svg'
import pause from '../../assets/pause.svg'
import thumb from '../../assets/thumbnail.jpg'
import './style.scss'

export default function Thumbnail() {
  const [isPlayed, setisPlayed] = useState(false)
  return (
    <div className='thumbnail'>
      <img className='thumb-image' src={thumb} alt='' />
      {isPlayed ? (
        <div>
          <img className='play-icon' src={pause} alt='' />
        </div>
      ) : (
        <div>
          <img className='play-icon' src={play} alt='' />
        </div>
      )}
    </div>
  )
}
