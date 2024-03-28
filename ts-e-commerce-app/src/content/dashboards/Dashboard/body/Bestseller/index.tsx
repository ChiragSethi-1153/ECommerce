import { Box, Divider, IconButton, Stack } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BestSellerDashboard from '../../../../../components/BestSellerDashboard';
import CustomButton from '../../../../../components/Button/CustomButton';

const BestSellers = () => {
    return (
        <Stack width={'40%'} p={2} sx={{ backgroundColor: 'white', borderRadius: '10px',blockSize:'fit-content' }} gap={1}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Box fontWeight={'600'}>Best Sellers</Box>
                <IconButton><MoreVertIcon /></IconButton>
            </Stack>
            <Divider />
            <BestSellerDashboard name={'Product Name'} price1={'price'} price2={'#id'} sales={'sales'} />
            <BestSellerDashboard name={'Product Name'} price1={'price'} price2={'#id'} sales={'sales'} />
            <BestSellerDashboard name={'Product Name'} price1={'price'} price2={'#id'} sales={'sales'} />
            <CustomButton handleClick={() => { }} color='primary' variant="contained" title="Report" />

        </Stack>
    )
}

export default BestSellers