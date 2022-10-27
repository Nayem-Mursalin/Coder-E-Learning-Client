import React from 'react';
import './FAQ.css';

const FAQ = () => {
    return (
        <div>
            <h3>FAQ Section</h3>
            <div className='blogf'>
                <h3 className='blog-headerf'>Frequntly Asked Questions</h3>
                <div className='blog-sectionf'>
                    <h2>What type of Course Will I Found?</h2>
                    <p>You will Found Only Computer Programming Related Course Here</p>
                </div>
                <div className='blog-sectionf'>
                    <h3>How can I Pay for the Course?</h3>
                    <p>You Can Pay With VISA or MasterCard</p>
                </div>
                <div className='blog-sectionf'>
                    <h3>Can We get Discount?</h3>
                    <p>Yes, Keep Your Eyes on Our Website</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;