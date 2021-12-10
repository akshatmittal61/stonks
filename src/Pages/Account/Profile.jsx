import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Cookies from "js-cookie";
import man from '../../images/man.svg'
import woman from '../../images/woman.svg'
import person from "../../images/person.svg";

const Profile = ({ LogOut, submit }) => {
  AOS.init();
  const [account, setAccount] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    gender: "",
    img: "",
    about: "",
  });
  const [about, setAbout] = useState(
    account.about !== "" ? account.about : "About Me"
  );
  const handleChange = (e) => {
    setAbout(e.target.value);
    let user={
        email:Cookies.get('email'),
        about:about
    };
    axios
          .post("http://localhost:4000/profile", user)
          .then((res) => {
            
          })
          .catch((error) => {
            console.log(error);
          });
    
  };
  const handleLogOut = () => {
      Cookies.remove('email');
      Cookies.remove('password');
    LogOut();
  };
  useEffect(() => {
    let Signin = {
      email: Cookies.get("email"),
      password: Cookies.get("password") 
    };
    axios
      .post("http://localhost:4000/login", Signin)
      .then(function (response) {
        
        if (response.data.status) {
          setAbout(response.data.about);
          setAccount({
            fname: response.data.fname,
            lname: response.data.lname,
            email: response.data.email,
            password: response.data.password,
            gender: response.data.gender,
            img: (response.data.gender === 'M' ? man : (response.data.gender === 'F' ? woman : person)),
            about: response.data.about,
          });
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
  },[]);
  return (
    <section className="profile" id="about" data-aos="fade-up">
      <div className="profile-frame">
        <div className="profile-box">
          <div className="profile-head">
            <div className="profile-head-image">
              <img
                className="profile-head-image__img"
                src={account.img}
                alt="Profile"
              />
            </div>
            <div className="profile-head-content">
              <div className="profile-head-content__name">
                <span>
                  {account.fname !== ""
                    ? `${account.fname} ${account.lname}`
                    : "Your Name Here"}
                </span>
              </div>
              <div className="profile-head-content__about">
                <input value={about} onChange={handleChange} />
              </div>
            </div>
          </div>
          <div className="profile-body">
            <div className="profile-body-group">
              <div className="profile-body-group__title">E Mail:</div>
              <div className="profile-body-group__content">
                {`${account.email}`}
              </div>
            </div>
            <div className="profile-body-group">
              <div className="profile-body-group__title">Gender:</div>
              <div className="profile-body-group__content">
                {`${
                  account.gender === "M"
                    ? "Male"
                    : account.gender === "F"
                    ? "Female"
                    : "Prefer not to say"
                }`}
              </div>
            </div>
          </div>
          <div className="profile-logout">
            <div className="profile-logout-container">
              <button
                className="profile-logout-container__button"
                onClick={() => {
                  handleLogOut();
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
