import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Courses.css'

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
                        <h2>Our All Courses</h2>
                        <div className='container text-center row justify-content-evenly mb-5 pb-5 gap-3'>
                            {
                                // categories.map(category => <p key={category.id}>
                                //     <Link to={`/category/${category.id}`}>{category.name}</Link>
                                // </p>)
                                categories.map(category =>
                                    <div className='col-sm-11 col-md-5 col-lg-3 m-2 card-list'>
                                        <Card style={{ width: '13rem' }} key={category.id}>
                                            <Card.Img style={{ width: 200 }}
                                                variant="top" src={category.img_url} />
                                            <Card.Body>
                                                <Card.Title>
                                                    {category.name}
                                                </Card.Title>
                                                <Card.Text>
                                                    {category.description.length > 60 ?
                                                        <>{category.description.slice(0, 60) + '....'} <Link to={`/courses/${category.id}`}>See Details</Link></>
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