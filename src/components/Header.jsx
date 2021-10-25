import React from 'react'
import logo from '../images/logo.png'

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
                            <li className="header-nav-list-item">
                                <span className="header-nav-list-link">
                                    <span className="header-nav-list-link__icon">
                                        <span className="material-icons">info</span>
                                    </span>
                                    <span className="header-nav-list-link__text">About</span>
                                </span>
                            </li>
                            <li className="header-nav-list-item">
                                <span className="header-nav-list-link">
                                    <span className="header-nav-list-link__icon">
                                        <span className="material-icons">integration_instructions</span>
                                    </span>
                                    <span className="header-nav-list-link__text">Rules</span>
                                </span>
                            </li>
                            <li className="header-nav-list-item">
                                <span className="header-nav-list-link">
                                    <span className="header-nav-list-link__icon">
                                        <span className="material-icons">business</span>
                                    </span>
                                    <span className="header-nav-list-link__text">NSE</span>
                                </span>
                            </li>
                            <li className="header-nav-list-item">
                                <span className="header-nav-list-link">
                                    <span className="header-nav-list-link__icon">
                                        <span className="material-icons">badge</span>
                                    </span>
                                    <span className="header-nav-list-link__text">Portfolio</span>
                                </span>
                            </li>
                            <li className="header-nav-list-item">
                                <span className="header-nav-list-link">
                                    <span className="header-nav-list-link__icon">
                                        <span className="material-icons">account_circle</span>
                                    </span>
                                    <span className="header-nav-list-link__text">Log In</span>
                                </span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
