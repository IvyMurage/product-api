const express = require("express")
const connect = require("./db-connection")
const app = express()
const productRoutes = require("./routes/product")

app.use(express.json())

connect()

app.get("/", (req, res) => {
  res.redirect("/products")
})

app.use("/products", productRoutes)

app.listen(8888, () => {
  console.log("Listenig on port 8888")
  console.log("Connected to database")
})
