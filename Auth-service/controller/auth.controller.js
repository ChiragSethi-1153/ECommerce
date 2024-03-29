const {authService} = require('../service')

exports.signup = async (req, res) => {

    try{
        const response = await authService.signup(req);
        if(response === 409  ){
            return res.status(409).json({message: 'User already exists! Login instead'})
        }
        else{
            return res.status(201).json({message: 'Signed up successfully', response})
        }
    }
    catch(err) {
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.login = async (req, res) => {

    try{ 
        const response = await authService.login(req)
        if(response === 404){
            return res.status(404).json({message: 'User not found. Signup Please!'})
        }
        if(response === 400){
            return res.status(400).json({message: "Invalid Email / Password"})
        }
        if(response === 401){
            return res.status(401).json({message: "Account has been deleted"})
        }
        if(response === 501){
            return res.status(501).json({message: "Account has not been added yet"})
        }
            const {data, token} = response
            return res.status(200).json({message: "Successfully Logged In", user: data, token})
        
    }
    catch(err){
        console.log(err)
        return res.status(500).send(err)
    }

}

exports.changePassword= async (req, res) => {
    try{
        const response = await authService.changePassword(req)
        if(response === 400){
            return res.status(400).json({message: "Invalid Password"})
        }
        else if(response === 409){
            return res.status(409).json({message: "New Password Matches current password"})
        }
        else if(response === 201){
            return res.status(201).json({message: "Password changed succesfully"})
        }

    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}