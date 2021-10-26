import React from 'react'
import favicon from '../images/favicon.png'
import logo from '../images/logo.png'
import fb from '../images/facebook.svg'
import ld from '../images/linkedin.svg'
import ig from '../images/instagram.svg'
import gh from '../images/github.svg'

const FooterSocialIcon = ({ link, src, alt }) => {
    return (
        <div className="footer-social-icon fb">
            <a href={link} className="footer-social-icon__link">
                <img src={src} className="footer-social-icon__img" alt={alt} />
            </a>
        </div>
    )
}
const FooterEvents = ({ link, text }) => {
    return (
        <span className="footer-event">
            <a href={link} className="footer-event-link">{text}</a>
        </span>
    )
}

const Footer = () => {
    const socialicons = [
        {
            link: "https://www.facebook.com/TeamAAVESH/",
            src: fb,
            alt: "Facebook"
        },
        {
            link: "https://www.linkedin.com/company/aavesh-iiitu/",
            src: ld,
            alt: "LinkedIn"
        },
        {
            link: "https://www.instagram.com/teamaavesh/",
            src: ig,
            alt: "Instagram"
        },
        {
            link: "https://github.com/Aavesh-IIITU",
            src: gh,
            alt: "GitHub"
        }
    ]
    const events = [
        {
            link: "https://akshatmitta61.github.io/treasure",
            text: "Treasure Hunt"
        },
        {
            link: "https://akshatmitta61.github.io/quiz",
            text: "Quiz"
        },
        {
            link: "https://akshatmitta61.github.io/meme",
            text: "Meme making"
        },
        {
            link: "https://akshatmitta61.github.io/ideathon",
            text: "Ideathon"
        }
    ]
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
                        {
                            socialicons.map((icon, index) => (
                                <FooterSocialIcon key={index} link={icon.link} src={icon.src} alt={icon.alt} />
                            ))
                        }
                    </div>
                    <div className="footer-events">
                        {
                            events.map((event, index) => (
                                <FooterEvents key={index} link={event.link} text={event.text} />
                            ))
                        }
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
