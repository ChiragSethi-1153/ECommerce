const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
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
        type: String, // 1: admin, 2: user, 3: vendor
        required: true
    },
    status: {
        type: String,
        enum: ["Active", "Deactive"],
        default: "Active"
    }
})

const Users = mongoose.model("user", userSchema)

module.exports = Users
