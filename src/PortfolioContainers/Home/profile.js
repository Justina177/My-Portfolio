import React from 'react';
import {
BsGithub,
BsFacebook,
BsGoogle,
BsInstagram,
BsTwitter,
BsLinkedin,
// // FaYahoo,
// FaWhatsappSquare,
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
                    <a href='justinaenenche@yahoo.com'>
                    <FaYahoo/>
                    </a>
                    <a href='#home'>
                    <FaWhatsappSquare/>
                    </a>          
                </div>
            </div>
        </div>
    </div>
  )
}
