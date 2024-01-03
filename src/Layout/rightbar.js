import React from 'react'
import './rightbarstyle.css'

import gift from '../Assets/Images/gift.png'
import advertisement from '../Assets/Images/advertisement.png'
import profile_logo from '../Assets/Images/Rabbit_2.jpg'

import friend from '../Assets/Images/friend.jpeg'
import house from '../Assets/Images/house.png'
import location from '../Assets/Images/location.png'
import heart_filled from '../Assets/Images/heart_filled.png'
import edit from '../Assets/Images/edit.png'
import girl from '../Assets/Images/girl.jpeg'
import Follow from './Follow'




const Homerightbar = () => {
  return (
    <>
      <div className='birthdaycontainer'>
        <img className='birthdaycontainer_img' src={gift} />
        <span className='birthdaytext'>
          <b className='right_text'> Sapnil Bhowmik </b > and <b className='right_text'> 3 other friends </b> have a birthday today.
        </span>
      </div>

      <img className='rightbar_add' src={advertisement} />
      <h4 classsName='rightbartitle'> Online Friends </h4>

      <ul className='rightbarfriendlist'>
        <li className='rightbarfriend'>
          <div className='righbarprofileimgcontainer'>
            <img className='righbarprofileimg'
              src={profile_logo} />
            <span className='rightbaronline'> </span>
          </div>
          <span className='rightbarusername'> Sapnil Bhowmik</span>
        </li>
        <li className='rightbarfriend'>
          <div className='righbarprofileimgcontainer'>
            <img className='righbarprofileimg'
              src={profile_logo} />
            <span className='rightbaronline'> </span>
          </div>
          <span className='rightbarusername'> Sapnil Bhowmik</span>
        </li>
        <li className='rightbarfriend'>
          <div className='righbarprofileimgcontainer'>
            <img className='righbarprofileimg'
              src={profile_logo} />
            <span className='rightbaronline'> </span>
          </div>
          <span className='rightbarusername'> Sapnil Bhowmik</span>
        </li>
        <li className='rightbarfriend'>
          <div className='righbarprofileimgcontainer'>
            <img className='righbarprofileimg'
              src={profile_logo} />
            <span className='rightbaronline'> </span>
          </div>
          <span className='rightbarusername'> Sapnil Bhowmik</span>
        </li>
        <li className='rightbarfriend'>
          <div className='righbarprofileimgcontainer'>
            <img className='righbarprofileimg'
              src={profile_logo} />
            <span className='rightbaronline'> </span>
          </div>
          <span className='rightbarusername'> Sapnil Bhowmik</span>
        </li>
        <li className='rightbarfriend'>
          <div className='righbarprofileimgcontainer'>
            <img className='righbarprofileimg'
              src={profile_logo} />
            <span className='rightbaronline'> </span>
          </div>
          <span className='rightbarusername'> Sapnil Bhowmik</span>
        </li>
      </ul>
    </>
  )
}

const Profilerighthtbar = () => {
  return (
    <>

      <div className='profilerightbar_top'>

        <div className='profilerightbar_top_left'>
          <div className='rightbaruserinfoheading'>
            <h1 className='rightbar_user'> User Information </h1>
            <div className='editicondiv'>
              <img className='rightbaredit' src={edit} />
            </div>

          </div>

          <div className='rightbarinfo'>

            <div className='rightbarbio'>
              Add Bio
            </div>



            <div className='rightbarinfoitem'>
              {/* <span className='rightbinfokey'> City : </span> */}
              <img className='rightbar_icon' src={house} />
              <span className='rightbarinfovalue'> Lives in Kolkata </span>
            </div>

            <div className='rightbarinfoitem'>
              {/* <span className='rightbinfokey'> City : </span> */}
              <img className='rightbar_icon' src={location} />
              <span className='rightbarinfovalue'> From Kolkata </span>
            </div>

            <div className='rightbarinfoitem'>
              {/* <span className='rightbinfokey'> City : </span> */}
              <img className='rightbar_icon' src={heart_filled} />
              <span className='rightbarinfovalue'> Single </span>
            </div>


            <div className='rightbarbio'>
              Edit Info
            </div>

          </div>
        </div>

        <div className='profilerightbar_right'>


          <div className='profilerightbar_top_right_active'>
            Recently Active Members
          </div>


          <div className='profilerightbar_right_wrapper'>
            <div className='profilerightbar_right_div'>
              <img className='profilerightbar_right_img' src={girl} />
              <span className='profilerightbar_right_name'> Olivia </span>
              <span className='profilerightbaronline'> </span>
            </div>

            <div className='profilerightbar_right_div'>
              <img className='profilerightbar_right_img' src={girl} />
              <span className='profilerightbar_right_name'> Olivia </span>
              <span className='profilerightbaronline'> </span>
            </div>

            <div className='profilerightbar_right_div'>
              <img className='profilerightbar_right_img' src={girl} />
              <span className='profilerightbar_right_name'> Olivia </span>
              <span className='profilerightbaronline'> </span>
            </div>

            <div className='profilerightbar_right_div'>
              <img className='profilerightbar_right_img' src={girl} />
              <span className='profilerightbar_right_name'> Olivia </span>
              <span className='profilerightbaronline'> </span>
            </div>

            <div className='profilerightbar_right_div'>
              <img className='profilerightbar_right_img' src={girl} />
              <span className='profilerightbar_right_name'> Olivia </span>
              <span className='profilerightbaronline'> </span>
            </div>

            <div className='profilerightbar_right_div'>
              <img className='profilerightbar_right_img' src={girl} />
              <span className='profilerightbar_right_name'> Olivia </span>
              <span className='profilerightbaronline'> </span>
            </div>

            <div className='profilerightbar_right_div'>
              <img className='profilerightbar_right_img' src={girl} />
              <span className='profilerightbar_right_name'> Olivia </span>
              <span className='profilerightbaronline'> </span>
            </div>

            <div className='profilerightbar_right_div'>
              <img className='profilerightbar_right_img' src={girl} />
              <span className='profilerightbar_right_name'> Olivia </span>
              <span className='profilerightbaronline'> </span>
            </div>


          </div>

          <div className='see_div'>
            <div className='profilerightbar_right_btn'>
              <span> See All </span>
            </div>
          </div>



        </div>

      </div>



      <h4 className='rightbartitle'> User Friends </h4>

      <div className='rightbar_friends_div'>
        <div className='rightbarfollowings'>
          <div className='rightbarfollowing'>
            <img className='rightbarfollowingimage' src={friend} />
            <span className='rightbarfollowingname'> Leonardo Sengupta</span>
          </div>

          <div className='rightbarfollowing'>
            <img className='rightbarfollowingimage' src={friend} />
            <span className='rightbarfollowingname'> Leonardo Sengupta</span>
          </div>

          <div className='rightbarfollowing'>
            <img className='rightbarfollowingimage' src={friend} />
            <span className='rightbarfollowingname'> Leonardo Sengupta</span>
          </div>


          <div className='rightbarfollowing'>
            <img className='rightbarfollowingimage' src={friend} />
            <span className='rightbarfollowingname'> Leonardo Sengupta</span>
          </div>

          <div className='rightbarfollowing'>
            <img className='rightbarfollowingimage' src={friend} />
            <span className='rightbarfollowingname'> Leonardo Sengupta</span>
          </div>

          <div className='rightbarfollowing'>
            <img className='rightbarfollowingimage' src={friend} />
            <span className='rightbarfollowingname'> Leonardo Sengupta</span>
          </div>

          <div className='rightbarfollowing'>
            <img className='rightbarfollowingimage' src={friend} />
            <span className='rightbarfollowingname'> Leonardo Sengupta</span>
          </div>


          <div className='rightbarfollowing'>
            <img className='rightbarfollowingimage' src={friend} />
            <span className='rightbarfollowingname'> Leonardo Sengupta</span>
          </div>

          <div className='rightbarfollowing'>
            <img className='rightbarfollowingimage' src={friend} />
            <span className='rightbarfollowingname'> Leonardo Sengupta</span>
          </div>


        </div>

        <div className='userfriends_see_div'>
          <div className='user_profilerightbar_right_btn'>
            <span> See All </span>
          </div>
        </div>


      </div>

      <div>
        <Follow />
      </div>


    </>

  )
}



const Rightbar = ({ profile }) => {


  return (
    <div className='rightbar'>
      <div className='rightbarwrapper'>
        {
          profile === 'Profile_page' ? (<Profilerighthtbar />) : (<Homerightbar />)
        }



      </div>
    </div>
  )
}

export default Rightbar
