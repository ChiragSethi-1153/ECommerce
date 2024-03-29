const router = require('express').Router()
const { categoryController } = require('../controller')
const { aclmiddleware } = require('../middleware/acl')
const { upload, uploadCategory } = require('../middleware/upload')


router.post("/categories",uploadCategory, (req, res, next)=>{
        req.body.access = 1; 
        req.body.service = 'category';
        next();
    }, 
     aclmiddleware, categoryController.createCategory)



router.get("/categories", categoryController.getAllCategory)
router.put("/categories", aclmiddleware, uploadCategory, categoryController.editCategory)
router.get("/categories/:uuid", aclmiddleware, categoryController.getCategory)
router.delete("/categories/:uuid", aclmiddleware, categoryController.deleteCategory)

module.exports = router 