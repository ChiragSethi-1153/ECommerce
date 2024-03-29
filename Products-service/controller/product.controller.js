const {productService} = require('../service')


exports.createProduct = async(req, res) => {
    try{
        const response = await productService.createProduct(req);
        return res.status(201).json(response)
        
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}


exports.getproduct = async (req,res) => {
    try{
        const response = await productService.getProduct(req);
        if(response === 404){
            return res.status(404).json({message: "product Not Found"})
        }
        else{
            return res.status(200).json(response)
        }
    }
    catch(err) {
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.editproduct = async (req, res) => {
    try{
        const response = await productService.editproduct(req)
        if(response === 404){
            return res.status(404).json({message: "No such product"})
        }
        else{
            return res.status(200).json(response)
        }
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.getAllproducts = async (req, res) => {
    try{
        const response = await productService.getAllproduct(req)
        if(response === 404){
            return res.status(404).json({message: 'No product found'})
        }
        else{
            return res.status(200).json(response)
        }
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.deleteProduct = async (req, res) => {
    try{
        const response = await productService.deleteproduct(req)
        if(response === 404){
            return res.status(404).json({message: 'No product found'})
        }
        else{
            return res.status(200).json(response)
        }
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}