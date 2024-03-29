// const { roledb } = require("../model/role");
const { roledb } = require("../model/role");
const uuid = require("uuid")

// exports.createUser = async (req) => {
//     try{
//         const {value, title} = req.query
//         const {access} = req.body
//         const role = await new Role({
//             uuid: uuid.v1(),
//             value,
//             title,
//             access
//         })
//         await role.save()
//         return role
//     }catch(err){
//         console.log(err)
//         return err
//     }
// }


exports.getRole = async (req) => {
   
    try{
        console.log(req.body)
        const { role, service, access } = req.body;
        console.log(role, service, access)

        if(roledb.hasOwnProperty(role)){
            const roleData = roledb[role];
            console.log(roleData)
            if (roleData.hasOwnProperty(service)) {
                const ans = roleData[service].includes(access);
                console.log(role, service, access,ans, "kkkkkkkkkkkk")
                return ans;

            } else {
                console.log(role, service, access, "dddddddddddd")
                return 400;
            }
        } else {
            console.log(role, service, access, "ssssssss")
            return 404; 
        }
    }catch(err){
        console.log(err)
        return new Error(err)
    }   
}


// exports.getAllRoles = async (req,res) => {
//     try{

//         const role = await Role.find({})
//         if(!role) {
//             return 404
//         }
//         else{
//             return role
//         }
//     }catch(err){
//         console.log(err)
//         return err
//     }
// }