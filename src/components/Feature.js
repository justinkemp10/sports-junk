import './Feature.css';
import React from 'react';
import { Link } from 'react-router-dom';
import IntroImg from "../assets/cards.jpg";

const Feature = () => {
  return (
    <div className='feature'>
        <div className='mask'>
            <img className='intro-img' 
            src={IntroImg} alt="IntroImg" />
        </div>
        <div className='content'>
            <p>Hello, welcome to</p>
            <h1>Sports Junk</h1>
            <div>
                <Link to='/marketplace' className='btn'>Marketplace</Link>
                <Link to='/contact' className='btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Feature;