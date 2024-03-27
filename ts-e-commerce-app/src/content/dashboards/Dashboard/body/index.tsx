import { Box, Stack } from '@mui/material'
import React from 'react'
import DashboardTopCard from '../../../../components/DashBoardCard'
import SideGraph from './SideGraph'
import BestSellers from './Bestseller'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const DashboardBody = () => {
  return (
    <Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }} >
                <DashboardTopCard icon={<ShoppingBagIcon />} header={'Total Orders'} line1={''} line2={''} line3={''} />
                <DashboardTopCard icon={<ShoppingBagIcon />} header={'Active Orders'} line1={''} line2={''} line3={''} />
                <DashboardTopCard icon={<ShoppingBagIcon />} header={'Complete Orders'} line1={''} line2={''} line3={''} />
                <DashboardTopCard icon={<ShoppingBagIcon />} header={'Return Orders'} line1={''} line2={''} line3={''} />
            </Box>
            <Stack direction={'row'} gap={2}>
                <SideGraph />
                <BestSellers />
            </Stack>
    </Box>
  )
}

export default DashboardBody
