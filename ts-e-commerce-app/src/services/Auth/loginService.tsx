import React from 'react'
import { logging } from '../../features/Auth/authAction'
import axios from 'axios'

const loginService =  async (inputs: logging) => {
  console.log(inputs)
    const response = await axios.post(process.env.REACT_APP_AUTH_SERVER + '/auth/login', inputs)
    return response
}

export default loginService
