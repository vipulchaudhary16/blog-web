const mongoose = require("mongoose")

const Blog = mongoose.Schema({
    writer: {
        type: String,
    },
    title: {
        type: String,
    },
    rating: {
        type: Number,
        default: 0
    },
    body: {
        type: String,
    },
    poster: {
        type: String,
    },

})

module.exports = mongoose.model("blogs", Blog)