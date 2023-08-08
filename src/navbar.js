import React, {useState} from "react";
import "./Navbar.css"
import icon from './icon/location.png'; 
import iconPhone from './icon/phone.png'; 
import iconTime from './icon/time.png'; 
import iconInsta from './icon/instagram.png'; 
import iconFace from './icon/facebook.png'; 


 
export default function Navbar() {
    


    function goHome() {
        document.location.href = `/`
    }

    function goInsta() {
        document.location.href = `https://www.instagram.com/peterbsada/`
    }

    function goFacebook() {
        document.location.href = `https://www.facebook.com/`
    }


    

    return (
        <>
            <nav className="navbar">
                <h1 className="logo" onClick={goHome}> Körkortsaspirant</h1>
                <ul>
                    <li className="nav2">
                        <a>Körkortspaketet</a>
                        <div className="dropdown-content">
                            <a href="/körkortspaketet50">50 minuter</a>
                            <a href="/körkortspaketet">70 minuter</a>
                        </div>
                    </li>
                    <li className="nav3">
                        <a>Priser</a>
                        <div className="dropdown-content">
                            <a href="/pris50min">50 minuter</a>
                            <a href="/pris">70 minuter</a>
                        </div>
                    </li>
                    <li className="nav1">
                        <a href="/information">Information</a>
                    </li>
                </ul>
            </nav>
            <div className="navbar-smalbox">
                <div className="navbar-location">
                    <img className='location-bild' src={iconPhone} alt='Logo' />
                    <h3>Telefon: 072423528</h3>
                    <div className="navbar-location time-icon">
                        <img className='location-bild' src={iconTime} alt='Logo' />
                    <h3>Mån - Fre : 07.00 AM - 17.00 PM</h3>
                </div>
                </div>                
          
                <div className="navbar-location">
                    <img className='location-bild' src={icon} alt='Logo' />
                    <h3>Kvarnhagsplan 118, 165 54 Hässelby</h3>
                    <div className="navbar-location">
                    <img className='social-bild' src={iconInsta} onClick={goInsta} alt='Logo' />
                    <img className='social-bild' src={iconFace}  onClick={goFacebook} alt='Logo' />
                    </div>
                </div>
            </div>
        </>
    )
}