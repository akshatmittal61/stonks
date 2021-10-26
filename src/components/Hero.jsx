import React, { useState } from 'react'
import Header from './Header'
import frame from '../images/cave.png'
import favicon from '../images/favicon.png'
import back from '../images/mountains.jpg'

const Hero = () => {
    const [phone, setPhone] = useState((window.innerWidth > 1200 ? true : false));
    window.addEventListener("resize", () => {
        setPhone(document.body.clientWidth > 1200 ? true : false);
    })
    return (
        <div className="hero" style={{ backgroundImage: `url(${back})` }}>
            <div className="hero-box" style={{ backgroundImage: `url(${phone ? frame : null})` }}>
                <Header />
                <div className="hero-content">
                    <div className="hero-title">
                        Aavesh IIITU
                    </div>
                    <div className="hero-subtitle">
                        presents
                    </div>
                    <div className="hero-heading">
                        <div className="hero-heading-image">
                            <img className="hero-heading-image__img" src={favicon} alt="Stonks favicon" />
                        </div>
                        <div className="hero-heading-text">
                            <span>Stonks: </span>
                            <span>Finding Next Buffet</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
