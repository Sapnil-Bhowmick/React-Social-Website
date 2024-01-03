import React from 'react'
import './sharestyle.css'

import profile_logo from '../Assets/Images/Rabbit_2.jpg'


import { PermMedia , Label , LocationOn , EmojiEmotions} from '@material-ui/icons'

const Share = () => {
    return (
        <div className='share'>
            <div className='sharewrapper'>

                <div className='sharetop'>
                    <img className='shareprofileimage' src={profile_logo}/>
                    <input className='shareinput' placeholder="What's in your mind ?" />
                </div>

                <hr className='sharehr' />

                <div className='sharebottom'>
                    <div className='shareoptionsdiv'>
                        <div className='shareoption'>
                            <PermMedia className='shareicon' style={{color:'#ff4f4f'}}/>
                            <span className='sharetext' > Photo or Video </span>
                        </div>
                        <div className='shareoption'>
                            <Label className='shareicon'  style={{color:'#1ec951'}}  />
                            <span className='sharetext'> Tag </span>
                        </div>
                        <div className='shareoption'>
                            <LocationOn className='shareicon' style={{color:'#427dfc'}} />
                            <span className='sharetext'> Location</span>
                        </div>
                        <div className='shareoption'>
                            <EmojiEmotions className='shareicon' style={{color:'rgb(255, 227, 0)'}}/>
                            <span className='sharetext'> Feelings </span>
                        </div>
                    </div>

                    <button className='sharebtn'> Share </button>
                </div>

            </div>

        </div>
    )
}

export default Share
