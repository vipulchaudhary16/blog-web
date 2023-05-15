import React from 'react'
import "../styles/Blog.css"

export const BlogPreview = ({ blog, setActiveBlog }) => {
    const { title, body, poster } = blog
    const handleShow = () => {
        setActiveBlog(blog)
    }
    return (
        <div className='blog-preview-container' onClick={() => handleShow()}>
            <div className="poster-container">
                <img src={poster} alt="" />
            </div>
            <div className="preview-content">
                <h2>{title}</h2>
                <span>{body}</span>
            </div>
        </div>
    )
}
