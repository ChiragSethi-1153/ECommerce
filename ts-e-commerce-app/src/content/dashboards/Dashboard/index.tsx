import React from 'react'
import styles from './Dashboard.module.css'
import { Box, Stack } from '@mui/material'
import DashboardBody from './body'
import BreadCrumHeader from '../../../components/Header/BreadCrumHeader'

const Dashboard = () => {
  return (
    <Box className={styles.dashboard}>
        <Stack p={4} gap={2} sx={{}} >
            <BreadCrumHeader header={"Dashboard"} subheader={[{ text: 'Home', link: '/' }]} />
            <DashboardBody />
        </Stack>
    </Box>
  )
}

export default Dashboard
