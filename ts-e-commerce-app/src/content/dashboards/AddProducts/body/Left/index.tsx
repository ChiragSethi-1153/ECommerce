import { Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import InputField from '../../../../../components/InputField'

const ProductLeft = () => {
    return (

        <Stack>
            <InputField header={'Product Name'} fontsize={'14'} fontweight={'600'} placeholder={'Product Name'} />
            <Stack gap={1} py={1}>
                <Typography>Description</Typography>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    placeholder='Description.................'
                />
            </Stack>
            <InputField header={'Category'} fontsize={'14'} fontweight={'600'} placeholder={'Category'} />
            <InputField header={'Brand Name'} fontsize={'14'} fontweight={'600'} placeholder={'Brand Name'} />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <InputField header={'SKU'} fontsize={'14'} fontweight={'600'} placeholder={'SKU'} />
                    <InputField header={'Stock Quantity'} fontsize={'14'} fontweight={'600'} placeholder={'Stock Quantity'} />
                </Grid>
                <Grid item xs={6}>
                    <InputField header={'Regular Price'} fontsize={'14'} fontweight={'600'} placeholder={'Regular Price'} />
                    <InputField header={'Sale Price'} fontsize={'14'} fontweight={'600'} placeholder={'Sale Price'} />
                </Grid>
            </Grid>
        </Stack>
    )
}

export default ProductLeft