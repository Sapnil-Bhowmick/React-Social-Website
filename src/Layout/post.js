import React from 'react'
import './poststyle.css'

import { EmojiEmotions, More } from '@material-ui/icons'

import profile_logo from '../Assets/Images/Rabbit_2.jpg'
import post from '../Assets/Images/post.jpg'
import like_outline from '../Assets/Images/like_outline.png'
import heart_outline from '../Assets/Images/heart_outline.png'
import vertical_dots from '../Assets/Images/vertical_dots.png'


import chat_cam from '../Assets/Images/chat_cam.png'
import chat_emoji from '../Assets/Images/chat_emoji.png'
import chat_photo from '../Assets/Images/chat_photo.png'
import chat_video from '../Assets/Images/chat_video.png'




const Post = () => {
    return (
        <>
            <div className='post'>
                <div className='postwrapper'>

                    <div className='postTop'>
                        <div className='postTopLeft'>
                            <img className='postimage' src={profile_logo} />
                            <div className='name_time'>
                                <span className='postusername'> Sapnil Bhowmik </span>
                                <span className='postonline'> </span>
                                <span className='postdate'> 12 April at 2:30PM </span>
                            </div>

                        </div>

                        <div className='postTopRight'>
                            <img src={vertical_dots} className='post_dot' />
                        </div>
                    </div>

                    <div className='postCenter'>
                        <span className='postText'> Hey! its my first post.</span>
                        <img className='postImage' src={post} />
                    </div>

                    <div className='postBottom'>
                        <div className='postbottomleft'>
                            <img className='likeicon' src={like_outline} />
                            <img className='hearticon' src={heart_outline} />
                            <span className='postlikecounter'>  32 people liked </span>
                        </div>
                        <div className='postbottomright'>
                            <span className='postcommenttext'> 9 comments</span>
                        </div>
                    </div>

                    <div className='post_chat'>
                        <div className='post_profile_img'>
                            <img className='postimage' src={profile_logo} />
                        </div>
                        <div className='searchbar_post'>
                            {/* <Search className='searchicon' /> */}
                            <div className='input_post'>
                                <input placeholder="Write a comment ..." className='searchInput_post' />
                            </div>

                            <div className='chat_images_div'>
                                <img src={chat_cam} className='chat_cam' />
                                <img src={chat_photo} className='chat_cam' />
                                <img src={chat_video} className='chat_cam' />
                                <img src={chat_emoji} className='chat_cam' />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='post'>
                <div className='postwrapper'>

                    <div className='postTop'>
                        <div className='postTopLeft'>
                            <img className='postimage' src={profile_logo} />
                            <div className='name_time'>
                                <span className='postusername'> Sapnil Bhowmik </span>
                                <span className='postonline'> </span>
                                <span className='postdate'> 12 April at 2:30PM </span>
                            </div>

                        </div>

                        <div className='postTopRight'>
                            <img src={vertical_dots} className='post_dot' />
                        </div>
                    </div>

                    <div className='postCenter'>
                        <span className='postText'> Hey! its my first post.</span>
                        <img className='postImage' src={post} />
                    </div>

                    <div className='postBottom'>
                        <div className='postbottomleft'>
                            <img className='likeicon' src={like_outline} />
                            <img className='hearticon' src={heart_outline} />
                            <span className='postlikecounter'>  32 people liked </span>
                        </div>
                        <div className='postbottomright'>
                            <span className='postcommenttext'> 9 comments</span>
                        </div>
                    </div>

                    <div className='post_chat'>
                        <div className='post_profile_img'>
                            <img className='postimage' src={profile_logo} />
                        </div>
                        <div className='searchbar_post'>
                            {/* <Search className='searchicon' /> */}
                            <div className='input_post'>
                                <input placeholder="Write a comment ..." className='searchInput_post' />
                            </div>

                            <div className='chat_images_div'>
                                <img src={chat_cam} className='chat_cam' />
                                <img src={chat_photo} className='chat_cam' />
                                <img src={chat_video} className='chat_cam' />
                                <img src={chat_emoji} className='chat_cam' />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Post
