import React, { Component } from 'react';
import worksData from './worksData.json'; 

export class Works extends Component {
    render() {
        const { works, sectionHeader } = worksData;

        return (
            <div>
                <section id="works" className="works">
                    <div className="container">
                        <div className="section-header">
                            <h2>{sectionHeader.title}</h2>
                            <p>{sectionHeader.subtitle}</p>
                        </div>{/*/.section-header*/}
                        <div className="works-content">
                            <div className="row">
                                {works.map((work, index) => (
                                    <div key={index} className="col-md-4 col-sm-6">
                                        <div className="single-how-works">
                                            <div className="single-how-works-icon">
                                                <i className={work.icon} />
                                            </div>
                                            <h2><a href={work.link}>{work.title}</a></h2>
                                            <p>{work.description}</p>
                                            <button 
                                                className="welcome-hero-btn how-work-btn" 
                                                onClick={() => window.location.href = work.link}>
                                                read more
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>{/*/.container*/}
                </section>
            </div>
        )
    }
}

export default Works;
