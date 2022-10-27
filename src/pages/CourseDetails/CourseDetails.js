import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ReactToPdf from 'react-to-pdf';

const ref = React.createRef();
const Category = () => {
    const course = useLoaderData();
    console.log(course);


    return (
        <div>
            <h2>This is {course[0].title}</h2>
            <Card style={{ width: '50rem' }} className='mb-5'>
                <Card.Header className='d-flex'>
                    <div className='me-2'>{course[0].title}</div>
                    <div className=''>
                        <div>
                            <ReactToPdf targetRef={ref} filename="Course.pdf">
                                {({ toPdf }) => (
                                    <Button onClick={toPdf}>Generate pdf</Button>
                                )}
                            </ReactToPdf>
                            <div ref={ref} className="d-none">
                                <p> {course[0].description} </p>
                            </div>
                        </div>
                    </div>

                </Card.Header>
                <Card.Img style={{ width: 200 }} variant="top" src={course[0].img_url} />
                <Card.Body>
                    <Card.Title>{course[0].title}</Card.Title>
                    <Card.Text>
                        {course[0].description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Instructor: ${course[0].instructor}</ListGroup.Item>
                    <ListGroup.Item>Total Enrolled: ${course[0].total_enrolled}</ListGroup.Item>
                    <ListGroup.Item>Price: ${course[0].price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Button variant='warning'><Link to={`/checkout/${course[0].id}`}>CheckOut</Link></Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Category;