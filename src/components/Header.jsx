import React from 'react'
import logo from '../images/logo.png'

const NavLink = ({ icon, text }) => {
    return (
        <li className="header-nav-list-item" >
            <span className="header-nav-list-link">
                <span className="header-nav-list-link__icon">
                    <span className="material-icons">{icon}</span>
                </span>
                <span className="header-nav-list-link__text">{text}</span>
            </span>
        </li >
    )
}

const Header = () => {
    return (
        <header className="header">
            <div className="header-box">
                <div className="header-logo">
                    <a className="header-logo-image" href="https://aavesh-iiitu.github.io/" target="_blank">
                        <img className="header-logo-image__img" src={logo} alt="Stonks" />
                    </a>
                </div>
                <div className="header-navbar">
                    <nav className="header-nav">
                        <ul className="header-nav-list">
                            <NavLink icon="info" text="About" />
                            <NavLink icon="integration_instructions" text="Rules" />
                            <NavLink icon="business" text="NSE" />
                            <NavLink icon="badge" text="Portfolio" />
                            <NavLink icon="account_circle" text="Log In" />
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
