import React from 'react'
import BreadCrumHeader from '../../../components/Header/BreadCrumHeader'
import { Stack } from '@mui/material'
import AddProductBody from './body'

const AddProduct = () => {
  return (
    <>
    <Stack p={4} sx={{ backgroundColor: 'rgb(246, 248, 255)' }} >
        <BreadCrumHeader header={"All Products"} subheader={[]}/>
        <AddProductBody />
    </Stack>
</>
  )
}

export default AddProduct
