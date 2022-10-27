import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const selectedCourse = useLoaderData();
    console.log(selectedCourse)
    return (
        <div>
            <h2>This is CheckOut Page</h2>
            <h2>This is {selectedCourse[0].title}</h2>
        </div>
    );
};

export default CheckOut;