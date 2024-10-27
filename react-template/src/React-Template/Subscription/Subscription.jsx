import React, { Component } from 'react';
import subscriptionData from './subscriptionData.json';

class Subscription extends Component {
    render() {
        return (
            <section id="contact" className="subscription">
                <div className="container">
                    <div className="subscribe-title text-center">
                        <h2>{subscriptionData.title}</h2>
                        <p>{subscriptionData.description}</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="subscription-input-group">
                                <form action="#">
                                    <input type="email" className="subscription-input-form" placeholder={subscriptionData.inputPlaceholder} />
                                    <button className="appsLand-btn subscribe-btn" onClick={() => window.location.href='#'}>
                                        {subscriptionData.buttonText}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Subscription;
