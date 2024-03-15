const mongoose = require("mongoose")

const roleSchema = mongoose.Schema({
    uuid: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    accessRights: {
        type: Array,
        required: true
    }
})

const Role = mongoose.model('role', roleSchema)

module.exports = Role