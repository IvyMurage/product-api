const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION)

  } catch (err) {
    console.log(err)
  }
}

module.exports = connect
