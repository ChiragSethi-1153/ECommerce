const {userController} = require('../controller/index')
const { verifyToken } = require('../middleware/auth')
const router = require('express').Router()


router.post("/users", verifyToken, userController.createUser)
router.get("/users",  verifyToken, userController.getUser)

router.put("/users", verifyToken, userController.editUser)

router.get('/users', verifyToken, userController.getAllUsers)

module.exports = router 