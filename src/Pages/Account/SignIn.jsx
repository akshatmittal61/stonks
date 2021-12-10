import React, { useState,useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import signin__image from "../../images/signin.svg";
import axios from 'axios';
import Cookies from 'js-cookie';


const SignIn = ({ sign, submit }) => {
  AOS.init();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    let newUser = {
      ...user,
      [name]: value,
    };
    setUser(newUser);
  };
  useEffect(() => {
    let Signin = {
      email: Cookies.get("email"),
      password: Cookies.get("password"),
    };
    axios
      .post("http://localhost:4000/login", Signin)
      .then(function (response) {
        if (response.data.status) {
            submit(user);
        } else {
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    Signin = {
      email: "",
      password: "",
    };
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email !== "" && user.password !== "") {
      axios
        .post("http://localhost:4000/login", user)
        .then((response) => {
          console.log(response.data);
          if(response.data.status){
            Cookies.set('email',response.data.email,{expires:1});
            Cookies.set('password',response.data.password,{expires:1});
          }
          alert(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
      submit(user);
      setUser({
        email: "",
        password: "",
      });
    } else {
      alert("Please fill in the fields");
    }
  };
  return (
    <section className="sign-in" id="about" data-aos="fade-up">
      <div className="sign-in-frame">
        <div className="sign-in-box">
          <div className="sign-in-content">
            <div className="sign-in-content-title">Sign In</div>
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
                <button className="sign-in-content-form__button" type="submit">
                  Login
                </button>
              </div>
            </form>
            <div className="sign-in-content-signup">
              <span onClick={sign}>I don't have an account</span>
            </div>
          </div>
          <div
            className="sign-in-image"
            style={{ backgroundImage: `url(${signin__image})` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
