import React, { useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Portfolio = ({ user, GoTo, stocks, submit }) => {
    AOS.init();
    const companySuggestions = ["Google", "Microsoft", "Facebook", "Apple", "Amazon", "Netflix", "Tesla"];
    const [allStocks, setAllStocks] = useState(stocks);
    const handleChange = (e, id) => {
        const { name, value } = e.target;
        const changeStocks = [...allStocks];
        changeStocks[id] = {
            ...changeStocks[id],
            [name]: value
        };
        setAllStocks(changeStocks);
    }
    const submitStocks = (e) => {
        e.preventDefault();
        submit(allStocks);
    }
    return (
        <section className="portfolio" id="about">
            <div className="portfolio-heading">
                <div className="portfolio-heading__back">
                    <button className="btn portfolio-heading__back__button" onClick={() => { GoTo(0) }}>
                        <span className="material-icons">arrow_back</span>
                    </button>
                </div>
                <div className="portfolio-heading__text">Your Portfolio</div>
            </div>
            <div className="portfolio-user" data-aos="fade-up">
                <div className="portfolio-user-image">
                    <img className="portfolio-user-image__img" src={user.img} alt="User Profile" />
                </div>
                <div className="portfolio-user-content">
                    <div className="portfolio-user-content__name">
                        <span>
                            {user.fname !== "" ? `${user.fname} ${user.lname}` : "Your Name Here"}
                        </span>
                    </div>
                    <div className="portfolio-user-content__about">
                        <span>
                            {user.about !== "" ? user.about : "About Me"}
                        </span>
                    </div>
                </div>
            </div>
            <div className="portfolio-content" data-aos="fade-up">
                <form className="portfolio-form" onSubmit={submitStocks}>
                    <table className="table">
                        <tr className="table-tr">
                            <th className="table-th">
                                Company Name
                            </th>
                            <th className="table-th">
                                Shares issued
                            </th>
                        </tr>
                        {
                            allStocks.map((stock, index) => {
                                return (
                                    <tr key={index} className="table-tr">
                                        <td className="table-td table-td-company">
                                            <input
                                                className="table-td-company__input"
                                                type="text"
                                                placeholder="Company Name"
                                                list="typeSuggestions"
                                                name="company"
                                                value={stock.company}
                                                onChange={(e) => { handleChange(e, index) }}
                                            />
                                            <datalist id="typeSuggestions">
                                                {
                                                    companySuggestions.map((companySuggestion, index) => (
                                                        <option value={companySuggestion} key={index} />
                                                    ))
                                                }
                                            </datalist>
                                        </td>
                                        <td className="table-td table-td-volume">
                                            <input
                                                className="table-td-volume__input"
                                                type="number"
                                                min="1"
                                                placeholder="Volume"
                                                name="volume"
                                                value={stock.volume}
                                                onChange={(e) => { handleChange(e, index) }}
                                            />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        <tr className="portfolio-form-button table-tr">
                            <td className="portfolio-form-button__save table-td" colSpan="2" style={{ width: "20%", padding: 0 }}>
                                <button className="portfolio-form-button__save__button" type="submit">Save</button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </section>
    )
}

export default Portfolio
