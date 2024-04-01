import { Box, Typography } from '@mui/material'
import React from 'react'

type categorytype = {
    uuid: string;
    categoryName: string;
    categoryImage: string[];
    subCategories: string[];
  };


const CategoryCard = (items: any) => {
    console.log(items.items.categoryName)
  return (
    <Box
        sx={{
            borderRadius: '10px',
            width: '155px',
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
        {
            items?.items?.categoryImage && items?.items?.categoryImage.length > 0 &&
            items?.items?.categoryImage?.map((i: any) => {
                return (
                    <>
                    <img src={`${process.env.REACT_APP_PRODUCT_SERVER}/${i}`} alt={'category'} width={"40px"} height={'40px'} style={{borderRadius: '5px'}} />
                    </>
                )
            })
        }
        <Typography>{items?.items?.categoryName}</Typography>
    </Box>
  )
}

export default CategoryCard
