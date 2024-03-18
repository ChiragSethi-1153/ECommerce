const {aclController} = require('../controller/index')
const { verifyToken } = require('../middleware/auth')
const router = require('express').Router()


router.post("/roles", verifyToken, aclController)
router.get("/roles",  verifyToken, aclController)
router.get('/roles/:roleId', verifyToken, userController.getAllUsers)

module.exports = router 