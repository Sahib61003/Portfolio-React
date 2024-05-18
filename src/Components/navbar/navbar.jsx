import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'



const Navbar = () => {
    const [menu, setMenu] = useState("home");

    return (
        <div className="navbar">
            <img src={logo} alt=""/>
            <ul className='nav-menu'>
                <li> <p onClick={()=>setMenu("home")}> Home </p> {menu==='Home'? <img src={underline} alt=''/>:<></> } </li>
                <li> <a href='#about'> <p onClick={()=>setMenu("about me")}> About </p> </a> {menu==='About me'? <img src={underline} alt=''/>:<></> } </li>
                <li> <a href='#services'> <p onClick={()=>setMenu("services")}> Services </p> </a> {menu==='Services'? <img src={underline} alt=''/>:<></> } </li>
                <li> <a href='#work'> <p onClick={()=>setMenu("projects")}> Projects </p> </a>{ menu==='Projects'? <img src={underline} alt=''/>:<></> } </li>
                <li> <a href='#contact'> <p onClick={()=>setMenu("contact")}> Contact </p> </a> {menu==='Contact'? <img src={underline} alt=''/>:<></> } </li>

            </ul>
            <div className='nav-connect'> Connect with Me </div>
        </div>
    )
}

export default Navbar