const express = require("express")
const { connect } = require("./db-connection")
const app = express()

connect()

app.get("/", (req, res) => {
  res.send("hello world")
})
