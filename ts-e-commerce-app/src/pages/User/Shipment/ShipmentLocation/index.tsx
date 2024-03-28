import { Box, Button, Grid, Paper, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import CustomButton from '../../../../components/Button/CustomButton'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const ShipmentLocation = () => {
  return (
    <Stack p={1.5} gap={1} sx={{ backgroundColor: 'white', borderRadius: '10px', height: '526px' }} >
    <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
            <Stack gap={0.3}>
                <Stack color={'#adadb9'} gap={1} direction={'row'}>Order Created on: <Box color={'black'} fontWeight={'600'}>7/3/3 -10.30 am</Box></Stack >
                <Stack color={'#adadb9'} gap={1} direction={'row'} >Tracking Id: <Box color={'black'} fontWeight={'600'}>LOOONHJHV7780GUG8B</Box></Stack >
                <Stack color={'#adadb9'} gap={1} direction={'row'}>Last Updated: <Box color={'black'} fontWeight={'600'}>Today - 9.00am</Box></Stack >
            </Stack>
        </Grid>
        <Grid item md={4} xs={12}>
            <CustomButton handleClick={() => { }} variant="outlined" title="Cancel order" color='primary' />
        </Grid>
    </Grid>
    <Box>
        <Stepper activeStep={0} orientation="vertical">
            <Step >
                <StepLabel ><Typography fontWeight={'600'}>Pick</Typography></StepLabel>
                <StepContent>
                    <Stack gap={0.5} sx={{ backgroundColor: '#f8f9fb', borderRadius: '10px', padding: '10px' }}>
                        <Box color={'#adadb9'}>Pickup</Box>
                        <Box fontWeight={'600'}>769 Ward road,Texas,77789</Box>
                        <Box display={'flex'} color={'#adadb9'} alignItems={'center'}><CalendarMonthIcon sx={{ color: '#1a76d2' }} /> 7/7/2020 : 10 am - 22pm</Box>
                        <Box display={'flex'} color={'#adadb9'} alignItems={'center'}><PersonIcon sx={{ color: '#1a76d2' }} />Stephen</Box>
                        <Box display={'flex'} color={'#adadb9'} alignItems={'center'}><CallIcon sx={{ color: '#1a76d2' }} /> +2 22787876872</Box>
                        <Box display={'flex'} color={'#adadb9'} alignItems={'center'}><EmailIcon sx={{ color: '#1a76d2' }} /> user@mail.com</Box>
                    </Stack>
                </StepContent>
            </Step>
            <Step >
                <StepLabel><Typography fontWeight={'600'}>Destination</Typography></StepLabel>
                <StepContent>
                    <Stack gap={0.5} sx={{ backgroundColor: '#f8f9fb', borderRadius: '10px', padding: '10px' }}>
                        <Box>Destination</Box>
                        <Box>769 Ward road,Texas,77789</Box>
                        <Box display={'flex'} alignItems={'center'}><CalendarMonthIcon sx={{ color: '#1a76d2' }} /> 7/7/2020 : 10 am - 22pm</Box>
                        <Box display={'flex'} alignItems={'center'}><PersonIcon sx={{ color: '#1a76d2' }} />Stephen</Box>
                        <Box display={'flex'} alignItems={'center'}><CallIcon sx={{ color: '#1a76d2' }} /> +2 22787876872</Box>
                        <Box display={'flex'} alignItems={'center'}><CallIcon sx={{ color: '#1a76d2' }} /> <EmailIcon />user@mail.com</Box>
                    </Stack>
                </StepContent>
            </Step>
        </Stepper>
    </Box>

</Stack>
  )
}

export default ShipmentLocation
