import React from 'react'
import "./MusicStyle.css"
import MusicPlaylist from '../Layout/MusicPlaylist'
import MusicSidebar from '../Layout/MusicSidebar'


const Music = () => {
  return (
    <div className='music'>

      <div className='music_text'>
        <h2 className='music_text_1'> Just feel the MUSIC </h2>
        <h2 className='music_text_2'> '' Music is the universal language of mankind '' </h2>
      </div>

      <div>
        <div className='musicwrapper'>

          <MusicSidebar />
          <MusicPlaylist />


        </div>

      </div>



    </div>



  )
}

export default Music
