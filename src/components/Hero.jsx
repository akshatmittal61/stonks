import React from 'react'
import Header from './Header'
import frame from '../images/cave.jpeg'
import favicon from '../images/favicon.png'

const Hero = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${frame})` }}>
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
    )
}

export default Hero
