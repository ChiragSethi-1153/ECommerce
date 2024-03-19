const { productController } = require('../controller')

const router = require('express').Router()

router.post("/products", productController.createProduct)
router.get("/products", productController.getAllproducts)
router.put("/products", productController.editproduct)
router.get("/products/:uuid", productController.getproduct)
router.delete("/products/:uuid", productController.deleteProduct)

module.exports = router 