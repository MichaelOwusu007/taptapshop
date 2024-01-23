import React from 'react'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'
import hand_icon from '../assets/hand_icon.png'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
        <div className="hero_left">
            <h2>NEW ARIVALS ONLY</h2>
            <div>
                <div className="hero_hand_icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero_latest_btn">
                <div>Latest Colection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero_right">
            <img src={hero_image} alt="" />
        </div>
    </div>
  )
}

export default Hero