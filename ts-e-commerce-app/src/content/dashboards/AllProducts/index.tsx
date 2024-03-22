import { Box, Button, Stack } from '@mui/material'
import styles from "./AllProducts.module.css"
import React from 'react'
import Header from '../Header/Header'
import BreadCrumHeader from '../Header/BreadCrumHeader'

const AllProducts = () => {
  return (
    <Box className={styles.allProducts}>
        {/* <BreadCrumHeader header={"All Products"} subheader={[{link: "/dashboard", text: "Home"}, {link: "/dashboard/products", text: "All Products"}]} /> */}
        <Stack>
        <Header header={"All Products"}  subheader={"All Products"}/>
        <Button>Add Products</Button>
        </Stack>
    </Box>
  )
}

export default AllProducts
