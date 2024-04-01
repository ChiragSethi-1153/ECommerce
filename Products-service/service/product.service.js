const { Products } = require("../model");
const uuid = require('uuid')

exports.createProduct = async (req) => {
    try {
        // console.log(req)
        const { title, category, stock, description, vendorId, vendorName, vendorEmail, price } = req.body
        let newImage = [];
        if (req.files !== null && req.files.images && req.files.images.length > 0) {
            newImage = req.files.images.map((i) => {
                return i.path;
            });
            console.log(newImage, "ghvugyiv");
        }
        const product = await new Products({
            title, 
            category, 
            stock : parseInt(stock), 
            description, 
            uuid: uuid.v1(),
            price : parseInt(price),
            vendorId,
            vendor: {    
                name: vendorName,
                email: vendorEmail
            },
            productImages: newImage
        })
        console.log(product)
        await product.save()
        return product
    } catch (err) {
        console.log(err)
        return err
    }
}


exports.getAllproduct = async (req) => {

    try {
        const { search, vendorId } = req.query
        console.log(req.query)
        if(vendorId){
            const products = await Products.find({vendorId: vendorId}).sort({createdAt: -1})
            if (!products) {
                return 404
            }
            else {
                return products
            }
        }

        else if (search) {
            
            const product = await Products.find({ "$or": [{ "title": { $regex: ".*" + search + ".*", $options: 'i' } }, { "category": { $regex: ".*" + search + ".*", $options: 'i' } }, { "description": { $regex: ".*" + search + ".*", $options: 'i' } }] })
            
            if (!product) {
                return 404
            }
            else {
                return product
            }
        }
        else {
            const product = await Products.find()
            if (!product) {
                return 404
            }
            else {
                return product
            }
        }
    } catch (err) {
        console.log(err)
        return new Error(err)
    }

}

exports.editproduct = async (req) => {
    try {
        const { uuid } = req.query
        const { title, category, stock, description } = req.body
        const currentproductId = await products.find({ uuid: uuid })
        if (currentproductId == null) {
            return 404
        }
        else {
            const productDetails = await Products.findOneAndUpdate({ uuid: uuid }, { title, category, stock, description }, { new: true })
            return productDetails
        }
    } catch (err) {
        console.log(err)
        return err
    }
}

exports.getProduct = async (req, res) => {
    try {
        const uuid = req.params
        const product = await Products.find({ uuid: uuid })
        if (!product) {
            return 404
        }
        else {
            return product
        }
    } catch (err) {
        console.log(err)
        return err
    }
}



exports.deleteproduct = async (req) => {
    try {
        const uuid = req.params
        const { status } = req.body
        const product = await Products.findOneAndUpdate({ uuid: uuid }, { status: status }, { new: true })
        return product
    } catch (err) {
        console.log(err)
        return err
    }
}