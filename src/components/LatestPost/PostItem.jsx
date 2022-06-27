import React from 'react';
import { Carousel } from "react-bootstrap"
import { Link } from 'react-router-dom';

const LatesPostItem = () => {
    return (
        <div className="card shadow my-3" style={{
            borderRadius: "20px"
        }}>
            <Carousel fade>
                <Carousel.Item>
                    <img style={{
                        borderRadius: "20px"
                    }}
                        src="https://images.unsplash.com/photo-1645670719318-17afc53d9ebe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        className="card-img-top p-2 d-block w-100"
                        alt="..."
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{
                        borderRadius: "20px"
                    }}
                        className="card-img-top p-2 d-block w-100"
                        src="https://images.unsplash.com/photo-1645645271595-c40a86fd1cb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
                        alt="Second slide"
                    />
                </Carousel.Item>

            </Carousel>
            <div className="card-body">
                <p style={{
                    fontSize: "14px",
                    color: "#888"
                }}>
                    <span>
                        <i className="fad fa-clock"></i> 18:31
                    </span>
                    <span className='px-3'>
                        <i className="fad fa-user"></i> Admin
                    </span>
                </p>
                <h5 className="card-title">Card</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="/news" className="btn btn-primary shadow-none">Batafsil</Link>
            </div>
        </div>
    );
};

export default LatesPostItem;