import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Profile = ({ account, LogOut, submit }) => {
    AOS.init();
    const [about, setAbout] = useState(account.about !== "" ? account.about : "About Me");
    const handleChange = (e) => {
        setAbout(e.target.value);
        submit(e.target.value);
    }
    const handleLogOut = () => {
        LogOut();
    }
    return (
        <section className="profile" id="about" data-aos="fade-up">
            <div className="profile-frame">
                <div className="profile-box">
                    <div className="profile-head">
                        <div className="profile-head-image">
                            <img className="profile-head-image__img" src={account.img} alt="Profile" />
                        </div>
                        <div className="profile-head-content">
                            <div className="profile-head-content__name">
                                <span>{account.fname !== "" ? `${account.fname} ${account.lname}` : "Your Name Here"}</span>
                            </div>
                            <div className="profile-head-content__about">
                                <input value={about} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="profile-body">
                        <div className="profile-body-group">
                            <div className="profile-body-group__title">
                                E Mail:
                            </div>
                            <div className="profile-body-group__content">
                                {`${account.email}`}
                            </div>
                        </div>
                        <div className="profile-body-group">
                            <div className="profile-body-group__title">
                                Gender:
                            </div>
                            <div className="profile-body-group__content">
                                {`${account.gender === 'M' ? "Male" : (account.gender === 'F' ? "Female" : "Prefer not to say")}`}
                            </div>
                        </div>
                    </div>
                    <div className="profile-logout">
                        <div className="profile-logout-container">
                            <button className="profile-logout-container__button" onClick={() => { handleLogOut() }}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile
