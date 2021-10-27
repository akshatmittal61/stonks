import React from 'react'
import signin__image from '../../images/signin.svg'

const SignIn = ({ sign }) => {
    return (
        <section className="sign-in" id="about">
            <div className="sign-in-frame">
                <div className="sign-in-box">
                    <siv className="sign-in-content">
                        <div className="sign-in-content-title">
                            Sign In
                        </div>
                        <form className="sign-in-content-form">
                            <div className="sign-in-content-form__group">
                                <input
                                    className="sign-in-content-form__input"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="sign-in-content-form__group">
                                <input
                                    className="sign-in-content-form__input"
                                    type="password"
                                    name="paddword"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div className="sign-in-content-form__group">
                                <button className="sign-in-content-form__button" type="submit">Login</button>
                            </div>
                        </form>
                        <div className="sign-in-content-signup">
                            <span onClick={sign}>I don't have an account</span>
                        </div>
                    </siv>
                    <div className="sign-in-image" style={{ backgroundImage: `url(${signin__image})` }}></div>
                </div>
            </div>
        </section>
    )
}

export default SignIn
