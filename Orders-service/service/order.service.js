const { Orders} = require("../model");


exports.createOrder = async (req) => {
    try{
        // console.log(req)
        const {title, category, stock, description, vendor} = req

        const product = await new  Orders({
            title, category, stock, description, vendor
        })
        console.log(product)
        await product.save()
        return product
    }catch(err){
        console.log(err)
        return err
    }
}


exports.getAllproduct = async (req) => {
   
    try{
       const {search} = req.body
       if(search){
           const product = await Products.find({ "$or": [{ "title": { $regex: ".*" + search + ".*", $options: 'i' } }, { "category": { $regex: ".*" + search + ".*", $options: 'i' } }, { "description": { $regex: ".*" + search + ".*", $options: 'i' } }] })
           if(!product) {
               return 404
            }
            else{
                return product
            }
        }
        else {
            const product = await  Orders.find()
            if(!product) {
                return 404
             }
             else{
                 return product
             }
        }           
    }catch(err){
        console.log(err)
        return new Error(err)
    }
    
}

exports.editproduct = async (req) => {
    try{
        const {uuid} = req.query
        const {title, category, stock, description} = req.body
        const currentproductId = await products.find({uuid: uuid})
        if(currentproductId == null){ 
            return 404
        }
        else {
            const productDetails = await Products.findOneAndUpdate({uuid: uuid}, {title, category, stock, description}, {new: true})
            return productDetails
        }
    }catch(err){
        console.log(err)
        return err
    }
}

exports.getProduct = async (req,res) => {
    try{
        const uuid = req.params
        const product = await  Orders.find({uuid: uuid})
        if(!product) {
            return 404
        }
        else{
            return product
        }
    }catch(err){
        console.log(err)
        return err
    }
}



exports.deleteproduct = async (req) => {
    try{
        const uuid = req.params
        const {status} = req.body
        const product = await  Orders.findOneAndUpdate({uuid: uuid}, {status: status}, {new: true})
        return product
    }catch(err){
        console.log(err)
        return err
    }
}