import { React, useEffect } from 'react'
import './style.scss'
import Post from '../../common/components/post'
import Loader from '../../common/components/loader'
export default function Home() {
  return (
    <div className='page'>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <div className='page-loader'>
        <Loader />
      </div>
    </div>
  )
}
