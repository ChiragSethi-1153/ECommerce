import { Box, Divider, Stack } from '@mui/material'
import React from 'react'
import CustomButton from '../../../../../components/Button/CustomButton'
import { LineChart } from '@mui/x-charts/LineChart';


const SideGraph = () => {
    return (
        <Stack width={'60%'} p={2} sx={{ backgroundColor: 'white', borderRadius: '10px' }} gap={1}>
            <Stack direction={'row'} gap={1} justifyContent={'space-between'}>
                <Box fontWeight={'600'}>Sale Graph</Box>
                <Stack direction={'row'} gap={1}>
                    <CustomButton handleClick={() => { }} variant="outlined" title="Weekly" color='primary' />
                    <CustomButton handleClick={() => { }} variant="contained" title="Monthly" color='primary' />
                    <CustomButton handleClick={() => { }} variant="outlined" title="Yearly" color='primary' />
                </Stack>
            </Stack>
            <Divider />
            <LineChart
                xAxis={[{ data: [2, 1, 4, 9, 8, 10] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                        area: true,
                    },
                ]}
                sx={{ width: '100%', color: 'black' }}
                height={200}
            />
        </Stack>
    )
}

export default SideGraph