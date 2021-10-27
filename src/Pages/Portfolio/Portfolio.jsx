import React from 'react'

const Portfolio = ({ user }) => {
    return (
        <section className="portfolio">
            <div className="portfolio-user">
                <div className="portfolio-user-image">
                    <img className="portfolio-user-image__img" src={user.img} alt="User Image" />
                </div>
                <div className="portfolio-user-name">
                    <span>
                        {user.name}
                    </span>
                </div>
            </div>
            <div className="portfolio-content">
                <div className="table">
                    <div className="table-tr">
                        <span className="table-th">
                            Company Name
                        </span>
                        <span className="table-th">
                            Volume of stocks
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
