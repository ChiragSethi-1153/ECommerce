import { Box, Button, Stack } from '@mui/material'
import styles from "./AllProducts.module.css"
import React from 'react'
import Header from '../../../components/Header/Header'
import BreadCrumHeader from '../../../components/Header/BreadCrumHeader'
import CustomButton from '../../../components/Button/CustomButton'
import Body from './Body'
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import { useNavigate } from 'react-router-dom'

const AllProducts = () => {

  const navigate = useNavigate()

  return (
    <Box className={styles.allProducts}>
        {/* <BreadCrumHeader header={"All Products"} subheader={[{link: "/dashboard", text: "Home"}, {link: "/dashboard/products", text: "All Products"}]} /> */}
        <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={"center"}>
        <Header header={"All Products"}  subheader={"All Products"}/>
        <Stack flexDirection={'row'}>
        <CustomButton 
          title={"Add Products"} 
          variant='contained' 
          color='primary'
          handleClick={(e) => navigate('/vendor/addproduct')}
          ></CustomButton>
        <Button><GridViewIcon /></Button>
        <Button><ViewListIcon /></Button>
        </Stack>

        </Stack>

        <Body />
    </Box>
  )
}

export default AllProducts
