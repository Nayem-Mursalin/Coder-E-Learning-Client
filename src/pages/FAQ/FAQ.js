import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <div>
            <h3>FAQ Section</h3>
            <div className='blogf'>
                <h1 className='blog-headerf'>Frequntly Asked Questions</h1>
                <div className='blog-sectionf'>
                    <h2>What type of Code Will I Found?</h2>
                    <p>You will Found Only Computer Programming Related Course Here</p>
                </div>
                <div className='blog-sectionf'>
                    <h2>How can I Pay for the Course?</h2>
                    <p>You Can Pay With VISA or MasterCard</p>
                </div>
                <div className='blog-sectionf'>
                    <h2>Can We get Discount?</h2>
                    <p>Yes, Keep Your Eyes on Our Website</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;