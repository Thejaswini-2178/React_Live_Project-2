import React, { Component } from 'react'

export class Works extends Component {
    render() {
        return (
            <div>
                <section id="works" className="works">
                    <div className="container">
                        <div className="section-header">
                            <h2>how it works</h2>
                            <p>Learn More about how our website works</p>
                        </div>{/*/.section-header*/}
                        <div className="works-content">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="single-how-works">
                                        <div className="single-how-works-icon">
                                            <i className="flaticon-lightbulb-idea" />
                                        </div>
                                        <h2><a href="#">choose <span> what to</span> do</a></h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.
                                        </p>
                                        <button className="welcome-hero-btn how-work-btn" onclick="window.location.href='#'">
                                            read more
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="single-how-works">
                                        <div className="single-how-works-icon">
                                            <i className="flaticon-networking" />
                                        </div>
                                        <h2><a href="#">find <span> what you want</span></a></h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.
                                        </p>
                                        <button className="welcome-hero-btn how-work-btn" onclick="window.location.href='#'">
                                            read more
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="single-how-works">
                                        <div className="single-how-works-icon">
                                            <i className="flaticon-location-on-road" />
                                        </div>
                                        <h2><a href="#">explore <span> amazing</span> place</a></h2>
                                        <p>
                                            Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.
                                        </p>
                                        <button className="welcome-hero-btn how-work-btn" onclick="window.location.href='#'">
                                            read more
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/*/.container*/}
                </section>
            </div>
        )
    }
}

export default Works