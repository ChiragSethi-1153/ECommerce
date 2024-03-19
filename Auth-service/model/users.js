const mongoose =  require('mongoose')

const validateEmail = function(email) {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email);
  };

const userSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: [validateEmail, "Please enter a valid email"],
    },
    password: {
        type: String,
        required: true,
        // minlenght: 8
    },
    roleId: {
        type: String
    },
    status: {
        type: String,
        enum: ["Active", "Deactive", "Pending"],
        default: "Pending"
    }
    

}, {timestamps: true})


const Users = mongoose.model('users' , userSchema)
module.exports = Users