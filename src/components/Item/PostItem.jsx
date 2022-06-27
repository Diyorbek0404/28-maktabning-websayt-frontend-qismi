import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({ post }) => {
    return (
        <div>
            <div className="col-md-6 col-sm-12 my-2" key={post._id}>
                <div className="card shadow">
                    <img src="https://images.unsplash.com/photo-1581726707445-75cbe4efc586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text post-line-4">{post.desc}</p>
                        <Link to={`/news/${post._id}`} className="btn btn-primary">Ko'proq o'qing</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostItem;