const { productController } = require('../controller')

const router = require('express').Router()

router.post("/products", productController)
router.get("/products", productController)
router.put("/products", productController)
router.get("/products", productController)
router.delete("/products", productController)

module.exports = router 