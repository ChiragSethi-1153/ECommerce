import React from 'react'
import { Users } from '../../features/Auth/authAction'
import axios from "axios"

const signupService = async (inputs : Users) => {
    console.log(inputs)
    const response = await axios.post(process.env.REACT_APP_AUTH_SERVER + '/auth/signup', inputs)
    return response
}

export default signupService
