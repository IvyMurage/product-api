const express = require("express")
const Product = require('./models/productModel')
const connect  =  require("./db-connection")
const app = express()


app.use(express.json())

connect()

app.get("/", (req, res) => {
res.send('hello')
})

app.post("/products", (req, res) => {
  console.log(req)
  const product = new Product(req.body)
  product.save()
  .then(result => console.log(result))
  .catch(error => console.log(error))
})


app.listen(8888, () => {
  console.log("Listenig on port 8888")
  console.log("Connected to database")
})

