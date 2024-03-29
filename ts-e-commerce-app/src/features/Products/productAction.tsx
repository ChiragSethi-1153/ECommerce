// import {createAsyncThunk} from '@reduxjs/toolkit'

// import loginService from '../../services/Auth/loginService'
// import signupService from '../../services/Auth/signupService'
// import { createProductType, getProductType } from './productType'

// export type content= {
//     uuid: String,
//       category: String,
//       title: String,
//       description: String,
//       stock: null,
//       vendor: {
//         name: String,
//         email: String,
//         uuid: String,
//       },
//       productImages: String[]
//   }

// export const createProduct = createAsyncThunk(createProductType, async (inputs: content, {rejectWithValue}) => {
//     try{
//     console.log(inputs)
//     const response = await createProductService(inputs)
//     console.log(response)
//     const data = response.data
//     console.log(data)
//     return data
// }catch(err){
//     console.log(err)
//     return rejectWithValue(err)
// }
// })


// // export const getProducts = createAsyncThunk(getProductType, async (_, {rejectWithValue}) => {
// //     try{
// //         const response = await loginService()
// //         console.log(response)
// //         const data = await response.data
// //         console.log(data)
// //         return data
// //     }catch(err) {
// //         console.log(err)
// //         return rejectWithValue(err)
// //     }
// // })

import React from 'react'

const productAction = () => {
  return (
    <div>
      
    </div>
  )
}

export default productAction
