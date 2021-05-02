import React from 'react'

export default function Post() {
  return (
    <div className='post'>
      <div className='player-container'>
        <div className='post'>
          {IsPlayed ? <EditRecipe food={food} /> : <ShowRecipe food={food} />}
        </div>
      </div>
    </div>
  )
}
