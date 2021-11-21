import React from 'react';
import { getPosts } from '../actions';

const Post = (props) => {
    const { posts } = props;

    return (
        <div className="container">
            <h1>I am a post</h1>
            <ul>
                {posts.map(post => (

                    <li>
                        <span>{`${post.id}: ${post.title}`}</span>
                    </li>
                ))}
            </ul>
        </div >
    );
};

Post.getInitialProps = async () => {
    const posts = await getPosts();
    return { posts };
};

export default Post;