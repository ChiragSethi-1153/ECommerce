const { userService } = require('../services');

exports.createUser = async (payload) => {
  const {user_details = {}} = payload
  try {
    const response = await userService.createUser(user_details);
    if (!response) {
      throw new Error('User could not be created.', user_details);
    }
  } catch (error) {
    console.log(`auth.user_details:  Error occured during Group configured: ${error.message}`, '\n');
    throw error;
  }
};

// exports.create_academic_group_students = async (payload) => {
//   try {
//     const response = await academic_group_service.create_academic_group_students(payload);
//     if (!response) {
//       throw new Error(`Students assigned to a group cannot be processed. Payload: ${JSON.stringify(payload)}`);
//     }
//   } catch (error) {
//     console.log(`educational-planning.attendance-control Error during assigning students to academic group: ${error.message}`, '\n');
//     throw error;
//   }
// };


