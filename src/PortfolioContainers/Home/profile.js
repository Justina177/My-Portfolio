import React from 'react';
import './Profile.css'
import Typical from 'react-typical';

import {
BsGithub,
BsFacebook,
BsGoogle,
BsInstagram,
BsTwitter,
BsLinkedin,
BsWhatsapp,
} from "react-icons/bs";

import {
    FaWhatsappSquare,
    FaYahoo
}  from "react-icons/fa";


export default function Profile () {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>                        
                        <a href='#home'>
                        <BsFacebook/>
                        </a>
                        <a href='#home'>
                        <BsGithub/>
                        </a>
                        <a href='#home'>
                        <BsInstagram/>
                        </a>
                        <a href='#home'>
                        <BsLinkedin/>
                        </a>
                        <a href='#home'>
                        <BsGoogle/>
                        </a>
                        <a href='https://twitter.com/JustinaEnenche'>
                        <BsTwitter/>
                        </a>
                        <a href='#home'>
                        <BsWhatsapp/>
                        </a>
                        <a href='../ContactMe'>
                        <FaYahoo/>
                        </a>
                        <a href='#home'>
                        <FaWhatsappSquare/>
                        </a>          
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'M <span className="highlighted-text">Enenche</span> Justina
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        {" "}
                        <h1>
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "Ethusiatic Dev 🔴 ",
                                1000,
                                "Full Stack Developer 💻 ",
                                1000,
                               "MERN Stack Dev 😎",
                                1000,
                                "React/React Native Dev 🖲",
                                1000,
                                "Ethusiatic Dev 🥏",
                                1000,
                            ]}
                            />

                        </h1>
                        <span className="profile-role-tagline">
                            Knack of bulding applications with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className="profile-options">
                    <button className="btn primary-btn">
                        {" "}
                        hire Me{" "}
                    </button>
                    <a href='Justina_Enenche_Resume.pdf' download='Justina_Enenche_Resume.pdf'>
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
            <div className="profile-picture-background"></div>
            </div>
        </div>
    </div>
  )
}
