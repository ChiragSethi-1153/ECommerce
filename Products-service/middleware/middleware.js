const axios = require('axios')
const multer = require('multer')



exports.middleware = {
    aclmiddleware:  async function  (req, res, next) {
        try {
            console.log("req sss", req.body);
            const { role, service, access } = req.body;
            if (!role || !service || !access) {
                return res.status(403).json({ error: 'Role, service and access is required' });
            }
            const body = { role, service, access }
            const response = await axios.get('http://localhost:8081/roles', body);
            console.log(response)
            if (response.data === true) {
                next();
            } else {
                return res.status(401).json({ error: 'Unauthorized' });
            }
        } catch (error) {
            // Handle any errors that occur during the request
            console.error('Error checking authorization:', error.message);
            return res.status(500).json({ error: 'Internal server error' });
        }
    },
    uploadCategory: multer({
        storage: multer.diskStorage({
            destination: (req, file, cb) => {
                console.log(req.files)
               return cb(null, ("uploads"))
            },
            filename: (req, file, cb) => {
               return cb(null, `${Date.now()}_${file.originalname}`)
            }
       
        })
    }).fields([{name: 'images', maxCount: 1}])
}

