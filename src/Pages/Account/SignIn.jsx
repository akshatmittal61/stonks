import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import signin__image from '../../images/signin.svg'

const SignIn = ({ sign, submit }) => {
    AOS.init();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        let newUser = {
            ...user,
            [name]: value
        }
        setUser(newUser);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        submit(user);
        setUser({
            email: "",
            password: ""
        })
    }
    return (
        <section className="sign-in" id="about" data-aos="fade-up">
            <div className="sign-in-frame">
                <div className="sign-in-box">
                    <div className="sign-in-content">
                        <div className="sign-in-content-title">
                            Sign In
                        </div>
                        <form className="sign-in-content-form" onSubmit={handleSubmit}>
                            <div className="sign-in-content-form__group">
                                <input
                                    className="sign-in-content-form__input"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="sign-in-content-form__group">
                                <input
                                    className="sign-in-content-form__input"
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={user.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="sign-in-content-form__group">
                                <button className="sign-in-content-form__button" type="submit">Login</button>
                            </div>
                        </form>
                        <div className="sign-in-content-signup">
                            <span onClick={sign}>I don't have an account</span>
                        </div>
                    </div>
                    <div className="sign-in-image" style={{ backgroundImage: `url(${signin__image})` }}></div>
                </div>
            </div>
        </section>
    )
}

export default SignIn
