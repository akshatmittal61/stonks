import React from 'react'
import Rule from './Rule'

const Rules = () => {
    const rules = Array(10).fill(null);
    return (
        <section className="rules" id="about">
            <div className="rules-heading">
                Rules for the event
            </div>
            <div className="rules-box">
                <div className="rules-bar"></div>
                <div className="rules-container">
                    {
                        rules.map((rule, index) => (
                            <Rule key={index} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Rules
