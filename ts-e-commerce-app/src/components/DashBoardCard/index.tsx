import { Stack, Box, IconButton } from '@mui/material'
import React, { ReactElement } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

interface props {
    icon: ReactElement<any, any>,
    header: string,
    line1: string,
    line2: string,
    line3: string
}
const DashboardTopCard = (props: props) => {
    return (
        <Stack p={2} width={'250px'} sx={{ backgroundColor: 'white', borderRadius: '10px' }} gap={1}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Box fontWeight={'600'}>{props.header}</Box>
                <IconButton><MoreVertIcon /></IconButton>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Stack direction={'row'} gap={1} alignItems={'center'}>
                    <Box>{props.icon}</Box>
                    <Box fontWeight={'700'}>Price</Box>
                </Stack>
                <Stack direction={'row'} alignItems={'center'}><ArrowUpwardIcon /> increase</Stack>
            </Stack>
            <Stack alignItems={'end'} fontSize={'14px'}>date</Stack>
        </Stack>
    )
}

export default DashboardTopCard