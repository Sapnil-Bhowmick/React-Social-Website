import React from 'react'
import './Followstyle.css'
import profile_logo from '../Assets/Images/Rabbit_2.jpg'
import search from '../Assets/Images/search.png'

const Follow = () => {
  return (
    <div div className='follow'>
      <div className='follow_wrapper'>

        <div className='searchbar_div'>
          <div className='follow_searchbar'>
            <input placeholder='Search' className='searchInput_flw' />
            <img className='follow_search' src={search} />
          </div>
        </div>

        <div className='follow_text'>
          <span className='follow_text_people'> People to follow </span>
          <span className='follow_text_see'> See all </span>
        </div>

        {/* <div> */}
        <div className='followTopLeft'>
          <div className='follow_img_div'>
            <img className='followimage' src={profile_logo} />
            <div className='name_time'>
              <span className='followusername'> Brooker Anderson </span>
              <span className='followemail'> brooker234@yahoo.com </span>
            </div>
          </div>

          <div className='follow_button'>
            Follow
          </div>
        </div>

        <div className='followTopLeft'>
          <div className='follow_img_div'>
            <img className='followimage' src={profile_logo} />
            <div className='name_time'>
              <span className='followusername'> Brooker Anderson </span>
              <span className='followemail'> brooker234@yahoo.com </span>
            </div>
          </div>

          <div className='follow_button'>
            Follow
          </div>
        </div>

        <div className='followTopLeft'>
          <div className='follow_img_div'>
            <img className='followimage' src={profile_logo} />
            <div className='name_time'>
              <span className='followusername'> Brooker Anderson </span>
              <span className='followemail'> brooker234@yahoo.com </span>
            </div>
          </div>

          <div className='follow_button'>
            Follow
          </div>
        </div>

        {/* </div> */}



      </div>
    </div>

  )
}

export default Follow
