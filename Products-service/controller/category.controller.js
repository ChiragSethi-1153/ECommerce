const {categoryService} = require('../service')


exports.createCategory = async(req, res) => {
    try{
        const response = await categoryService.createCategory(req);
        return res.status(201).json(response)
        
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}


exports.getCategory = async (req,res) => {
    try{
        const response = await categoryService.getCategory(req);
        if(response === 404){
            return res.status(404).json({message: "Category Not Found"})
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

exports.editCategory = async (req, res) => {
    try{
        const response = await categoryService.editCategory(req)
        if(response === 404){
            return res.status(404).json({message: "No such Category"})
        }
        else{
            return res.status(200).json(response)
        }
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.getAllCategory = async (req, res) => {
    try{
        const response = await categoryService.getAllCategory(req)
        if(response === 404){
            return res.status(404).json({message: 'No Category found'})
        }
        else{
            return res.status(200).json(response)
        }
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}

exports.deleteCategory = async (req, res) => {
    try{
        const response = await categoryService.deleteCategory(req)
        if(response === 404){
            return res.status(404).json({message: 'No Category found'})
        }
        else{
            return res.status(200).json(response)
        }
    }catch(err){
        console.log(err)
        return res.status(500).send(err)
    }
}