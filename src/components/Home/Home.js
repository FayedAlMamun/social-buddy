import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            {
                posts.map(post => <Post post={post}></Post>)
            }

        </div>
    );
};

export default Home;