import React from 'react'
import '../Header/header.css'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <>
            <header className='header'>
                <h1>AMURTAM</h1>
                <div className='navigation'>
                  <Link to={'/'}> Home </Link>
                    <Link to={'/find'}>Find Doctors</Link>
                    <Link to={'/about'}>About Us</Link>
                </div>
                <div className="buttons-group">
                    <button className="btn">Login</button>
                    <button className="btn signup">Sign Up</button>
                </div>
            </header>
        </>
    )
}
