import React, { Component } from 'react';
import listtopicData from './listtopicData.json'; 

class Listtopic extends Component {
    render() {
        const { listTopics } = listtopicData;
        return (
            <section id="list-topics" className="list-topics">
                <div className="container">
                    <div className="list-topics-content">
                        <ul>
                            {listTopics.map((topic, index) => (
                                <li key={index}>
                                    <div className="single-list-topics-content">
                                        <div className="single-list-topics-icon">
                                            <i className={topic.icon} />
                                        </div>
                                        <h2><a href="#">{topic.title}</a></h2>
                                        <p>{topic.listings} listings</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/*/.container*/}
            </section>
        );
    }
}

export default Listtopic;
