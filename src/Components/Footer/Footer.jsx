import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-right">
                <img src={logo} alt=''/>
                <p> I am an AI enthusiast from India, currently pursuing Bachelors of Technology in AI and ML and will be graduating in 2025. Looking for a career start. </p>
            </div>
            {/* <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=""/>
                    <input type="email" placeholder="Enter your email"/>
                </div>
                <div className="footer-subscribe"> Subscribe </div>
            </div> */}
        </div>
    <hr className='bottom-line'/>
    <div className="footer-bottom">
        <div className="footer-bottom-right">
            <p> © 2024 All rights reserved </p>
        </div>
        {/* <div className="footer-bottom-right">
            <p> Privacy Policy </p>
            <p> Terms of Service </p>
            <p> Connect with me </p>
            </div> */}
        </div>
    </div>
  )
}

export default Footer