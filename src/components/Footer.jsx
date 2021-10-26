import React from 'react'
import favicon from '../images/favicon.png'
import logo from '../images/logo.png'
import fb from '../images/facebook.svg'
import ld from '../images/linkedin.svg'
import ig from '../images/instagram.svg'
import gh from '../images/github.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="footer-left-image">
                        <img className="footer-left-image__img" src={favicon} alt="Stonks favicon" />
                    </div>
                </div>
                <div className="footer-mid">
                    <div className="footer-title">
                        Stonks | IIIT Una
                    </div>
                    <div className="footer-social">
                        <div className="footer-social-icon fb">
                            <a href="https://www.facebook.com/TeamAAVESH/" className="footer-social-icon__link">
                                <img src={fb} className="footer-social-icon__img" alt="Facebook" />
                            </a>
                        </div>
                        <div className="footer-social-icon ld">
                            <a href="https://www.linkedin.com/company/aavesh-iiitu/" className="footer-social-icon__link">
                                <img src={ld} className="footer-social-icon__img" alt="LinkedIn" />
                            </a>
                        </div>
                        <div className="footer-social-icon ig">
                            <a href="https://www.instagram.com/teamaavesh/" className="footer-social-icon__link">
                                <img src={ig} className="footer-social-icon__img" alt="Instagram" />
                            </a>
                        </div>
                        <div className="footer-social-icon gh">
                            <a href="https://github.com/Aavesh-IIITU" className="footer-social-icon__link">
                                <img src={gh} className="footer-social-icon__img" alt="GitHub" />
                            </a>
                        </div>
                    </div>
                    <div className="footer-events">
                        <span className="footer-event">
                            <a href="https://akshatmitta61.github.io/treasure" className="footer-event-link">Treasure Hunt</a>
                        </span>
                        <span className="footer-event">
                            <a href="https://akshatmitta61.github.io/quiz" className="footer-event-link">Quiz</a>
                        </span>
                        <span className="footer-event">
                            <a href="https://akshatmitta61.github.io/meme" className="footer-event-link">Meme making</a>
                        </span>
                        <span className="footer-event">
                            <a href="https://akshatmitta61.github.io/ideathon" className="footer-event-link">Ideathon</a>
                        </span>
                    </div>
                    <div className="footer-copyright">&copy; Aavesh - All rights reserved</div>
                </div>
                <div className="footer-right">
                    <div className="footer-right-image">
                        <img className="footer-right-image__img" src={logo} alt="Aavesh" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
