import React from 'react';
import Link from 'next/link';

const BlogPost = ({ blogTitle, posts }) => {
    return (
        <>
            <div className="blog-area pt-100 pb-75">
                <div className="container">
                    {blogTitle && (
                        <div className="section-title">
                            <span className="sub-title">
                                {blogTitle.subTitle}
                            </span>
                            <h2>{blogTitle.title}</h2>
                        </div>
                    )}

                    <div className="row justify-content-center">
                        {posts && posts.slice(0,3).map(post => (
                            <div className="col-lg-4 col-md-6" key={post.id}>
                                <div className="single-blog-post">
                                    <div className="image">
                                        <Link href={`/blog/${post.slug}`}>
                                            <a className="d-block">
                                                <img 
                                                    src={post.image.url} 
                                                    alt={post.image.alternativeText} 
                                                />
                                            </a>
                                        </Link>

                                        <div className="tag">
                                            {post.tag}
                                        </div>
                                    </div>

                                    <div className="content">
                                        <ul className="meta">
                                            <li>
                                                <i className="ri-time-line"></i> {post.date}
                                            </li>
                                        </ul>
                                        <h3>
                                            <Link href={`/blog/${post.slug}`}>
                                                <a>{post.title}</a>
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogPost;