import { Box } from '@mui/material'
import React from 'react'
import styles from './OrderDetails.module.css'
import BreadCrumHeader from '../../../components/Header/BreadCrumHeader'
import OrderDetailsbody from './body'
import OrderTable from './table'

const OrderDetails = () => {
  console.log("object")
  return (
    <Box className={styles.orderdetails}>
      <Box>
        <BreadCrumHeader header={'Order List'} subheader={[{link: '/vendor/dashboard', text:"Home"}, {link: '/vendor/orders', text: 'Order List'}, {link: '/vendor/orders/orderdetails', text: 'Order Details'}]} />
      </Box>
      <Box sx={{mt: 4}}>
        <OrderDetailsbody />
      </Box>
      <Box sx={{mt: 4}}>
        <OrderTable />
      </Box>
    </Box>
  )
}

export default OrderDetails
