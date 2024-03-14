const mongoose = require('mongoose')


const cartSchema = mongoose.Schema({
    uuid: {
        type: String,
        required: true
    },
    user: {
        type: String
    },
    product: [{
        type: String,

    }]
    
})

const Cart = mongoose.model("cart", cartSchema)

module.exports = Cart
