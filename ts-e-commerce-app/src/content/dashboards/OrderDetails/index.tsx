import { Box } from '@mui/material'
import React from 'react'
import styles from './OrderDetails.module.css'
import BreadCrumHeader from '../Header/BreadCrumHeader'

const OrderDetails = () => {
  return (
    <Box className={styles.orderdetails}>
      <Box>
        <BreadCrumHeader header={'Order List'} subheader={[{link: '/vendor/dashboard', text:"Home"}, ]} />
      </Box>
    </Box>
  )
}

export default OrderDetails
