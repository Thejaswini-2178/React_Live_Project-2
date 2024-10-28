import React, { Component } from 'react';
import testimonials from './testimonials.json'; 

class Review extends Component {
    render() {
        return (
            <section id="reviews" className="reviews">
                <div className="section-header">
                    <h2>Clients Reviews</h2>
                    <p>What our clients say about us</p>
                </div>{/*/.section-header*/}
                <div className="reviews-content">
                    <div className="testimonial-carousel">
                        {testimonials.map((testimonial, index) => (
                            <div className="single-testimonial-box" key={index}>
                                <div className="testimonial-description">
                                    <div className="testimonial-info">
                                        <div className="testimonial-img">
                                            <img src={testimonial.image} alt="clients" />
                                        </div>{/*/.testimonial-img*/}
                                        <div className="testimonial-person">
                                            <h2>{testimonial.name}</h2>
                                            <h4>{testimonial.location}</h4>
                                            <div className="testimonial-person-star">
                                                {Array.from({ length: testimonial.rating }, (_, i) => (
                                                    <i className="fa fa-star" key={i} />
                                                ))}
                                            </div>
                                        </div>{/*/.testimonial-person*/}
                                    </div>{/*/.testimonial-info*/}
                                    <div className="testimonial-comment">
                                        <p>{testimonial.comment}</p>
                                    </div>{/*/.testimonial-comment*/}
                                </div>{/*/.testimonial-description*/}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Review;
