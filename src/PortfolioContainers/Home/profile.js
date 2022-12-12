import React from 'react';
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
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}
