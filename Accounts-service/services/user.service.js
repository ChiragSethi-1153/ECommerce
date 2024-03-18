const Users = require("../model/users");

exports.createUser = async (req) => {
    try{
        const {uuid, name, email, password, role} = req.body
        const user = await new Users({
            uuid,
            name,
            email,
            password,
            role
        })
        await user.save()
        return user
    }catch(err){
        console.log(err)
        return err
    }
}


exports.getUser = async (req) => {
   
    try{
        const userId = req.id;
        const user = await Users.findById(userId, "-password")
        if(!user) {
            return 404
        }
        else{
            return user
        }
    }catch(err){
        console.log(err)
        return new Error(err)
    }
    
}

exports.editUser = async (req) => {
    try{
        const userId = req.id
        const {name, address, phone} = req.body
        const currentUserId = await Users.findById(userId)
        if(currentUserId == null){ 
            return 404
        }
        else {
            const userDetails = await Users.findByIdAndUpdate(userId, {name, address, phone, website, company, summary, headline}, {new: true})
            return userDetails
        }

    }catch(err){
        console.log(err)
        return err
    }
}

exports.getAllUsers = async (req,res) => {
    try{
        const userId = req.id
        const user = await Users.find({'_id': {'$ne': userId}})
        if(!user) {
            return 404
        }
        else{
            return user
        }
    }catch(err){
        console.log(err)
        return err
    }
}

exports.changeRole = async (req) => {
    try{
        const userId = req.id
        const {role} = req.body
        const user = await Users.findOneAndUpdate({uuid: userId}, {role: role}, {new: true})
        return user
    }catch(err){
        console.log(err)
        return err
    }
}

exports.deleteUser = async (req) => {
    try{
        const userId = req.id
        const {status} = req.body
        const user = await Users.findOneAndUpdate({uuid: userId}, {status: status}, {new: true})
        return user
    }catch(err){
        console.log(err)
        return err
    }
}