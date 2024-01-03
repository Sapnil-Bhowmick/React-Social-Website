import React from 'react';
import './mypostsstyle.css'; // You can create a separate CSS file for styling

import calender from '../Assets/Images/calender.png'
import share from '../Assets/Images/share.png'
import eye from '../Assets/Images/eye.png'
import hide from '../Assets/Images/hide.png'
import clock from '../Assets/Images/time.png'
import comment from '../Assets/Images/comment.png'

const myposts = () => {
    return (
        <div>

            <div className='card_div'>

                <div className="card" >
                    <div className='card_wrapper'>
                        <img
                            className="card-top-image"
                            src="https://placekitten.com/400/200"
                            alt="Card Top"
                        />
                        <div className="card-content">
                            <div className='prfimg_div'>
                                <img
                                    className="profile-picture"
                                    src="https://placekitten.com/50/50"
                                    alt="Profile"
                                />

                                <div className='name_email'>
                                    <span className='prfimg_div_text'> Sapnil Bhowmik </span>
                                    <span className='prfimg_div_text'> loremipsum456@yahoo.com </span>
                                </div>


                            </div>

                            <div>

                            </div>



                            <p className="content-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
                                consectetur odio.
                            </p>

                            <div className="card-footer">
                                <img
                                    className="date-icon"
                                    src={calender}// Replace with your date icon URL
                                    alt="Date"
                                />
                                <p className="post-date">January 1, 2023</p>
                            </div>

                            <div className='bottom_div'>
                                <div className='text'>
                                    <div className='comment_div'>
                                        <img className='comment' src={comment} />
                                        <span className='comment_text'> 200  </span>
                                    </div>
                                    <div className='time_div'>
                                        <img className='comment' src={clock} />
                                        <span className='comment_text'> 5 weeks ago</span>
                                    </div>

                                </div>
                                <div className='share_div'>
                                    <img className='share_img' src={share} />
                                    <span className='share_text'>Share</span>
                                </div>
                                <img className='eye' src={eye} />
                            </div>


                        </div>

                    </div>

                </div>

                <div className="card" style={{ backgroundColor: '#d8e0e8' }}>
                    <div className='card_wrapper'>
                        <img
                            className="card-top-image"
                            src="https://placekitten.com/400/200"
                            alt="Card Top"
                        />
                        <div className="card-content">
                            <div className='prfimg_div'>
                                <img
                                    className="profile-picture"
                                    src="https://placekitten.com/50/50"
                                    alt="Profile"
                                />

                                <div className='name_email'>
                                    <span className='prfimg_div_text'> Sapnil Bhowmik </span>
                                    <span className='prfimg_div_text'> loremipsum456@yahoo.com </span>
                                </div>


                            </div>

                            <div>

                            </div>



                            <p className="content-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
                                consectetur odio.
                            </p>

                            <div className="card-footer">
                                <img
                                    className="date-icon"
                                    src={calender}// Replace with your date icon URL
                                    alt="Date"
                                />
                                <p className="post-date">January 1, 2023</p>
                            </div>

                            <div className='bottom_div'>
                                <div className='text'>
                                    <div className='comment_div'>
                                        <img className='comment' src={comment} />
                                        <span className='comment_text'> 200  </span>
                                    </div>
                                    <div className='time_div'>
                                        <img className='comment' src={clock} />
                                        <span className='comment_text'> 5 weeks ago</span>
                                    </div>

                                </div>
                                <div className='share_div'>
                                    <img className='share_img' src={share} />
                                    <span className='share_text'>Share</span>
                                </div>
                                <img className='eye' src={hide} />
                            </div>


                        </div>

                    </div>

                </div>

                <div className="card"  >
                    <div className='card_wrapper'>
                        <img
                            className="card-top-image"
                            src="https://placekitten.com/400/200"
                            alt="Card Top"
                        />
                        <div className="card-content">
                            <div className='prfimg_div'>
                                <img
                                    className="profile-picture"
                                    src="https://placekitten.com/50/50"
                                    alt="Profile"
                                />

                                <div className='name_email'>
                                    <span className='prfimg_div_text'> Sapnil Bhowmik </span>
                                    <span className='prfimg_div_text'> loremipsum456@yahoo.com </span>
                                </div>


                            </div>

                            <div>

                            </div>



                            <p className="content-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
                                consectetur odio.
                            </p>

                            <div className="card-footer">
                                <img
                                    className="date-icon"
                                    src={calender}// Replace with your date icon URL
                                    alt="Date"
                                />
                                <p className="post-date">January 1, 2023</p>
                            </div>

                            <div className='bottom_div'>
                                <div className='text'>
                                    <div className='comment_div'>
                                        <img className='comment' src={comment}/>
                                        <span className='comment_text'> 200  </span>
                                    </div>
                                    <div className='time_div'>
                                        <img className='comment' src={clock}/>
                                        <span className='comment_text'> 5 weeks ago</span>
                                    </div>
                                    
                                </div>
                                <div className='share_div'>
                                    <img className='share_img' src={share} />
                                    <span className='share_text'>Share</span>
                                </div>
                                <img className='eye' src={eye}/>
                            </div>


                        </div>

                    </div>

                </div>

                <div className="card"  >
                    <div className='card_wrapper'>
                        <img
                            className="card-top-image"
                            src="https://placekitten.com/400/200"
                            alt="Card Top"
                        />
                        <div className="card-content">
                            <div className='prfimg_div'>
                                <img
                                    className="profile-picture"
                                    src="https://placekitten.com/50/50"
                                    alt="Profile"
                                />

                                <div className='name_email'>
                                    <span className='prfimg_div_text'> Sapnil Bhowmik </span>
                                    <span className='prfimg_div_text'> loremipsum456@yahoo.com </span>
                                </div>


                            </div>

                            <div>

                            </div>



                            <p className="content-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
                                consectetur odio.
                            </p>

                            <div className="card-footer">
                                <img
                                    className="date-icon"
                                    src={calender}// Replace with your date icon URL
                                    alt="Date"
                                />
                                <p className="post-date">January 1, 2023</p>
                            </div>

                            <div className='bottom_div'>
                                <div className='text'>
                                    <div className='comment_div'>
                                        <img className='comment' src={comment}/>
                                        <span className='comment_text'> 200  </span>
                                    </div>
                                    <div className='time_div'>
                                        <img className='comment' src={clock}/>
                                        <span className='comment_text'> 5 weeks ago</span>
                                    </div>
                                    
                                </div>
                                <div className='share_div'>
                                    <img className='share_img' src={share} />
                                    <span className='share_text'>Share</span>
                                </div>
                                <img className='eye' src={eye}/>
                            </div>


                        </div>

                    </div>

                </div>

                <div className="card"  style={{backgroundColor:'#d8e0e8'}}>
                    <div className='card_wrapper'>
                        <img
                            className="card-top-image"
                            src="https://placekitten.com/400/200"
                            alt="Card Top"
                        />
                        <div className="card-content">
                            <div className='prfimg_div'>
                                <img
                                    className="profile-picture"
                                    src="https://placekitten.com/50/50"
                                    alt="Profile"
                                />

                                <div className='name_email'>
                                    <span className='prfimg_div_text'> Sapnil Bhowmik </span>
                                    <span className='prfimg_div_text'> loremipsum456@yahoo.com </span>
                                </div>


                            </div>

                            <div>

                            </div>



                            <p className="content-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
                                consectetur odio.
                            </p>

                            <div className="card-footer">
                                <img
                                    className="date-icon"
                                    src={calender}// Replace with your date icon URL
                                    alt="Date"
                                />
                                <p className="post-date">January 1, 2023</p>
                            </div>

                            <div className='bottom_div'>
                                <div className='text'>
                                    <div className='comment_div'>
                                        <img className='comment' src={comment}/>
                                        <span className='comment_text'> 200  </span>
                                    </div>
                                    <div className='time_div'>
                                        <img className='comment' src={clock}/>
                                        <span className='comment_text'> 5 weeks ago</span>
                                    </div>
                                    
                                </div>
                                <div className='share_div'>
                                    <img className='share_img' src={share} />
                                    <span className='share_text'>Share</span>
                                </div>
                                <img className='eye' src={hide}/>
                            </div>


                        </div>

                    </div>

                </div>



            </div>

        </div>


    );
};

export default myposts;
