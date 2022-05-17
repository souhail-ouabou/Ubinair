const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const colors = require('colors')
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { errorHandler } = require('./middleware/errorMiddleware')
const app = express()

connectDB()
app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.use(express.urlencoded({extended: false}))
//app.use("/api/test", require("./routes/testRoutes"));

//Routes (frontend to back)
app.use("/user", require("./routes/userRouter"));
app.use("/projets", require("./routes/projetRouter"));



app.use(errorHandler)
app.listen(port,()=> console.log(`Server started on port ${port}`))