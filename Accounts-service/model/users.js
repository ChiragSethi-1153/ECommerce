const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    uuid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: [{
        area: {
            type: String,
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        country: {
            type: String
        },
        pincode: {
            type: Number
        }
    }],
    phone: {
        type: String
    },
    profileImage: [{
        type: String,
        default: []
    }],
    role: {
        type: String,
        enum: ["user", "admin", "vendor"],
        default: "user"
    }
})

const Users = mongoose.model("user", userSchema)

module.exports = Users
