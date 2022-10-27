import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h2>Blog Section</h2>
            <div className='blog'>
                <h1 className='blog-header'>Blog!</h1>
                <div className='blog-section'>
                    <h2>What is Cors</h2>
                    <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.</p>
                </div>
                <div className='blog-section'>
                    <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>Props are used to pass data from one component to another.
                        The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                </div>
                <div className='blog-section'>
                    <h2>How does the private route work?</h2>
                    <p>I'll Study Later</p>
                </div>
                <div className='blog-section'>
                    <h2>What is Node? How does Node work?</h2>
                    <p>I'll Study Later</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;