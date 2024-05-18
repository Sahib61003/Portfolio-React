import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'


const Navbar = () => {

    return (
        <div className="navbar">
            <img src={logo} alt=""/>
            <ul className='nav-menu'>
                <li> Home </li>
                <li> About </li>
                <li> Services </li>
                <li> Projects </li>
                <li> Contact </li>

            </ul>
            <div className='nav-connect'> Connect with Me </div>
        </div>
    )
}

export default Navbar