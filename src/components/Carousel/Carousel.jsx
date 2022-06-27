import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';


const CarouselList = () => {
    return (
        <Container>
            <Row xs={12} md={12} lg={12} sm={12}>
                <Col>
                    <Carousel fade className="my-3">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1640622308122-b1b0f3cd5a7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                alt="First slide"
                                style={{
                                    borderRadius:"20px"
                                }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1645651964715-d200ce0939cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                alt="Second slide"
                                style={{
                                    borderRadius:"20px"
                                }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://images.unsplash.com/photo-1645677069221-af4c5510e908?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                                alt="Third slide"
                                style={{
                                    borderRadius:"20px"
                                }}
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

        </Container>
    );
};

export default CarouselList;