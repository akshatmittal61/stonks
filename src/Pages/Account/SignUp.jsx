import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import signup__image from '../../images/signup.svg'

const SignUp = ({ sign, submit }) => {
    AOS.init();
    const [checkPswd, setCheckPswd] = useState("");
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        gender: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        let newUser = {
            ...user,
            [name]: value
        }
        setUser(newUser);
    }
    const reenter = (e) => {
        setCheckPswd(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (checkPswd === user.password) {
            setUser({
                fname: "",
                lname: "",
                email: "",
                password: "",
                gender: ""
            })
            submit(user);
        }
        else {
            alert("The password does not match. Try Again !");
            setCheckPswd("")
        };
        setCheckPswd("");
    }
    return (
        <section className="sign-up" id="about" data-aos="fade-up">
            <div className="sign-up-frame">
                <div className="sign-up-box">
                    <div className="sign-up-content">
                        <div className="sign-up-content-title">
                            Sign Up
                        </div>
                        <form className="sign-up-content-form" onSubmit={handleSubmit}>
                            <div className="sign-up-content-form__group">
                                <input
                                    className="sign-up-content-form__input"
                                    type="text"
                                    name="fname"
                                    placeholder="First Name"
                                    value={user.fname}
                                    onChange={handleChange}
                                />
                                <input
                                    className="sign-up-content-form__input"
                                    type="text"
                                    name="lname"
                                    placeholder="Last Name"
                                    value={user.lname}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="sign-up-content-form__group">
                                <input
                                    className="sign-up-content-form__input"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={user.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="sign-up-content-form__group">
                                <input
                                    className="sign-up-content-form__input"
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={user.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="sign-up-content-form__group">
                                <input
                                    className="sign-up-content-form__input"
                                    type="password"
                                    name="re-password"
                                    placeholder="Re-enter your password"
                                    value={checkPswd}
                                    onChange={reenter}
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
                                        value={'M'}
                                        onChange={handleChange}
                                        checked={user.gender === 'M'}
                                    />
                                    Male
                                </label>
                                <label>
                                    <input
                                        className="sign-up-content-form__input"
                                        type="radio"
                                        name="gender"
                                        placeholder="Female"
                                        value={'F'}
                                        onChange={handleChange}
                                        checked={user.gender === 'F'}
                                    />
                                    Female
                                </label>
                                <label>
                                    <input
                                        className="sign-up-content-form__input"
                                        type="radio"
                                        name="gender"
                                        placeholder="Rather not say"
                                        value={'O'}
                                        onChange={handleChange}
                                        checked={user.gender === 'O'}
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
                    </div>
                    <div className="sign-up-image" style={{ backgroundImage: `url(${signup__image})` }}></div>
                </div>
            </div>
        </section>
    )
}

export default SignUp
