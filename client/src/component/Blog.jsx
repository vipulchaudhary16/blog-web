import React, { useContext, useEffect } from 'react'
import "../styles/Blog.css"
import { RatingStar } from './RatingStar'

export const Blog = ({ blog }) => {
    return (
        <div className='blog-container'>
            <div className="featured-blog">
                <div className="blog-header">
                    <img src={blog.poster} alt="" className='blog-image' />
                    <div className="blog-header-content">
                        <h1 className='blog-title'>{blog.title}</h1>
                        <div className="blog-ratting">{
                            <RatingStar rating={blog.rating
                            } />
                        }
                            <p>1 million+ reads</p>
                        </div>
                    </div>
                </div>
                <div className="blog-body">
                    <p className="blog-text">
                        {blog.body}
                    </p>
                </div>
            </div>
        </div>
    )
}
