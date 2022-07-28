const mongoose = require("mongoose");
require("dotenv").config()

const mongodb_Url = process.env.MONGODB_URL

const connection =  mongoose.connect(mongodb_Url)

module.exports = connection