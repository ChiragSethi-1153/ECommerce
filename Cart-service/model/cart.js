const mongoose = require('mongoose')


const cartSchema = new mongoose.Schema({
    uuid: {
        type: String,
        required: true
    },
    user: {
        type: String
    },
    product: [{
        type: String,

    }],
    totalPrice: {
        type: Number,
    }
    
})

const Cart = mongoose.model("cart", cartSchema)

module.exports = Cart
