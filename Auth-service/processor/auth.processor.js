const {authService} = require('../service')

exports.changeStatus = async (payload) => {
  try {
    console.log("processor", payload)
    const {user_details = {}} = payload
    const response = await authService.changeStatus(user_details);
    if (!response) {
      throw new Error('status not changed', user_details);
    }
  } catch (error) {
    console.log(`Status change:  Error occured : ${error.message}`, '\n');
    throw error;
  }
}

exports.updateUser = async (payload) => {
  try{
    console.log(payload)
    const {user_details = {}} = payload
    const response = await authService.updateUser(user_details);
    if (!response) {
      throw new Error('user not updated', user_details);
    }
  }catch(err){
    console.log(`users.user_updated:  Error occured : ${err.message}`, '\n')
    throw err
  }
}