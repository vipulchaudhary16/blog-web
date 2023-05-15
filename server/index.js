const express = require('express')
const dotenv = require('dotenv')
const app = express()
const PORT = 8080 || process.env.PORT
//for cross orgin request
const cors = require('cors');
app.use(cors());
dotenv.config()

//database connection
require('./configDB')

//request body will contains json data
app.use(express.json())

app.get("/api", (req, res) => {
    res.json({ message: "Anime blog backend API" })
})

//adding routes
app.use("/api/auth", require("./routes/Auth"))
app.use("/api/blog", require("./routes/Blog"))

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})