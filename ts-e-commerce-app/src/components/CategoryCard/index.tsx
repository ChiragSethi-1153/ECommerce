import { Box, Typography } from '@mui/material'
import React from 'react'

type categoryData = {
    category: String,
    // img: String,
}


const CategoryCard = (input: categoryData) => {
  return (
    <Box
        sx={{
            borderRadius: '10px',
            width: '150px',
            height: '50px',
            display: 'flex',
            alignItems: "center",
            justifyContent: 'space-around',
            bgcolor: '#f7f7f9',
            boxSizing: 'border-box',
            cursor: 'pointer',
            "&:hover": {
                border: '1px solid black'
            }
        }}
    >
        <img src={require('../../assets/category1.png')} alt={'category'} width={"40px"} height={'40px'} style={{borderRadius: '5px'}} />
        <Typography>{input.category}</Typography>
    </Box>
  )
}

export default CategoryCard
