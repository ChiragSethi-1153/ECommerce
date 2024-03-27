import { Grid } from '@mui/material'
import React from 'react'
import ProductLeft from './Left'
import ProductRight from './right'

const AddProductBody = () => {
  return (
    <Grid spacing={2} container my={3} p={3} sx={{ backgroundColor: 'white', borderRadius: '20px' }}>
                    <Grid item xs={6.5} >
                        <ProductLeft />
                    </Grid>
                    <Grid item xs={5.5}>
                        {/* <Box width={'100%'} height={'30%'} sx={{ backgroundColor: 'lightgray', borderRadius: '15px' }}></Box> */}
                        <ProductRight />
                    </Grid>
                </Grid>
  )
}

export default AddProductBody
