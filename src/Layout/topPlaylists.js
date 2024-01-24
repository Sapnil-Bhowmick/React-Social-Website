import React from 'react'
import "./topPlaylistStyle.css"

import moodimg from '../Assets/Images/moodimg.jpg'
import greenplay from '../Assets/Images/greenplay.png'

const TopPlaylists = () => {
  return (
    <div className='topplaylist'>
      <div className='topplaylist_wrapper'>

        <div className='topplaylist_text'>
          Top Songs for you
        </div>

        <div className='songcard_div'>


          <div className='song_card'>
            <div>
              <img src={moodimg} className='song_img' />
            </div>

            <div className='songcard_bottom'>
              <div>
                <div className='songname_text'>
                  Heat Waves
                </div>
                <div className='songname_text'>
                  Artist Name
                </div>
              </div>

              <div className='time'>
                <h2 className='time_text'> 4:21 </h2>
                <img src={greenplay} className='greenplay' />
              </div>

            </div>






          </div>

          
          <div className='song_card'>
            <div>
              <img src={moodimg} className='song_img' />
            </div>

            <div className='songcard_bottom'>
              <div>
                <div className='songname_text'>
                  Heat Waves
                </div>
                <div className='songname_text'>
                  Artist Name
                </div>
              </div>

              <div className='time'>
                <h2 className='time_text'> 4:21 </h2>
                <img src={greenplay} className='greenplay' />
              </div>

            </div>






          </div>

          <div className='song_card'>
            <div>
              <img src={moodimg} className='song_img' />
            </div>

            <div className='songcard_bottom'>
              <div>
                <div className='songname_text'>
                  Heat Waves
                </div>
                <div className='songname_text'>
                  Artist Name
                </div>
              </div>

              <div className='time'>
                <h2 className='time_text'> 4:21 </h2>
                <img src={greenplay} className='greenplay' />
              </div>

            </div>






          </div>

          <div className='song_card'>
            <div>
              <img src={moodimg} className='song_img' />
            </div>

            <div className='songcard_bottom'>
              <div>
                <div className='songname_text'>
                  Heat Waves
                </div>
                <div className='songname_text'>
                  Artist Name
                </div>
              </div>

              <div className='time'>
                <h2 className='time_text'> 4:21 </h2>
                <img src={greenplay} className='greenplay' />
              </div>

            </div>






          </div>

        </div>



      </div>

    </div>
  )
}

export default TopPlaylists
