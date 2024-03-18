const Role = require("../model/role")
const uuid = require("uuid")

exports.createUser = async (req) => {
    try{
        const {value, title} = req.query
        const {access} = req.body
        const role = await new Role({
            uuid: uuid.v1(),
            value,
            title,
            access
        })
        await role.save()
        return role
    }catch(err){
        console.log(err)
        return err
    }
}


exports.getRole = async (req) => {
   
    try{
        const roleId = req.role;
        const role = await Role.find(roleId)
        if(!role) {
            return 404
        }
        else{
            return role
        }
    }catch(err){
        console.log(err)
        return new Error(err)
    }
    
}



exports.getAllRoles = async (req,res) => {
    try{

        const role = await Role.find({})
        if(!role) {
            return 404
        }
        else{
            return role
        }
    }catch(err){
        console.log(err)
        return err
    }
}