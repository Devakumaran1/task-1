import React from 'react'
import './content.css'
import special_img from '../../assets/special_img.png'
export const Content = () => {
    return (
        <>
            <div className="content">
                <div className="left">
                    <div className="title-box">
                        <div className='title'>
                            <h3>A little About Me</h3>
                            <button className="btn">follow + </button>
                        </div>
                        <div className="body">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quidem provident sint possimus iure cumque mollitia, quam doloribus et perspiciatis.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quidem provident sint possimus iure cumque mollitia, quam doloribus et perspiciatis.
                        </div>
                        <div className='border'>
                            <hr /><p className='readmore'>Read More</p></div>
                        <div className="language">
                            <h3>Language Spoken</h3><span>Hindi</span><span>Telegu</span><span>English</span>
                        </div>

                        <div className="social-media">
                            <i class='bx bxl-whatsapp'></i>
                            <i class='bx bxl-facebook'></i>
                            <i class='bx bxl-twitter'></i>
                            <i class='bx bxl-instagram'></i>
                            <i class='bx bxl-youtube'></i>
                        </div>
                    </div>
                    {/* second box */}
                    <div className="second-box">
                        <h3>I Specialze In</h3>
                        <img src={special_img} alt="" />

                    </div>
                    {/* third box */}
                    <div className="third-box">
                        <h3>The Concerns I Treat</h3>
                        <div className="plans">
                            <div>Skin treatment</div>
                            <div>Pregnency</div>
                            <div>Periods Doubt</div>
                            <div>Pelvic Plain</div>
                            <div>Ovarin Pain</div>
                            <div>+5 more</div>
                        </div>
                    </div>
                    {/* fourth box */}
                    <div className="second-box fourth">
                        <h3>My Work Experience</h3>
                        <h4>I have Been In Practice for: 7+ Years</h4>
                        <hr />
                        <div className="work-place">
                            <div className='work-details'>
                                <i class='bx bxs-business'></i>
                                <h4>Mit-town medical clinic</h4>
                                {/* <p>Senior Doctor</p> */}
                                <p>2016-present</p>
                            </div>
                            <div className='work-details'>
                                <i class='bx bxs-business'></i>
                                <h4>Mit-town medical clinic</h4>
                                {/* <p>Senior Doctor</p> */}
                                <p>2014-2015</p>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="right">
                    <div className='right-top' >
                        <div style={{fontWeight:'700'}}>Appoinment Fees</div>
                        <div style={{color:'darkgreen',fontWeight:'600'}}>&#8377;699.00
                        </div>
                    </div>
                    <h3 className='heading-1'>Select Your Mode of Section </h3>
                    <div className='line'></div>
                    <div className="varity">
                        <div>
                            <p>In-Clinic</p>
                            <p>45 mins</p>
                        </div>
                        <div>
                        <p >Video <span className='check'><i class='bx bxs-check-circle' ></i></span></p> 
                        <p>45 mins</p>
                        </div>
                        <div>
                        <p>Chats</p>
                        <p>10 mins</p>
                        </div>
                    </div>
                    <h3 className='heading-1'>Pick a Time Solt </h3>
                    <div className='line line-2'></div><span><i class='bx bx-calendar-alt'></i></span>
                    <div className="varity varity-2">
                        <i class='bx bx-left-arrow-circle'></i>
                        <div>
                            <p>Mon, 10 Oct</p>
                            <p style={{color:'darkgreen'}}>45 mins</p>
                        </div>
                        <div>
                        <p >Tue, 11 Oct </p> 
                        <p style={{color:'red'}}>45 mins</p>
                        </div>
                        <div>
                        <p>Wed, 12 Oct</p>
                        <p style={{color:'orange'}}>10 mins</p>
                        </div>
                        <i class='bx bx-right-arrow-circle' ></i>
                    </div>
                    <h3 className='heading-1'>Morning </h3>
                       
                    <div className="morning">
                    <div className='time-box'>
                            <div>09:00 AM</div>
                            <div>9:30 AM</div>
                            <div>10:00 AM</div>
                            <div>10:15 AM</div>
                            <div>10:45 AM</div>
                            <div>11:00 AM</div>

                        </div>
                    </div>
                    <h3 className='heading-1'>Evening </h3>
                    <div className="evening">
                    <div className='time-box time-box-evening '>
                            <div>04:00 PM</div>
                            <div>04:15 PM</div>
                            <div>04:30 PM</div>
                            <div>04:45 PM</div>
                            <div>05:00 PM</div>
                            

                        </div>
                    </div>
                    <div className='book-appoinment'>Make an Appoinment</div>
                </div>
            </div>
        </>
    )
}
