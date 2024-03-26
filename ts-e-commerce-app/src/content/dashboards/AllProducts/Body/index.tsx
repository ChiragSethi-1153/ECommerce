import { Box, Grid } from '@mui/material'
import React from 'react'
import ProductCard from '../../../../components/ProductCard/ProductCard'

const Body = () => {
  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={3}
        columns={{ xs: 1, sm: 1, md: 2,  lg: 3, xl: 4}}
      >
        <ProductCard />
      </Grid>
    </Box>
  )
}

export default Body
