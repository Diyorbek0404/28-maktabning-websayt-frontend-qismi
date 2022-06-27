import React from 'react';

const LatestNewsPost = () => {
     
    return (
        <div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img
                            src="https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            className="img-fluid rounded-start"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <p>
                                <small className="text-muted">
                                    <i className="fas fa-clock"></i>
                                    <span className='px-2'> 
                                        23:47 / 24.02.2022
                                    </span>
                                </small>
                            </p>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNewsPost;