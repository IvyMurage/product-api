const productController = require("../controllers")
const express = require("express")
const router = express.Router()

router.get("/", productController.products_index)

router.get("/:id", productController.product_details)

router.post("/", productController.product_create)

router.delete("/:id", productController.product_delete)

router.put("/:id", productController.product_update)

module.exports = router
