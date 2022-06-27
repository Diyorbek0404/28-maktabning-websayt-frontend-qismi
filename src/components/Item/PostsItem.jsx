import React from 'react';
import PostItem from './PostItem';

const PostsItem = ({ posts }) => {
    return (
        <div>
            {
                posts.map((p) => {
                    return (
                        <PostItem key={p._id} post={p} />
                    )
                })
            }
        </div>
    );
};

export default PostsItem;