const mongoose = require('mongoose')




const orderSchema = new mongoose.Schema({
    uuid: {
        type: String
    },
    user: {
        type: String
    },
    products: [{
        type: String
    }],
    total: {
        type: Number
    }
    
}, {timestamps: true})

module.exports = mongoose.model('orders', orderSchema)