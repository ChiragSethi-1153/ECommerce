const {orderService} = require('../service')


exports.createorder = async(req, res) => {
    try{
        const response = await orderService.createorder(req);
        return res.status(201).json(response)
        
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}


exports.getorder = async (req,res) => {
    try{
        const response = await orderService.getorder(req);
        if(response === 404){
            return res.status(404).json({message: "order Not Found"})
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

exports.editorder = async (req, res) => {
    try{
        const response = await orderService.editorder(req)
        if(response === 404){
            return res.status(404).json({message: "No such order"})
        }
        else{
            return res.status(200).json(response)
        }
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.getAllorders = async (req, res) => {
    try{
        const response = await orderService.getAllorder(req)
        if(response === 404){
            return res.status(404).json({message: 'No order found'})
        }
        else{
            return res.status(200).json(response)
        }
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.deleteorder = async (req, res) => {
    try{
        const response = await orderService.deleteorder(req)
        if(response === 404){
            return res.status(404).json({message: 'No order found'})
        }
        else{
            return res.status(200).json(response)
        }
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}