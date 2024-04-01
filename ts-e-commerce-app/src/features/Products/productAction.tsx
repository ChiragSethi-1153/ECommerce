import {createAsyncThunk} from '@reduxjs/toolkit'

import loginService from '../../services/Auth/loginService'
import signupService from '../../services/Auth/signupService'
import { createProductType, getProductType } from './productType'
import getProductService from '../../services/Product/getProduct.service'

export type productContent= {
  uuid: string,
  category: string,
  title: string,
  description: string,
  stock: number | null,
  price: number | null
  vendorId: string
  vendor: {
    name: string,
    email: string,
  },
  productImages: string[]
  }

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


export const getProducts = createAsyncThunk(getProductType, async (inputs: string, {rejectWithValue}) => {
    try{
        const response = await getProductService(inputs)
        console.log(response)
        const data = await response.data
        console.log(data)
        return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})
