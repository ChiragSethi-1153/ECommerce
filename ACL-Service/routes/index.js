const router = require("express").Router()

router.use('/', require('./acl.routes'))

module.exports = router