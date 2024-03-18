
const Users = require('../model/users')
const bcrypt = require('bcryptjs')
const uuid = require('uuid')

exports.signup = async (req) => {
    try{
    console.log(req.body)
    const {name, email, password, role} = req.body;
   
    
    const existingUser = await Users.findOne({email: email});
      
    if(existingUser){
        return 409;
    }

    const hashedPassword = bcrypt.hashSync(password)

    const user = new Users({
        uuid: uuid.v1(),
        name,
        email,
        password: hashedPassword,
        role: role
    });

        await user.save();
        return user
    }
    catch(err) {
        console.log(err)
        return err
    }

}

exports.login = async (req, res) => {
    try{
    const {email, password} = req.body
    
      const existingUser  = await Users.findOne({email:email})
        if(!existingUser) {
            return 204
        }
        const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
        if(!isPasswordCorrect) {
            return 400
        }
        const token = jwt.sign({id: existingUser._id, role: existingUser.role}, key, {
            expiresIn: "12hr"
        });
        console.log("Generated Token\n", token);
        return existingUser
    } catch(err){
        return new Error(err);
    }

}