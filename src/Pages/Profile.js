import React from 'react'
import './Profilestyle.css'

import Feed from '../Layout/feed'
import Rightbar from '../Layout/rightbar'
import Sidebar from '../Layout/sidebar'
import Topbar from '../Layout/Topbar'

import profile from '../Assets/Images/profile.jpg'
import profile_user from '../Assets/Images/profile_user.jpg'
import camera from '../Assets/Images/camera.png'
import whitecam from '../Assets/Images/whitecam.png'

import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const navigate = useNavigate();

    return (
        <div >
            <Topbar />

            <div className='profile'>

                <Sidebar />
                <div className='profileright'>
                    <div className='profilerightop'>
                        <div className='profilecover'>
                            <img className='profilecoverimg' src={profile} />
                            <img className='profiluserimg' src={profile_user} />
                            <div className='cover_div'>
                                <img className='profileimage_white_camera' src={camera} />
                                <span className='edit_cover'> Edit Cover Photo </span>
                            </div>
                            <div className='profile_rightbar'>
                                <div className='profile_rightbar_wrapper'>
                                    <div className='btn_profile' onClick={()=>navigate("/myposts")}> Posts </div>
                                    <div className='btn_profile'> About </div>
                                    <div className='btn_profile' onClick={()=>navigate("/friends")}> Friends </div>
                                    <div className='btn_profile' onClick={()=>navigate("/photos")}> Photos </div>
                                    <div className='btn_profile'> Videos </div>
                                    <div className='btn_profile'> Check-ins </div>
                                </div>
                            </div>
                        </div>
                        <div className='profileinfo'>
                            <h4 className='profileinfoname'> Sapnil Bhowmik </h4>
                            <span className='profileinfodesc'> Hello friends !</span>
                            <div className='camera_div'>
                                <img className='profileimage_camera' src={camera} />
                            </div>
                        </div>
                    </div>
                    <div className='profilerighbottom'>
                        <Feed />
                        <Rightbar profile='Profile_page' />
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Profile
