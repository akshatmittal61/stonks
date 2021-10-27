import React, { useState } from 'react'
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Portfolio from '../Pages/Portfolio/Portfolio'
import Rules from '../Pages/Rules/Rules'
import ScrollToTop from './ScrollToTop'

const App = () => {
    const [render, setRender] = useState(4);
    const [stocks, setStocks] = useState(Array(10).fill({ company: "", volume: "" }));
    const user = {
        name: "Akshat Mittal",
        img: "",
        gender: '',
        about: "Its not a crime to love what you cannot explain"
    }
    const handleRender = (link) => {
        setRender(link + 1);
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
                        <Rules GoTo={handleRender} />
                    </>
                )
            }
            {
                render === 4 && (
                    <>
                        <Header GoToLink={handleRender} style={{ background: "var(--primary)" }} />
                        <Portfolio user={user} GoTo={handleRender} stocks={stocks} submit={handleChangeStocks} />
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
