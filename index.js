// Import
require('dotenv').config()
const express = require('express') 
const bodyParser = require('body-parser')
const path = require('path')
const router = require('./server/routes/routes')
const connectDB = require('./server/database/connect-db')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use('/css', express.static(path.resolve(__dirname, 'resources/css')))
app.use('/js', express.static(path.resolve(__dirname, 'resources/js')))

// Routes
app.use('/', router)

// Database connection
connectDB.connectDB()

app.listen(process.env.PORT, () => console.log(`App is running on port ${process.env.PORT}`))

const port = process.env.PORT
module.exports = port
