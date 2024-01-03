import React from 'react'
import './Homestyle.css'

import Feed from '../Layout/feed'
import Rightbar from '../Layout/rightbar'
import Sidebar from '../Layout/sidebar'
import Topbar from '../Layout/Topbar'




const Home = () => {
    return (
        <div>
            <Topbar />
            <div className='homecontainer'>
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>

        </div>
    )
}

export default Home
