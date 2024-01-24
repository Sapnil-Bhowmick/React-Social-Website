import React from 'react'
import "./MusicPlaylistStyle.css"


import moodimg from '../Assets/Images/moodimg.jpg'
import singer from '../Assets/Images/singer.jpg'
import Rabbit_2 from '../Assets/Images/Rabbit_2.jpg'
import greendown from '../Assets/Images/greendown.png'
import Carousel from 'react-multi-carousel';
import Trending from './trending'
import TopPlaylists from './topPlaylists'






const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const MusicPlaylist = () => {
  return (
    <div className='music_playlist'>

      <div>
        <div className='logodiv'>
          <div className='logoimg_div'>
            <img src={Rabbit_2} className='logo_img' />
          </div>
          <div className='logo_text'>
            Logo
          </div>

          <div className='greendown_div'>
            <img src={greendown} className='greendown'/>
          </div>



        </div>


      </div>


      <div className='musicwrapper_playlist'>

        <div className='mood'>

          <div className='mood_content'>
            <div className='text_div'>
              <h2 className='text_1'> What's Your Mood!</h2>
              <h2 className='text_2'> Recommendations based on your music taste </h2>
            </div>


            <div className='moodwrapper'>
              {/* <Carousel
                responsive={responsive}
                showDots={false}
                draggable={true}
                arrows={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                infinite={false}
              > */}
              <div>
                <div className='mood_card'>
                  <img src={moodimg} className='moodimage' />
                </div>
                <div className='moodtext'>
                  Soothing
                </div>
              </div>
              <div>
                <div className='mood_card'>
                  <img src={moodimg} className='moodimage' />
                </div>
                <div className='moodtext'>
                  Soothing
                </div>
              </div>
              <div>
                <div className='mood_card'>
                  <img src={moodimg} className='moodimage' />
                </div>
                <div className='moodtext'>
                  Soothing
                </div>
              </div>
              <div>
                <div className='mood_card'>
                  <img src={moodimg} className='moodimage' />
                </div>
                <div className='moodtext'>
                  Soothing
                </div>
              </div>
              <div>
                <div className='mood_card'>
                  <img src={moodimg} className='moodimage' />
                </div>
                <div className='moodtext'>
                  Soothing
                </div>
              </div>
              <div>
                <div className='mood_card'>
                  <img src={moodimg} className='moodimage' />
                </div>
                <div className='moodtext'>
                  Soothing
                </div>
              </div>
              <div>
                <div className='mood_card'>
                  <img src={moodimg} className='moodimage' />
                </div>
                <div className='moodtext'>
                  Soothing
                </div>
              </div>
              <div>
                <div className='mood_card'>
                  <img src={moodimg} className='moodimage' />
                </div>
                <div className='moodtext'>
                  Soothing
                </div>
              </div>
              <div>
                <div className='mood_card'>
                  <img src={moodimg} className='moodimage' />
                </div>
                <div className='moodtext'>
                  Soothing
                </div>
              </div>
              <div>
                <div className='mood_card'>
                  <img src={moodimg} className='moodimage' />
                </div>
                <div className='moodtext'>
                  Soothing
                </div>
              </div>

              {/* </Carousel> */}

            </div>

          </div>


          <div className='mood_content'>
            <div className='text_div'>
              <h2 className='text_1'> Recent Plays</h2>
              <h2 className='text_2'> Never stop listening </h2>
            </div>


            <div className='moodwrapper_singer'>

              <div className='mood_card_div'>
                <div className='mood_card'>
                  <img src={singer} className='moodimage_recent' />
                </div>
                <div className='moodtext'>
                  Hector
                </div>
              </div>

              <div className='mood_card_div'>
                <div className='mood_card'>
                  <img src={singer} className='moodimage_recent' />
                </div>
                <div className='moodtext'>
                  Hector
                </div>
              </div>

              <div>
                <div className='mood_card'>
                  <img src={singer} className='moodimage_recent' />
                </div>
                <div className='moodtext'>
                  Hector
                </div>
              </div>

              <div className='mood_card_div'>
                <div className='mood_card'>
                  <img src={singer} className='moodimage_recent' />
                </div>
                <div className='moodtext'>
                  Hector
                </div>
              </div>

              <div>
                <div className='mood_card'>
                  <img src={singer} className='moodimage_recent' />
                </div>
                <div className='moodtext'>
                  Hector
                </div>
              </div>

              <div>
                <div className='mood_card'>
                  <img src={singer} className='moodimage_recent' />
                </div>
                <div className='moodtext'>
                  Hector
                </div>
              </div>
              <div>
                <div className='mood_card'>
                  <img src={singer} className='moodimage_recent' />
                </div>
                <div className='moodtext'>
                  Hector
                </div>
              </div>
              <div>
                <div className='mood_card'>
                  <img src={singer} className='moodimage_recent' />
                </div>
                <div className='moodtext'>
                  Hector
                </div>
              </div>







            </div>

          </div>

        </div>


        <div className='playlists'>
          <Trending />
          <TopPlaylists />
        </div>

      </div>

    </div>
  )
}

export default MusicPlaylist
