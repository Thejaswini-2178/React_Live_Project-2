import React, { Component } from 'react';
import blogData from './blogData.json';

export class Blog extends Component {
    render() {
        return (
            <section id="blog" className="blog">
                <div className="container">
                    <div className="section-header">
                        <h2>{blogData.title}</h2>
                        <p>{blogData.description}</p>
                    </div>
                    <div className="blog-content">
                        <div className="row">
                            {blogData.posts.map((post, index) => (
                                <div className="col-md-4 col-sm-6" key={index}>
                                    <div className="single-blog-item">
                                        <div className="single-blog-item-img">
                                            <img src={post.image} alt="blog" />
                                        </div>
                                        <div className="single-blog-item-txt">
                                            <h2><a href="#">{post.title}</a></h2>
                                            <h4>posted <span>by</span> <a href="#">{post.author}</a> {post.date}</h4>
                                            <p>{post.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog;
