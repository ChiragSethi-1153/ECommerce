const router = require("express").Router()

router.use('/', require('./product.routes'))
router.use('/', require('./category.routes'))

module.exports = router 