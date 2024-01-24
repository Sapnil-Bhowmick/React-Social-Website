import React from 'react'
import './MusicSidebarStyle.css'
import whiteSearch from '../Assets/Images/whiteSearch.png'
import topPlaylist from '../Assets/Images/topPlaylist.png'
import whiteHome from '../Assets/Images/whiteHome.png'
import genres from '../Assets/Images/genres.png'
import person from '../Assets/Images/person.png'
import album from '../Assets/Images/album.png'
import trending from '../Assets/Images/trending.png'
import playlists from '../Assets/Images/playlists.png'
import add from '../Assets/Images/add.png'

import { RssFeed, Chat, PlayCircleFilled, GroupSharp, Bookmark, HelpOutline, WorkOutline, Event, } from '@material-ui/icons'

const MusicSidebar = () => {
    return (
        <div className='music_sidebar'>
            <div className='musicwrapper_sidebar'>

                <div className='heading_sidebar'>
                    <h3> Music </h3>
                </div>



                <ul className='Musiclist_sidebar'>
                    <li className='Musiclistitem_sidebar'>
                        {/* <whiteHome className='Musicsidebaricon_sidebar ' /> */}
                        <img src={whiteHome} className='Musicsidebaricon_sidebar' />
                        <h3 className='Musiclistitem_sidebartext'> Home </h3>
                    </li>
                    <li className='Musiclistitem_sidebar'>
                        <img src={genres} className='Musicsidebaricon_sidebar' />
                        <h3 className='Musiclistitem_sidebartext'> Genres </h3>
                    </li>
                    <li className='Musiclistitem_sidebar'>
                        <img src={person} className='Musicsidebaricon_sidebar' />
                        <h3 className='Musiclistitem_sidebartext'> Artists </h3>
                    </li>
                    <li className='Musiclistitem_sidebar'>
                        <img src={album} className='Musicsidebaricon_sidebar' />
                        <h3 className='Musiclistitem_sidebartext'> Albums </h3>
                    </li>

                </ul>

                <ul className='Musiclist_sidebar'>
                    <li className='Musiclistitem_sidebar'>
                        <img src={topPlaylist} className='Musicsidebaricon_sidebar' />
                        <h3 className='Musiclistitem_sidebartext'> Most Popular </h3>
                    </li>
                    <li className='Musiclistitem_sidebar'>
                        <img src={trending} className='Musicsidebaricon_sidebar' />
                        <h3 className='Musiclistitem_sidebartext'> Trending </h3>
                    </li>


                </ul>

                <ul className='Musiclist_sidebar'>
                    <li className='Musiclistitem_sidebar_playlist'>
                        <h3 className='Musiclistitem_sidebartext_playlist'> My Playlists </h3>
                        <img src={add} className='Musicsidebaricon_sidebar_add' />
                    </li>

                    <div className='myplaylists'>
                        <li style= {{marginTop:'6px'}} className='Musiclistitem_sidebar cursor'>
                            <img src={playlists} className='Musicsidebaricon_sidebar_disc' />
                            <h3 className='Musiclistitem_sidebartext'> Playlist 1 </h3>
                        </li>
                        <li style= {{marginTop:'6px'}} className='Musiclistitem_sidebar cursor'>
                            <img src={playlists} className='Musicsidebaricon_sidebar_disc' />
                            <h3 className='Musiclistitem_sidebartext'> Playlist 2 </h3>
                        </li>
                    </div>





                </ul>


            </div>

        </div>



    )
}

export default MusicSidebar
