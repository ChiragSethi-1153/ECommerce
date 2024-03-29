import React from 'react'
import BreadCrumHeader from '../../../components/Header/BreadCrumHeader'
import { Stack } from '@mui/material'
import AddProductBody from './body'

const AddProduct = () => {
  return (
    <>
    <Stack p={4} sx={{ backgroundColor: 'rgb(246, 248, 255)' }} >
        <BreadCrumHeader header={"Add Product"} subheader={[{link: '/vendor/dashboard', text :'Home'}, {link: '/vendor/allproducts', text: 'All Products'}, {link: '/vendor/addproducts', text: 'Add Products'}]}/>
        <AddProductBody />
    </Stack>
</>
  )
}

export default AddProduct
