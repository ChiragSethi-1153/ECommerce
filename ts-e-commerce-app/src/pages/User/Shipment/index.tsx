import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import styles from './Shipment.module.css'
import Header from '../../../components/Header/Header'
import DeliveryStepper from './Stepper'
import ShipmentTable from './ShipmentTable'

const Shipment = () => {
  return (
    <Box className={styles.shipment}>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Header header={"Order ID: ${OrderId}"} subheader={``} />
        <Typography>status</Typography>
      </Stack>

    <Box >
      <DeliveryStepper />
    </Box>

    <Grid container spacing={2}>
    <Grid item xs={8}>
      <ShipmentTable />
    </Grid>
    <Grid item xs={4}>
    </Grid>
    </Grid>

    </Box>
  )
}

export default Shipment
