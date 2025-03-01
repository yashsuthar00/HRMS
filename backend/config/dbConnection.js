const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

const connectDb = async () => {
    try {
        const connect = await mongoose.connect("mongodb://mongodb:27017/HRMS")
        console.log("MongoDB connected: ", connect.connection.host, connect.connection.name)
    }
    catch (err) {
        console.log(err)
        process.exit(1)
    }
};

module.exports = connectDb;