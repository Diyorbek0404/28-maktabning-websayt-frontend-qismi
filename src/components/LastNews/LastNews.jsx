import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const LastNews = () => {
    return (
        <div className='my-5'>
            <h4>
                So'ngi Yangiliklar
            </h4>
            <div className="container-fluid">
                <div className="row">
                    <div className="d-flex">
                        <div className="flex-shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1569098273298-ee44d213c2d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                alt="..."
                                width={100}
                                height={100}
                            />
                        </div>
                        <div className="flex-grow-1 ms-3">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, officia.
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LastNews;