import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Courses = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://code-e-learning-server-nayem-mursalin.vercel.app/allcourses')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    console.log(categories);
    return (
        <Container>
            <Row>
                <Col lg="3" className='d-block'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg="9">
                    <div>
                        <h4>My All Courses Lenght is {categories.length}</h4>
                        <div className='container text-center row'>
                            {
                                // categories.map(category => <p key={category.id}>
                                //     <Link to={`/category/${category.id}`}>{category.name}</Link>
                                // </p>)
                                categories.map(category =>
                                    <div className='col-sm-12 col-lg-4'>
                                        <Card style={{ width: '18rem' }} key={category.id}>
                                            <Card.Img variant="top" src="holder.js/100px180" />
                                            <Card.Body>
                                                <Card.Title>
                                                    {category.name}
                                                </Card.Title>
                                                <Card.Text>
                                                    {category.description > 100 ?
                                                        <>{category.description.slice(0, 100) + '....'} <Link to={`/courses/${category.id}`}>See Details</Link></>
                                                        :
                                                        <>{category.description}</>
                                                    }
                                                </Card.Text>
                                                <Button variant="light"> <Link to={`/courses/${category.id}`}>See Details</Link></Button>
                                            </Card.Body>
                                        </Card>
                                    </div>

                                )
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >

    );
};

export default Courses;