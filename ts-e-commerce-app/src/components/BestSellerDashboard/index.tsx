import { Box } from '@mui/material'
import { Stack } from '@mui/material'
import React from 'react'

type seller = {
    name: string,
    price1: string,
    price2: string,
    sales: string
}

const BestSellerDashboard = (props: seller) => {
    return (
        <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
            <Stack direction={'row'} gap={1}>
                <Box width={'70px'} sx={{ backgroundColor: 'lightgray', borderRadius: '10px' }}></Box>
                <Stack gap={1}>
                    <Box fontWeight={'600'}>{props.name}</Box>
                    <Box fontSize={'14px'} color={'gray'}>{props.price1}</Box>
                </Stack>
            </Stack>
            <Stack gap={1}>
                <Box fontWeight={'700'}>{props.price2}</Box>
                <Box fontSize={'14px'} color={'gray'}>{props.sales}</Box>
            </Stack>
        </Stack>
    )
}

export default BestSellerDashboard