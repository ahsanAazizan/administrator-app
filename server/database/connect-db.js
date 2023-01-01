const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', false);

exports.connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.URI)
        console.log(`Connected to database: ${connection.connection.host} successfully`)
    } catch(error) {
        console.log(error)
        process.exit(1)
    }
}