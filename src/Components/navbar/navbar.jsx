import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleMobileMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    const closeMobileMenu = (menuItem) => {
        setMenu(menuItem);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="navbar">
            <img src={logo} alt="logo"/>
            <div className="checkbtn" onClick={handleMobileMenuToggle}>
                <i className="fas fa-bars"></i>
            </div>
            <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <li> 
                    <p onClick={() => closeMobileMenu('home')}> Home </p> 
                    {menu === 'home' && <img src={underline} alt=''/>} 
                </li>
                <li> 
                    <a href='#about'> 
                        <p onClick={() => closeMobileMenu('about')}> About </p> 
                    </a> 
                    {menu === 'about' && <img src={underline} alt=''/>} 
                </li>
                <li> 
                    <a href='#services'> 
                        <p onClick={() => closeMobileMenu('services')}> Services </p> 
                    </a> 
                    {menu === 'services' && <img src={underline} alt=''/>} 
                </li>
                <li> 
                    <a href='#work'> 
                        <p onClick={() => closeMobileMenu('projects')}> Projects </p>
                    </a> 
                    {menu === 'projects' && <img src={underline} alt=''/>} 
                </li>
                <li> 
                    <a href='#contact'> 
                        <p onClick={() => closeMobileMenu('contact')}> Contact </p> 
                    </a> 
                    {menu === 'contact' && <img src={underline} alt=''/>} 
                </li>
            </ul>
            <div className='nav-connect'> Connect with Me </div>
        </div>
    );
};

export default Navbar;
