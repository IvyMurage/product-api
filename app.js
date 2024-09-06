const express = require("express")
const Product = require("./models/productModel")
const connect = require("./db-connection")
const app = express()

app.use(express.json())

connect()

app.get("/", (req, res) => {
  res.redirect("/products")
})

app.get("/products", (req, res) => {
  Product.find()
    .then(result => res.json(result))
    .catch(error => console.log(error))
})

app.post("/products", (req, res) => {
  console.log(req)
  const product = new Product(req.body)
  product
    .save()
    .then(result => res.json(result))
    .catch(error => console.log(error))
})

app.delete("/products/:id", (req, res) => {
  const { id } = req.params
  Product.findById(id)
    .then(product => {
      if (!product) {
        return res.status(404).send({message: 'Product not found'})
      }
      product.remove()
      res.status(200).json({ message: "product successfully deleted" })
    })
    .catch(error => res.status(500).json({ message: error }))
})

app.listen(8888, () => {
  console.log("Listenig on port 8888")
  console.log("Connected to database")
})
