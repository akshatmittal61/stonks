import React from 'react'
import favicon from '../images/favicon.png'
import logo from '../images/logo.png'
import iiitu from '../images/iiitu.gif'

const Header = ({ GoToLink, style, home }) => {
    return (
        <header className="header" style={style}>
            <div className="header-box">
                <div className="header-logo">
                    {
                        home && (
                            <>
                                <a className="header-logo-image" href="https://iiitu.ac.in/">
                                    <img className="header-logo-image__img" src={iiitu} alt="III Una" />
                                </a>
                                <a className="header-logo-image" href="https://aavesh-iiitu.github.io/">
                                    <img className="header-logo-image__img" src={logo} alt="Stonks" />
                                </a>
                            </>
                        )
                    }
                    {
                        !home && (
                            <span className="header-logo-image" onClick={() => { GoToLink(0) }}>
                                <img className="header-logo-image__img" src={favicon} alt="Stonks" />
                            </span>
                        )
                    }
                </div>
                <div className="header-navbar">
                    <nav className="header-nav">
                        <ul className="header-nav-list">
                            <li className="header-nav-list-item">
                                <a className="header-nav-list-link" href="#about" target="_self">
                                    <span className="header-nav-list-link__icon">
                                        <span className="material-icons">info</span>
                                    </span>
                                    <span className="header-nav-list-link__text">About</span>
                                </a>
                            </li>
                            <li className="header-nav-list-item">
                                <button className="header-nav-list-link" onClick={() => { GoToLink(2) }}>
                                    <span className="header-nav-list-link__icon">
                                        <span className="material-icons">integration_instructions</span>
                                    </span>
                                    <span className="header-nav-list-link__text">Rules</span>
                                </button>
                            </li>
                            <li className="header-nav-list-item">
                                <a className="header-nav-list-link" href="https://nseindia.com" target="_blank" rel="noreferrer">
                                    <span className="header-nav-list-link__icon">
                                        <span className="material-icons">business</span>
                                    </span>
                                    <span className="header-nav-list-link__text">NSE</span>
                                </a>
                            </li>
                            <li className="header-nav-list-item">
                                <button className="header-nav-list-link" onClick={() => { GoToLink(3) }}>
                                    <span className="header-nav-list-link__icon">
                                        <span className="material-icons">badge</span>
                                    </span>
                                    <span className="header-nav-list-link__text">Portfolio</span>
                                </button>
                            </li>
                            <li className="header-nav-list-item">
                                <button className="header-nav-list-link" onClick={() => { GoToLink(4) }}>
                                    <span className="header-nav-list-link__icon">
                                        <span className="material-icons">account_circle</span>
                                    </span>
                                    <span className="header-nav-list-link__text">Log In</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
