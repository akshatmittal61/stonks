import React from 'react'
import signup__image from '../../images/signup.svg'

const SignUp = ({sign}) => {
    return (
        <section className="sign-up" id="about">
            <div className="sign-up-frame">
                <div className="sign-up-box">
                    <siv className="sign-up-content">
                        <div className="sign-up-content-title">
                            Sign Up
                        </div>
                        <form className="sign-up-content-form">
                            <div className="sign-up-content-form__group">
                                <input
                                    className="sign-up-content-form__input"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="sign-up-content-form__group">
                                <input
                                    className="sign-up-content-form__input"
                                    type="password"
                                    name="paddword"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div className="sign-up-content-form__group">
                                <input
                                    className="sign-up-content-form__input"
                                    type="password"
                                    name="paddword"
                                    placeholder="Re-enter your password"
                                />
                            </div>
                            <div className="sign-up-content-form__group">
                                <legend className="sign-up-content-form__head">Gender: </legend>
                                <label>
                                    <input
                                        className="sign-up-content-form__input"
                                        type="radio"
                                        name="gender"
                                        placeholder="Male"
                                    />
                                    Male
                                </label>
                                <label>
                                    <input
                                        className="sign-up-content-form__input"
                                        type="radio"
                                        name="gender"
                                        placeholder="Female"
                                    />
                                    Female
                                </label>
                                <label>
                                    <input
                                        className="sign-up-content-form__input"
                                        type="radio"
                                        name="gender"
                                        placeholder="Rather not say"
                                    />
                                    Rather not say
                                </label>
                            </div>
                            <div className="sign-up-content-form__group">
                                <button className="sign-up-content-form__button" type="submit">Sign Up</button>
                            </div>
                        </form>
                        <div className="sign-up-content-signin">
                            <span onClick={sign}>I already have an account</span>
                        </div>
                    </siv>
                    <div className="sign-up-image" style={{ backgroundImage: `url(${signup__image})` }}></div>
                </div>
            </div>
        </section>
    )
}

export default SignUp
