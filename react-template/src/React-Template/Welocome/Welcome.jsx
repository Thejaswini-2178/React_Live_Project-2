import React, { Component } from 'react';
import welcomeData from './welcomeData.json'; // Adjust the path if needed

class Welcome extends Component {
    render() {
        const { homeSection } = welcomeData;
        const { welcomeHeroTxt, searchBox } = homeSection.container;

        return (
            <section id={homeSection.id} className={homeSection.className}>
                <div className="container">
                    <div className="welcome-hero-txt">
                        <h2>
                            {welcomeHeroTxt.title} <br />
                            {welcomeHeroTxt.subtitle}
                        </h2>
                        <p>
                            {welcomeHeroTxt.description}
                        </p>
                    </div>
                    <div className="welcome-hero-serch-box">
                        <div className="welcome-hero-form">
                            {searchBox.formFields.map((field, index) => (
                                <div key={index} className="single-welcome-hero-form">
                                    <h3>{field.title}</h3>
                                    <form action="index.html">
                                        <input type="text" placeholder={field.placeholder} />
                                    </form>
                                    <div className="welcome-hero-form-icon">
                                        <i className={field.iconClass} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="welcome-hero-serch">
                            <button
                                className="welcome-hero-btn"
                                onClick={() => window.location.href = searchBox.searchButton.onclickHref}
                            >
                                {searchBox.searchButton.text} <i data-feather={searchBox.searchButton.icon} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Welcome;
