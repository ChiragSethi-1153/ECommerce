const { productController } = require('../controller')
const { aclmiddleware } = require('../middleware/acl')
const { upload } = require('../middleware/upload')

const router = require('express').Router()

router.post("/products", upload, (req, res, next)=>{
    req.body.access = 1; 
    req.body.service = 'product';
    next();
}, 
 aclmiddleware, productController.createProduct)

router.get("/products", productController.getAllproducts)
router.put("/products", upload, (req, res, next)=>{
    req.body.access = 4; 
    req.body.service = 'product';
    next();
}, 
 aclmiddleware, productController.editproduct)

router.get("/products/:uuid",  productController.getproduct)
router.delete("/products/:uuid", (req, res, next)=>{
    req.body.access = 6; 
    req.body.service = 'product';
    next();
}, 
 aclmiddleware, productController.deleteProduct)

module.exports = router 