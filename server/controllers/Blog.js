const Blog = require('../models/Blog');

const addBlog = async (req, res) => {
    try {
        const { writer, title, body, poster } = req.body
        const blog = new Blog({
            writer,
            title,
            body,
            poster
        })
        await blog.save()
        res.json({ "message": "Blog added" })
    } catch (error) {
        res.status(500).send("Internal server error")
        console.log(error)
    }
}

const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({})
        res.json(blogs)
    } catch (error) {
        res.status(500).send("Internal server error")
        console.log(error)
    }
}

module.exports = {addBlog, getBlogs}