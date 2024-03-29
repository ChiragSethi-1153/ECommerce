const { productController } = require('../controller')
const { aclmiddleware } = require('../middleware/acl')
const { upload } = require('../middleware/upload')

const router = require('express').Router()

router.post("/products",aclmiddleware, upload, productController.createProduct)
router.get("/products", aclmiddleware, productController.getAllproducts)
router.put("/products", aclmiddleware, upload, productController.editproduct)
router.get("/products/:uuid", aclmiddleware, productController.getproduct)
router.delete("/products/:uuid", aclmiddleware, productController.deleteProduct)

module.exports = router 