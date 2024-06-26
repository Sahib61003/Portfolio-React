import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("");
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
                <li className={menu === 'home' ? 'active' : ''}>
                    <p onClick={() => closeMobileMenu('home')}> Home </p> 
                    <img src={underline} alt=''/> 
                </li>
                <li className={menu === 'about' ? 'active' : ''}>
                    <a href='#about'> 
                        <p onClick={() => closeMobileMenu('about')}> About </p> 
                    </a> 
                    <img src={underline} alt=''/> 
                </li>
                <li className={menu === 'services' ? 'active' : ''}>
                    <a href='#services'> 
                        <p onClick={() => closeMobileMenu('services')}> Services </p> 
                    </a> 
                    <img src={underline} alt=''/> 
                </li>
                <li className={menu === 'projects' ? 'active' : ''}>
                    <a href='#work'> 
                        <p onClick={() => closeMobileMenu('projects')}> Projects </p>
                    </a> 
                    <img src={underline} alt=''/> 
                </li>
                <li className={menu === 'contact' ? 'active' : ''}>
                    <a href='#contact'> 
                        <p onClick={() => closeMobileMenu('contact')}> Contact </p> 
                    </a> 
                    <img src={underline} alt=''/> 
                </li>
            </ul>
            <a href="#contact" onClick={() => closeMobileMenu('contact')}>
                <div className='nav-connect'> Connect with Me </div>
            </a>
        </div>
    );
};

export default Navbar;
