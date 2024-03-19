const mongoose = require('mongoose')




const productSchema = new mongoose.Schema({
    uuid: {
        type: String
    },
    category: {
        type: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    stock: {
        type: String
    },
    vendor: {
        type: String
    },
    productImages: [{
        type: String,
        default: []
    }],
    status: {
        type: String,
        enum: ["available", "unavailable"],
        default: "available"
    }
    
}, {timestamps: true})

module.exports = mongoose.model('products', productSchema)