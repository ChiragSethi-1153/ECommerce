const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    uuid: {
        type: String
    },
    category: {
        type: String
    },
    subCategories: [{
        type: String
    }]

}, {timestamps: true})

module.exports = mongoose.model('category', categorySchema)