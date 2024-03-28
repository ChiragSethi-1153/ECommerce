const Users = require('../model/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const key = process.env.JWT_KEY

const uuid = require('uuid')
const { sendMsg } = require('../worker/producer')

exports.signup = async (req) => {
    try{
    console.log("req", req.body)
    const {name, email, password, role} = req.body;
   
    const existingUser = await Users.findOne({email: email});
      
    if(existingUser){
        return 409;
    }

    const hashedPassword = bcrypt.hashSync(password)

    const uuidnew = uuid.v1()
    const users = {
        uuid: uuidnew,
        name,
        email,
        role
    };

    const user = new Users({
        uuid: uuidnew,
        name,
        email,
        password: hashedPassword,
        role
    });
    await user.save();
    console.log("dwecerc",user);

    await sendMsg(
        process.env.RABBIT_PUBLISH_USER_DETAILS, 
        process.env.RABBIT_PUB_USER_DETAILS_SIGN,
        users
        )

        return users
    }
    catch(err) {
        console.log(err)
        return err
    }

}

exports.changeStatus = async(payload) => {
    try{
        console.log("⚡⚡", payload)
        const uuid = payload.uuid
        const status = payload.status
        const change = await Users.findOneAndUpdate({uuid: uuid}, {status: status}, {new: true})
        console.log("authservice: status change", change)
        return change
        
    }catch(err){
        console.log(err)
        return err
    }
    }

exports.login = async (req, res) => {
    try{
    const {email, password} = req.body
    
      const existingUser  = await Users.findOne({email:email})
      
        if(!existingUser) {
            return 404
        }

        if(existingUser.status === "Deactive" ){
            return 401
        }
        if(existingUser.status === "Pending" ){
            return 501
        }


        const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
        if(!isPasswordCorrect) {
            return 400
        }
        const token = jwt.sign({id: existingUser.uuid, role: existingUser.role}, key, {
            expiresIn: "12hr"
        });
        console.log("Generated Token\n", token);

        const data = {
            uuid: existingUser?.uuid,
            name: existingUser?.name,
            email: existingUser?.email,
            role: existingUser?.role,
            status: existingUser?.status,
        }
        return {data, token}
    
    } catch(err){
        console.log(err)
        return new Error(err);
    }

}

exports.updateUser = async(payload) => {
    try{
        const user = await Users.findOneAndUpdate({uuid: payload.uuid}, {name: payload.name, role: payload.role}, {new:true})
        console.log(user)
        return user

    }catch(err){
        console.log(err)
        return err
    }
}


exports.changePassword = async (req) => {
    try{

        const userId = req.id
        const role = req.role
        console.log("authService", userId, role)
        
        const {existingPassword, newPassword} = req.body
        console.log({existingPassword, newPassword})

        if(existingPassword === newPassword) {
            return 409
        }
        else{
            const details = await Users.findOne({uuid: userId})
            console.log("details", details)
            
            const pass = bcrypt.compareSync(existingPassword, details.password);
            console.log("pass", pass)
            if(!pass){
                return 400
            }
            else{
                const hashedPassword = bcrypt.hashSync(newPassword)
                const newPass = await Users.findOneAndUpdate({uuid: userId}, {password: hashedPassword}, {new: true})
                console.log("pass service", newPass)
                return 201
            }
        }

    }catch(err){
        console.log(err)
        return err
    }
}