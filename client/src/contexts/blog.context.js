import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const BlogContext = createContext({
    blogs: [],
    getBlogs: () => { },
    addBlog: () => { }
})

export const BlogProvider = ({ children }) => {
    const API = process.env.REACT_APP_BACKEND
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        getBlogs()
    }, [])

    const getBlogs = async () => {
        await axios.get(`${API}/api/blog`).then((res) => {
            setBlogs(res.data)
        })
    }

    const addBlog = async (blog) => {
        return axios.post(API + "/api/blog/add", blog)
    }

    const value = { blogs, getBlogs, addBlog }
    return <BlogContext.Provider value={value} >
        {children}
    </BlogContext.Provider>
}