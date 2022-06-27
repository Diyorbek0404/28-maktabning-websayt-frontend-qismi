import React from 'react';
import { Link } from 'react-router-dom';

const PaginationPost = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <nav className='d-flex justify-content-center my-4'>
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item shadow-none'>
                            <Link onClick={() => paginate(number)} to='/news/!#' className='page-link shadow-none'>
                                {number}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default PaginationPost;