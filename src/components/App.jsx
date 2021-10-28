import React, { useState } from 'react'
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Portfolio from '../Pages/Portfolio/Portfolio'
import Rules from '../Pages/Rules/Rules'
import ScrollToTop from './ScrollToTop'
import SignIn from '../Pages/Account/SignIn'
import SignUp from '../Pages/Account/SignUp'
import Profile from '../Pages/Account/Profile'
import man from '../images/man.svg'
import woman from '../images/woman.svg'
import person from '../images/person.svg'

const App = () => {
    const [render, setRender] = useState(1);
    const [stocks, setStocks] = useState(Array(10).fill({ company: "", volume: "" }));
    const [accountExist, setAccountExist] = useState(true);
    const [loggedIn, setLoggedIn] = useState(true);
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        gender: '',
        img: person,
        about: ""
    });
    const handleRender = (link) => {
        setRender(link + 1);
        setUser(() => {
            return {
                ...user,
                img: (user.img !== person && user.img !== man && user.img !== woman) ? user.img : (user.gender === 'M' ? man : (user.gender === 'F' ? woman : person))
            }
        })
    }
    const handleChangeStocks = (e) => {
        setStocks(e);
    }
    const [showScrollButton, setshowScrollButton] = useState(false);
    window.onscroll = () => {
        if (document.documentElement.scrollTop > 200) setshowScrollButton(true);
        else setshowScrollButton(false);
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    const handleSignIn = (a) => {
        console.log(a);
        setAccountExist(true);
        setLoggedIn(true);
    }
    const handleSignUp = (a) => {
        console.log(a);
        setUser({
            fname: a.fname,
            lname: a.lname,
            email: a.email,
            password: a.password,
            gender: a.gender,
            img: (user.img !== person && user.img !== man && user.img !== woman) ? user.img : (a.gender === 'M' ? man : (a.gender === 'F' ? woman : person))
        })
        setLoggedIn(false);
        setAccountExist(true);
    }
    return (
        <>
            {
                render === 1 && (
                    <>
                        <Hero GoTo={handleRender} />
                        <About />
                    </>
                )
            }
            {
                render === 3 && (
                    <>
                        <Header GoToLink={handleRender} style={{ background: "var(--primary)" }} />
                        <main>
                            <Rules GoTo={handleRender} />
                        </main>
                    </>
                )
            }
            {
                render === 4 && (
                    <>
                        <Header GoToLink={handleRender} style={{ background: "var(--primary)" }} />
                        <main>
                            <Portfolio user={user} GoTo={handleRender} stocks={stocks} submit={handleChangeStocks} />
                        </main>
                    </>
                )
            }
            {
                render === 5 && (
                    <>
                        <Header GoToLink={handleRender} style={{ background: "var(--primary)" }} />
                        <main>
                            <div className="account-heading">
                                <div className="account-heading__back">
                                    <button className="btn account-heading__back__button" onClick={() => { handleRender(0) }}>
                                        <span className="material-icons">arrow_back</span>
                                    </button>
                                </div>
                                <div className="account-heading__text">Your Account</div>
                            </div>
                            {
                                accountExist ? (
                                    loggedIn ? (
                                        <Profile account={user} LogOut={() => { setLoggedIn(false); setAccountExist(true); }} />
                                    ) : (
                                        <SignIn
                                            sign={() => { setAccountExist(false) }}
                                            submit={handleSignIn}
                                        />
                                    )
                                ) : (
                                    <SignUp
                                        sign={() => { setAccountExist(true) }}
                                        submit={handleSignUp}
                                    />
                                )
                            }
                        </main>
                    </>
                )
            }
            {
                showScrollButton && <ScrollToTop onClick={topFunction} />
            }
            <Footer GoTo={handleRender} />
        </>
    )
}

export default App
