const express = require('express')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const colors = require('colors')
const app = express()
const { errorHandler } = require('./middleware/errorMiddleware')



connectDB()
//Routes (frontend to back)
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//app.use("/api/test", require("./routes/testRoutes"));

app.use("/user", require("./routes/userRouter"));

app.use(errorHandler)
app.listen(port,()=> console.log(`Server started on port ${port}`))