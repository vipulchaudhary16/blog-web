const mongoose = require("mongoose")

/*
User
    - first name : String
    -last name : String
    - email : String
    - password : String
    - isActive : Boolean
    - roles : Array(String)
*/

const User = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    roles: {
        type: [String],
        default: ["USER"],
        required: true,
    },
})

module.exports = mongoose.model("users", User)