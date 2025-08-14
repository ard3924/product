const express = require('express')
const app = express()
require('dotenv').config()
const PORT = 5000
const morgan = require('morgan')
const cors = require('cors');
const postRoute = require('./routes/productRoutes')
const userRoute = require('./routes/userRoutes')
// const methodOverride = require('method-override');
const connectDB = require('./connection')
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
connectDB()
app.use('/prod', postRoute)
app.use('/user', userRoute)
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
