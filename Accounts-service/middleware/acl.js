const axios = require('axios')

exports.aclmiddleware = async (req, res, next) => {
    try {
        const { role, service, access } = req.body;
        if (!role || !service || !access) {
            res.status(403).json({ error: 'Role, service and access is required' });
        }
       
        const response = await axios.post('http://localhost:8081/roles', { role, service, access });
        console.log(response)
        if (response.data === true) {
            next();
        } else {
            res.status(401).json({ error: 'Unauthorized' });
        }
    } catch (error) {
        // Handle any errors that occur during the request
        console.error('Error checking authorization:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
