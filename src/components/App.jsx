import React, { useState } from 'react'
import About from './About'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Portfolio from '../Pages/Portfolio/Portfolio'
import Rules from '../Pages/Rules/Rules'

const App = () => {
    const [render, setRender] = useState(3);
    const user = {
        name: "",
        img: ""
    }
    const handleRender = (link) => {
        setRender(link + 1);
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
                        <Rules />
                    </>
                )
            }
            {
                render === 4 && (
                    <>
                        <Header GoToLink={handleRender} style={{ background: "var(--primary)" }} />
                        <Portfolio user={user} />
                    </>
                )
            }

            <Footer GoTo={handleRender} />
        </>
    )
}

export default App
