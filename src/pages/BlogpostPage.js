import React from 'react';
import posts from '../data/posts.json';
import {Link, useParams} from "react-router-dom";


function BlogpostPage() {
    const {blogId} = useParams();

    const selectedPost = posts.find((post) => {
        return post.id === blogId;
    });

    return (
        <div className="outer-container">
            <article>
                <h1>{selectedPost.title}</h1>
                <h3>{selectedPost.date}</h3>
                <p>{selectedPost.content}</p>
            </article>
            <Link to={"/blogposts"}>Terug naar alle posts</Link>
        </div>
    );
}

export default BlogpostPage;