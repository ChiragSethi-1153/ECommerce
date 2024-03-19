const Users = require("../model/users");
const { recieveMsg } = require("../worker/consumer");
const { sendMsg } = require("../worker/producer");

exports.createUser = async (req) => {
    try{
        console.log(req)
        const {uuid, name, email, password, role} = req
        const user = await new Users({
            uuid,
            name,
            email,
            password,
            role,
            status: "Active"
        })
        console.log(user)
        await user.save()

        await sendMsg(
            process.env.RABBIT_PUBLISH_USER_DETAILS, 
            process.env.RABBIT_PUB_USER_DETAILS_SIGN,
            user
            )

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