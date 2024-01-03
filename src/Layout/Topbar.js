import React from 'react'
import './Topbarstyle.css'
import { Search, Person, Chat, Notifications } from "@material-ui/icons"

import profile_logo from '../Assets/Images/Rabbit_2.jpg'





const Topbar = () => {
    return (
        <>
            <div className='topbarcontainer'>

                <div className='topbarleft'>
                    <span className='logo'> Social Media </span>
                </div>

                <div className='topbarcenter'>
                    <div className='searchbar'>
                        <Search className='searchicon' />
                        <input placeholder="Search for friends,peers and videos" className='searchInput' />
                    </div>
                </div>

                <div className='topbarright'>
                    <div className='topbarlinks'>
                        <span className='topbarlink'> Homepage </span>
                        <span className='topbarlink'> Timeline </span>
                    </div>
                    <div className='topbarIcons'>
                        <div className='topbarItem'>
                            <Person className='icon_color'/>
                            <span className='topIconbadge'> 1 </span>
                        </div>
                        <div className='topbarItem'>
                            <Chat className='icon_color'/>
                            <span className='topIconbadge'> 2 </span>
                        </div>
                        <div className='topbarItem'>
                            <Notifications className='icon_color'/>
                            <span className='topIconbadge'> 3 </span>
                        </div>

                        <div className='topbar_profile'>
                            <img src={profile_logo} height={25} width={25} className='topbarImg' />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Topbar
