import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Courses = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5500/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <Container>
            <Row>
                <Col lg="3" className='d-block'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg="9">
                    <div>
                        <h4>My All Courses Lenght is {categories.length}</h4>
                        <div>
                            {
                                // categories.map(category => <p key={category.id}>
                                //     <Link to={`/category/${category.id}`}>{category.name}</Link>
                                // </p>)
                                categories.map(category =>
                                    <Card style={{ width: '18rem' }} key={category.id}>
                                        <Card.Img variant="top" src="holder.js/100px180" />
                                        <Card.Body>
                                            <Card.Title>
                                                <Link to={`/category/${category.id}`}>{category.name}</Link>
                                            </Card.Title>
                                            <Card.Text>
                                                {category.description}
                                            </Card.Text>
                                            <Button variant="primary">Get Premium Access</Button>
                                        </Card.Body>
                                    </Card>
                                )
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    );
};

export default Courses;