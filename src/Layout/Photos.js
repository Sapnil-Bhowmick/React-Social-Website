
import React from 'react';
import { useState } from "react";

import './Photostyle.css';

import vertical_dots from '../Assets/Images/vertical_dots.png';
import Delete from '../Assets/Images/delete.png';
import Download from '../Assets/Images/download.png';
import Cover_photo from '../Assets/Images/cover_photo.png';

const Photos = () => {

    const [open, setOpen] = useState(false)

    return (

        <>
            <div className='button_photos_main'>
                Photos
            </div>

            <div className='button_photos'>
                <div className='btn_ph'>
                    Cover Photos
                </div>

                <div className='btn_ph'>
                    Profile Photos
                </div>

                <div className='btn_ph'>
                    Post Photos
                </div>
            </div>

            <div className='photo_container'>


                <div className='photocard'>

                    <div className="card_photo">
                        <img
                            src="https://placekitten.com/300/200"
                            alt="Card"
                            className="card-image"
                        />
                        <div className="card-button">
                            <img className='photo' src={vertical_dots} onClick={() => setOpen(!open)} />
                        </div>


                    </div>

                    {
                        open === true && (

                            <div className='container_photo' >
                                <div className="card_snap">
                                    <img src={Download} alt="Icon" className="icon" />
                                    <span > Download</span>
                                </div>
                                <div className="card_snap">
                                    <img src={Delete} alt="Icon" className="icon" />
                                    <span > Delete Photo </span>
                                </div>
                                <div className="card_snap">
                                    <img src={Cover_photo} alt="Icon" className="icon" />
                                    <span > Set Cover Photo</span>
                                </div>


                            </div>

                        )
                    }

                </div>

                <div className='photocard'>

                    <div className="card_photo">
                        <img
                            src="https://placekitten.com/300/200"
                            alt="Card"
                            className="card-image"
                        />
                        <div className="card-button">
                            <img className='photo' src={vertical_dots} onClick={() => setOpen(!open)} />
                        </div>


                    </div>

                    {
                        open === true && (

                            <div className='container_photo' >
                                <div className="card_snap">
                                    <img src={Download} alt="Icon" className="icon" />
                                    <span > Download</span>
                                </div>
                                <div className="card_snap">
                                    <img src={Delete} alt="Icon" className="icon" />
                                    <span > Delete Photo </span>
                                </div>
                                <div className="card_snap">
                                    <img src={Cover_photo} alt="Icon" className="icon" />
                                    <span > Set Cover Photo</span>
                                </div>


                            </div>

                        )
                    }

                </div>

                <div className='photocard'>

                    <div className="card_photo">
                        <img
                            src="https://placekitten.com/300/200"
                            alt="Card"
                            className="card-image"
                        />
                        <div className="card-button">
                            <img className='photo' src={vertical_dots} onClick={() => setOpen(!open)} />
                        </div>


                    </div>

                    {
                        open === true && (

                            <div className='container_photo' >
                                <div className="card_snap">
                                    <img src={Download} alt="Icon" className="icon" />
                                    <span > Download</span>
                                </div>
                                <div className="card_snap">
                                    <img src={Delete} alt="Icon" className="icon" />
                                    <span > Delete Photo </span>
                                </div>
                                <div className="card_snap">
                                    <img src={Cover_photo} alt="Icon" className="icon" />
                                    <span > Set Cover Photo</span>
                                </div>


                            </div>

                        )
                    }

                </div>

                <div className='photocard'>

                    <div className="card_photo">
                        <img
                            src="https://placekitten.com/300/200"
                            alt="Card"
                            className="card-image"
                        />
                        <div className="card-button">
                            <img className='photo' src={vertical_dots} onClick={() => setOpen(!open)} />
                        </div>


                    </div>

                    {
                        open === true && (

                            <div className='container_photo' >
                                <div className="card_snap">
                                    <img src={Download} alt="Icon" className="icon" />
                                    <span > Download</span>
                                </div>
                                <div className="card_snap">
                                    <img src={Delete} alt="Icon" className="icon" />
                                    <span > Delete Photo </span>
                                </div>
                                <div className="card_snap">
                                    <img src={Cover_photo} alt="Icon" className="icon" />
                                    <span > Set Cover Photo</span>
                                </div>


                            </div>

                        )
                    }

                </div>

                <div className='photocard'>

                    <div className="card_photo">
                        <img
                            src="https://placekitten.com/300/200"
                            alt="Card"
                            className="card-image"
                        />
                        <div className="card-button">
                            <img className='photo' src={vertical_dots} onClick={() => setOpen(!open)} />
                        </div>


                    </div>

                    {
                        open === true && (

                            <div className='container_photo' >
                                <div className="card_snap">
                                    <img src={Download} alt="Icon" className="icon" />
                                    <span > Download</span>
                                </div>
                                <div className="card_snap">
                                    <img src={Delete} alt="Icon" className="icon" />
                                    <span > Delete Photo </span>
                                </div>
                                <div className="card_snap">
                                    <img src={Cover_photo} alt="Icon" className="icon" />
                                    <span > Set Cover Photo</span>
                                </div>


                            </div>

                        )
                    }

                </div>

                <div className='photocard'>

                    <div className="card_photo">
                        <img
                            src="https://placekitten.com/300/200"
                            alt="Card"
                            className="card-image"
                        />
                        <div className="card-button">
                            <img className='photo' src={vertical_dots} onClick={() => setOpen(!open)} />
                        </div>


                    </div>

                    {
                        open === true && (

                            <div className='container_photo' >
                                <div className="card_snap">
                                    <img src={Download} alt="Icon" className="icon" />
                                    <span > Download</span>
                                </div>
                                <div className="card_snap">
                                    <img src={Delete} alt="Icon" className="icon" />
                                    <span > Delete Photo </span>
                                </div>
                                <div className="card_snap">
                                    <img src={Cover_photo} alt="Icon" className="icon" />
                                    <span > Set Cover Photo</span>
                                </div>


                            </div>

                        )
                    }

                </div>

                <div className='photocard'>

                    <div className="card_photo">
                        <img
                            src="https://placekitten.com/300/200"
                            alt="Card"
                            className="card-image"
                        />
                        <div className="card-button">
                            <img className='photo' src={vertical_dots} onClick={() => setOpen(!open)} />
                        </div>


                    </div>

                    {
                        open === true && (

                            <div className='container_photo' >
                                <div className="card_snap">
                                    <img src={Download} alt="Icon" className="icon" />
                                    <span > Download</span>
                                </div>
                                <div className="card_snap">
                                    <img src={Delete} alt="Icon" className="icon" />
                                    <span > Delete Photo </span>
                                </div>
                                <div className="card_snap">
                                    <img src={Cover_photo} alt="Icon" className="icon" />
                                    <span > Set Cover Photo</span>
                                </div>


                            </div>

                        )
                    }

                </div>

                <div className='photocard'>

                    <div className="card_photo">
                        <img
                            src="https://placekitten.com/300/200"
                            alt="Card"
                            className="card-image"
                        />
                        <div className="card-button">
                            <img className='photo' src={vertical_dots} onClick={() => setOpen(!open)} />
                        </div>


                    </div>

                    {
                        open === true && (

                            <div className='container_photo' >
                                <div className="card_snap">
                                    <img src={Download} alt="Icon" className="icon" />
                                    <span > Download</span>
                                </div>
                                <div className="card_snap">
                                    <img src={Delete} alt="Icon" className="icon" />
                                    <span > Delete Photo </span>
                                </div>
                                <div className="card_snap">
                                    <img src={Cover_photo} alt="Icon" className="icon" />
                                    <span > Set Cover Photo</span>
                                </div>


                            </div>

                        )
                    }

                </div>

                <div className='photocard'>

                    <div className="card_photo">
                        <img
                            src="https://placekitten.com/300/200"
                            alt="Card"
                            className="card-image"
                        />
                        <div className="card-button">
                            <img className='photo' src={vertical_dots} onClick={() => setOpen(!open)} />
                        </div>


                    </div>

                    {
                        open === true && (

                            <div className='container_photo' >
                                <div className="card_snap">
                                    <img src={Download} alt="Icon" className="icon" />
                                    <span > Download</span>
                                </div>
                                <div className="card_snap">
                                    <img src={Delete} alt="Icon" className="icon" />
                                    <span > Delete Photo </span>
                                </div>
                                <div className="card_snap">
                                    <img src={Cover_photo} alt="Icon" className="icon" />
                                    <span > Set Cover Photo</span>
                                </div>


                            </div>

                        )
                    }

                </div>

                <div className='photocard'>

                    <div className="card_photo">
                        <img
                            src="https://placekitten.com/300/200"
                            alt="Card"
                            className="card-image"
                        />
                        <div className="card-button">
                            <img className='photo' src={vertical_dots} onClick={() => setOpen(!open)} />
                        </div>


                    </div>

                    {
                        open === true && (

                            <div className='container_photo' >
                                <div className="card_snap">
                                    <img src={Download} alt="Icon" className="icon" />
                                    <span > Download</span>
                                </div>
                                <div className="card_snap">
                                    <img src={Delete} alt="Icon" className="icon" />
                                    <span > Delete Photo </span>
                                </div>
                                <div className="card_snap">
                                    <img src={Cover_photo} alt="Icon" className="icon" />
                                    <span > Set Cover Photo</span>
                                </div>


                            </div>

                        )
                    }

                </div>



            </div>

        </>
    );
};

export default Photos;
