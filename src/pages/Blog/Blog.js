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
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
                <div className='blog-section'>
                    <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>Firebase allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. Data transmission is handled with web sockets so you don't have to send requests to get new data, you only need to subscribe once.
                        Alternative of Firebase are Auth0, MongoDB, Passport, Okta ETC.
                    </p>
                </div>
                <div className='blog-section'>
                    <h2>How does the private route work?</h2>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
                </div>
                <div className='blog-section'>
                    <h2>What is Node? How does Node work?</h2>
                    <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.
                        Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome. As V8 supports new features in JavaScript, they are incorporated into Node.
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;