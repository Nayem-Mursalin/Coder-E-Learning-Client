import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Category = () => {
    const course = useLoaderData();
    console.log(course);

    return (
        <div>
            <h2>This is {course[0].title}</h2>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <Card.Body>
                    <Card.Title>{course[0].title}</Card.Title>
                    <Card.Text>
                        {course[0].description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Price: ${course[0].price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Button variant='warning'><Link to={`/checkout/${course[0].id}`}>CheckOut</Link></Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Category;