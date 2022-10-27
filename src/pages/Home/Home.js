import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='cotainer'>
            <h1>Welcome</h1><br></br>
            <h1>To</h1><br></br>
            <h1>Coder</h1><br></br>
            <h1>E-Learnig</h1><br></br>
            <h1>Platform</h1><br></br>
            <h3>For Courses, Go To <Link to='/courses'>Courses</Link>  Section</h3>
        </div>
    );
};

export default Home;