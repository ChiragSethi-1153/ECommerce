import { Box, Stack, SvgIconTypeMap } from '@mui/material'
import React, { ReactElement } from 'react'
import CustomButton from '../Button/CustomButton';
import { OverridableComponent } from '@mui/types';
interface props {
    icon: ReactElement<any, any>,
    header: string,
    line1: string,
    line2: string,
    line3: string
}
function OrderInfoCard(props: props) {
    return (
        <Stack p={1.5} gap={2} width={'270px'} sx={{ border: '1px solid rgb(240,240,237)', backgroundColor: 'rgb(255,255,255)', borderRadius: '6px' }} justifyContent={'space-between'}>
            <Stack direction={'row'} gap={1.5}>
                <Box color={'white'} sx={{ backgroundColor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', height: '50px', width: '50px' }}>{props.icon}</Box>
                <Stack gap={0.2}>
                    <Box sx={{ fontWeight: '600', fontSize: '19px' }}>{props.header}</Box>
                    <Box sx={{ color: '#4E4E4C', fontSize: '15px' }}>{props.line1}</Box>
                    <Box sx={{ color: '#4E4E4C', fontSize: '15px' }}>{props.line2}</Box>
                    <Box sx={{ color: '#4E4E4C', fontSize: '15px' }}>{props.line3}</Box>
                </Stack>
            </Stack>
            <CustomButton  variant="contained" title="View Details" handleClick={() => {} } color='primary' />
        </Stack>
    )
}

export default OrderInfoCard