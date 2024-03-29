const multer = require('multer')

exports.upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            console.log(req.body, "cwdcewc")
            console.log(req.files, "dddd")
           return cb(null, ("uploads"))
        },
        filename: (req, file, cb) => {
           return cb(null, `${Date.now()}_${file.originalname}`)
        }
   
    })
}).fields([{name: 'images', maxCount: 12}]);


exports.uploadCategory = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            console.log(req.files)
            console.log(req.body)
           return cb(null, ("uploads"))
        },
        filename: (req, file, cb) => {
           return cb(null, `${Date.now()}_${file.originalname}`)
        }
   
    })
}).fields([{name: 'images', maxCount: 1}]);
