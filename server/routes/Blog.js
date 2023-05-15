const express = require('express')
const router = express.Router()
const { addBlog, getBlogs } = require('../controllers/Blog')

router.post("/add", addBlog)
router.get("/", getBlogs)

module.exports = router