import React, { useContext, useEffect, useState } from 'react'
import { BlogContext } from '../contexts/blog.context'
import { BlogPreview } from './BlogPreview'
import "../styles/Home.css"
import { Blog } from './Blog'

export const Home = () => {
    const { blogs } = useContext(BlogContext)
    const [result, setResult] = useState([])
    const [activeBlog, setActiveBlog] = useState(null)

    useEffect(() => {
        setResult(blogs)
        setActiveBlog(blogs[0])
    }, [blogs])

    return (
        <div className="home-container">
            {
                activeBlog && <Blog blog={activeBlog} />
            }
            <div className='blog-table'>
                {
                    result.map((blog) => {
                        return <BlogPreview blog={blog} setActiveBlog = {setActiveBlog}/>
                    })
                }
            </div>
        </div>
    )
}
