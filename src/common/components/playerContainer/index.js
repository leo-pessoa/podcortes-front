import React, { useState } from 'react'
import './style.scss'
import neymar from '../../assets/neymar.jpg'
import Player from '../player'
import Thumbnail from '../thumbnail'

export default function PlayerContainer() {
  const [podcast, setPodcast] = useState('Ricardo')
  const [episode, setEpisode] = useState('Ricardo')
  const [trecho, setTrecho] = useState('00:12:30 - 00:12:43')
  return (
    <div className='player-container'>
      <div className='thumbnail'>
        <Thumbnail />
      </div>
      <div className='player'>
        <Player />
      </div>
    </div>
  )
}
