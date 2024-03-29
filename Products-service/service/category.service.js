const { Category } = require("../model")
const uuid = require('uuid')

exports.createCategory = async (req) => {
    try{
        // console.log(req)

        const {categoryName} = req.body

        let newImage = [];
            if (req.files !== null && req.files.images && req.files.images.length > 0) {
                newImage = req.files.images.map((i) => {
                    return i.path;
                });
                console.log(newImage, "ghvugyiv");
            }

        const category = await new Category({
            uuid: uuid.v1(),
            categoryName,
            categoryImage: newImage
        })


        console.log(category)
        await category.save()
        return category
    }catch(err){
        console.log(err)
        return err
    }
}


exports.getAllCategory = async (req) => {
   
    try{
            const category = await Category.find({}, "-_id")
            if(!category) {
                return 404
             }
             else{
                 return category
             }
        }           
    catch(err){
        console.log(err)
        return new Error(err)
    }
    
}

exports.editCategory = async (req) => {
    try{
        const {uuid} = req.query
        const {title, category, stock, description} = req.body
        const currentCategoryId = await Category.find({uuid: uuid})
        if(currentCategoryId == null){ 
            return 404
        }
        else {
            const categoryDetails = await Category.findOneAndUpdate({uuid: uuid}, {title, category, stock, description}, {new: true})
            return categoryDetails
        }
    }catch(err){
        console.log(err)
        return err
    }
}

exports.getCategory = async (req,res) => {
    try{
        const uuid = req.params
        const category = await Category.find({uuid: uuid})
        if(!category) {
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
        const category = await Category.findOneAndUpdate({uuid: uuid}, {status: status}, {new: true})
        return category
    }catch(err){
        console.log(err)
        return err
    }
}