import React from 'react'

import './sidebarstyle.css'
import { RssFeed, Chat, PlayCircleFilled, GroupSharp, Bookmark, HelpOutline, WorkOutline, Event, } from '@material-ui/icons'

import friend from '../Assets/Images/boyface.jpg'
import profile_logo from '../Assets/Images/Rabbit_2.jpg'

const Sidebar = () => {
    return (
        <>

            <div className='sidebar'>
                <div className='sidebarwrapper'>
                    <ul className='sidebarlist'>
                        <li className='sidebarlistitem'>
                            <RssFeed className='sidebaricon curson_pointer' />
                            <span className='sidebarlistitemtext'> Feed </span>
                        </li>
                        <li className='sidebarlistitem'>
                            <Chat className='sidebaricon curson_pointer' />
                            <span className='sidebarlistitemtext'> Feed </span>
                        </li>
                        <li className='sidebarlistitem'>
                            <PlayCircleFilled className='sidebaricon curson_pointer' />
                            <span className='sidebarlistitemtext'> Feed </span>
                        </li>
                        <li className='sidebarlistitem'>
                            <GroupSharp className='sidebaricon curson_pointer' />
                            <span className='sidebarlistitemtext'> Feed </span>
                        </li>
                        <li className='sidebarlistitem'>
                            <Bookmark className='sidebaricon curson_pointer' />
                            <span className='sidebarlistitemtext'> Feed </span>
                        </li>
                        <li className='sidebarlistitem'>
                            <HelpOutline className='sidebaricon curson_pointer' />
                            <span className='sidebarlistitemtext'> Feed </span>
                        </li>
                        <li className='sidebarlistitem'>
                            <WorkOutline className='sidebaricon curson_pointer' />
                            <span className='sidebarlistitemtext'> Feed </span>
                        </li>
                        <li className='sidebarlistitem'>
                            <Event className='sidebaricon curson_pointer' />
                            <span className='sidebarlistitemtext'> Feed </span>
                        </li>

                    </ul>

                    <div className='sidebarbtn_ht_div'>
                        <button className='sidebarbutton'> Show More </button>
                        <hr className='sidebarhr' color='red' />
                    </div>


                    <ul className='sidebarfriendlist'>
                        <li className='sidebarfriend'>
                            <img className='sidebarfriendimage' src={profile_logo} />
                            <span className='sidebarfriendname'> Jane Doe </span>
                        </li>
                        <li className='sidebarfriend'>
                            <img className='sidebarfriendimage' src={profile_logo} />
                            <span className='sidebarfriendname'> Jane Doe </span>
                        </li>
                        <li className='sidebarfriend'>
                            <img className='sidebarfriendimage' src={profile_logo} />
                            <span className='sidebarfriendname'> Jane Doe </span>
                        </li>
                        <li className='sidebarfriend'>
                            <img className='sidebarfriendimage' src={profile_logo} />
                            <span className='sidebarfriendname'> Jane Doe </span>
                        </li>
                        <li className='sidebarfriend'>
                            <img className='sidebarfriendimage' src={profile_logo} />
                            <span className='sidebarfriendname'> Jane Doe </span>
                        </li>
                        <li className='sidebarfriend'>
                            <img className='sidebarfriendimage' src={profile_logo} />
                            <span className='sidebarfriendname'> Jane Doe </span>
                        </li>
                        <li className='sidebarfriend'>
                            <img className='sidebarfriendimage' src={profile_logo} />
                            <span className='sidebarfriendname'> Jane Doe </span>
                        </li>
                        <li className='sidebarfriend'>
                            <img className='sidebarfriendimage' src={profile_logo} />
                            <span className='sidebarfriendname'> Jane Doe </span>
                        </li>
                        <li className='sidebarfriend'>
                            <img className='sidebarfriendimage' src={profile_logo} />
                            <span className='sidebarfriendname'> Jane Doe </span>
                        </li>

                    </ul>

                </div>


            </div>

            
        </>

    )
}

export default Sidebar
