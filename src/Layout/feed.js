import React from 'react'
import './feedstyle.css'
import Post from './post'
import Share from './share'



const Feed = () => {
  return (
    <div className='feed'>
      <div className='feedwrapper'>
        <Share />
        <Post/>
      </div>

    </div>
  )
}

export default Feed
