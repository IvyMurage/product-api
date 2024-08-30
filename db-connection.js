const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION)

    app.listen(3000, () => {
      console.log("Listenig on port 3000")
      console.log("Connected to database")
    })
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  connect,
}
