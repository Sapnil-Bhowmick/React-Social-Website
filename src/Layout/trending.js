import React from 'react'
import "./trendingStyle.css"

import moodimg from '../Assets/Images/moodimg.jpg'
import play from '../Assets/Images/play.png'

const Trending = () => {
  return (
    <div className='trending'>
      <div className='trending_wrapper'>

        <div className='trending_text'>
          Trending
        </div>

        <div className='trending_div'>
          <div className='trending_img'>
            <img src={moodimg} className='moodimg'/>
            <div className='trendingsong_name_div'>
              <h2 className='trending_text_1'> Rodrigo </h2>
              <h2 className='trending_text_2'> Gloss Animals </h2>
            </div>
          </div>
          <div className='trending_play'>
            <h2 className='trendingtime'> 3:45 </h2>
            <img src={play} className='play'/>
          </div>
        </div>

        <div className='trending_div'>
          <div className='trending_img'>
            <img src={moodimg} className='moodimg'/>
            <div className='trendingsong_name_div'>
              <h2 className='trending_text_1'> Rodrigo </h2>
              <h2 className='trending_text_2'> Gloss Animals </h2>
            </div>
          </div>
          <div className='trending_play'>
            <h2 className='trendingtime'> 3:45 </h2>
            <img src={play} className='play'/>
          </div>
        </div>

        <div className='trending_div'>
          <div className='trending_img'>
            <img src={moodimg} className='moodimg'/>
            <div className='trendingsong_name_div'>
              <h2 className='trending_text_1'> Rodrigo </h2>
              <h2 className='trending_text_2'> Gloss Animals </h2>
            </div>
          </div>
          <div className='trending_play'>
            <h2 className='trendingtime'> 3:45 </h2>
            <img src={play} className='play'/>
          </div>
        </div>

        <div className='trending_div'>
          <div className='trending_img'>
            <img src={moodimg} className='moodimg'/>
            <div className='trendingsong_name_div'>
              <h2 className='trending_text_1'> Rodrigo </h2>
              <h2 className='trending_text_2'> Gloss Animals </h2>
            </div>
          </div>
          <div className='trending_play'>
            <h2 className='trendingtime'> 3:45 </h2>
            <img src={play} className='play'/>
          </div>
        </div>



      </div>
    </div>
  )
}

export default Trending
