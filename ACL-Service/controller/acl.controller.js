const { aclService } = require('../service');


exports.createRole = async(req, res) => {
    try{
        const response = await aclService.createRole(req);
        return res.status(201).json(response)
        
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}


exports.getRole = async (req,res) => {
    try{
        const response = await aclService.getRole(req);
        if(response === 401){
            return res.status(401).json({message: "Unauthorized"})
        }
        else{
            return res.status(200).json(response)
        }
    }
    catch(err) {
        console.log(err)
        return res.status(500).send(err)
    }
}



exports.getAllRoles = async (req, res) => {
    try{
        const response = await aclService.getAllRoles(req)
        if(response === 404){
            return res.status(404).json({message: 'No role found'})
        }
        else{
            return res.status(200).json(response)
        }
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}