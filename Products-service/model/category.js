const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    uuid: {
        type: String
    },
    categoryName: {
        type: String
    },
    categoryImage: [{
        type: String,
        default: [] 
    }],
    subCategories: [{
        type: String
    }]

}, {timestamps: true})

module.exports = mongoose.model('category', categorySchema)