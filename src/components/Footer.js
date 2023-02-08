import './Footer.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaPhone, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div>
                  <h4>About</h4>
                  <p>Sports Junk is an app built for sports memorabilia enthusiasts. It is engineered to make it easier for collectors to manage, trade, sell, and add to their collection.</p>
                </div>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}} />
                    <div>
                        <p>Lincoln, NE</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}} />
                888-888-8888</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}} />
                sportsjunk@email.com</h4>
                </div>
            </div>
            <div className='right'>
              <div className='quick-links'>
                <Link to='/'>
                <h1>Sports Junk</h1>
                </Link>
                <ul className="footer-menu">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/collection'>Collection</Link>
                    </li>
                    <li>
                        <Link to='/marketplace'>Marketplace</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/loginsignup'>Login/Signup</Link>
                    </li>
                </ul>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;