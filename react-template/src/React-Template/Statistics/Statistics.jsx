import React, { Component } from 'react';
import statisticsData from './statistics.json'; 

class Statistics extends Component {
    render() {
        return (
            <section id="statistics" className="statistics">
                <div className="container">
                    <div className="statistics-counter">
                        {statisticsData.map((statistic, index) => (
                            <div className="col-md-3 col-sm-6" key={index}>
                                <div className="single-ststistics-box">
                                    <div className="statistics-content">
                                        <div className="counter">{statistic.value}</div>
                                        <span>{statistic.unit}</span>
                                    </div>{/*/.statistics-content*/}
                                    <h3>{statistic.label}</h3>
                                </div>{/*/.single-ststistics-box*/}
                            </div>
                        ))}
                    </div>{/*/.statistics-counter*/}
                </div>{/*/.container*/}
            </section>
        );
    }
}

export default Statistics;
