import React from 'react'
import {FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi"
import './Footer.css';

const Footer = () => {
  return (
    <div className='app__footer section__padding app__bg bg-black backdrop-blur-sm text-white'>
 
    <div className="app__footer-links">
 
     <div className="app__footer-links_contact">
       <h1 className="app__footer-headtext">Contact Us</h1>
       <p className="p__opensans">Rua Cidade de Evora</p>
       <p className="p__opensans">+351 912 250 365</p>
       
       
     </div>
 
     <div className="app__footer-links_logo">
       <img className='w-10 h-10' src="/logo.png" alt="logo" />
       <p className="p__opensans">The best way to find yourself its to lose yourself in the service of others</p>

         <div className="app__footer-links_icons">
           <FiFacebook />
           <FiInstagram/>
           <FiTwitter/>
         </div>
     </div>
 
     <div className="app__footer-links_work">
     <h1 className="app__footer-headtext">Working Hours</h1>
       <p className="p__opensans">Monday-Friday:</p>
       <p className="p__opensans">09:00am - 18:00pm</p>
       <p className="p__opensans">Saturday-Sunday</p>
       <p className="p__opensans">10:00am - 15:00pm</p>
     </div>
     
 
    </div>
 
    <div className="fotter__copyright">
     <p>2023 Bustad G. All rights reserved</p>
    </div>
   </div>
  )
}

export default Footer