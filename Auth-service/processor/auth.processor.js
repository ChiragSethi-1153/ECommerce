const {authService} = require('../service')

exports.changeStatus = async (payload) => {
    console.log(payload)
    const {user_details = {}} = payload
  try {
    const response = await authService.changeStatus(user_details);
    if (!response) {
      throw new Error('status not changed', user_details);
    }
  } catch (error) {
    console.log(`users.user_details:  Error occured : ${error.message}`, '\n');
    throw error;
  }
}