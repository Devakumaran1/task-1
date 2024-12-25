import React from 'react'
import './header.css'
import profile_img from '../../assets/profile_img.jpg'
import { Content } from '../Content/Content'

export const Header = () => {
    return (
        <>
            
            <div className="banner">
                <div className='all-details'>
                    <div className="banner-details">
                        <img src={profile_img} alt="" />
                        <div className="person-detail">
                            <h3>Devakumaran G 🤩</h3>
                            <p>Gynecologist</p>
                            <p>4.5 ⭐⭐⭐⭐</p>
                        </div>
                    </div>
                    <div className="achievements">
                        <div><p>Followers</p><h2>850</h2></div>
                        <div><p>Following</p><h2>18K</h2></div>
                        <div><p>Post</p><h2>250</h2></div>
                    </div>
                    <div className="btn book ">Book Appoinment</div>
                </div>
            </div>
            <Content/>
        </>
    )
}
