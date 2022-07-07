import React from 'react';
import posts from '../data/posts.json';
import {Link} from "react-router-dom";

function BlogOverviewPage() {
        return (
            <div className="outer-container">
                <h1>Blog</h1>
                <h3>Aantal blogposts: {posts.length}</h3>
                <section className="blog-overview__blog-links">
                    <ul>
                        {posts.map((post) => {
                            return <li key={post.id}><Link to={`/blog/${post.id}`}>
                                {post.title}
                            </Link></li>
                        })}
                    </ul>
                </section>
            </div>
        );
    }

    export default BlogOverviewPage;