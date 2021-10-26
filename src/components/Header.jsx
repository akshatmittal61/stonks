import React from 'react'
import logo from '../images/logo.png'

const NavLink = ({ icon, text, link, target }) => {
    return (
        <li className="header-nav-list-item" >
            <a className="header-nav-list-link" href={link} target={target}>
                <span className="header-nav-list-link__icon">
                    <span className="material-icons">{icon}</span>
                </span>
                <span className="header-nav-list-link__text">{text}</span>
            </a>
        </li >
    )
}

const Header = () => {
    const navlinks = [
        {
            icon: "info",
            text: "About",
            link: "#about",
            target: "_self"
        },
        {
            icon: "integration_instructions",
            text: "Rules",
            link: "#",
            target: "_self"
        },
        {
            icon: "business",
            text: "NSE",
            link: "https://nseindia.com",
            target: "_blank"
        },
        {
            icon: "badge",
            text: "Portfolio",
            link: "#",
            target: "_self"
        },
        {
            icon: "account_circle",
            text: "Log In",
            link: "#",
            target: "_self"
        }
    ]
    return (
        <header className="header">
            <div className="header-box">
                <div className="header-logo">
                    <a className="header-logo-image" href="https://aavesh-iiitu.github.io/">
                        <img className="header-logo-image__img" src={logo} alt="Stonks" />
                    </a>
                </div>
                <div className="header-navbar">
                    <nav className="header-nav">
                        <ul className="header-nav-list">
                            {
                                navlinks.map((navlink, index) => (
                                    <NavLink key={index} icon={navlink.icon} text={navlink.text} link={navlink.link} target={navlink.target} />
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
