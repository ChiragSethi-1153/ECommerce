import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import styles from './Ad.module.css'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const Advertisement = () => {
  return (
    <Box className={styles.advert}>
        
        <Carousel autoPlay className={styles.carousel} >
            {/* map */}
                <Stack className={styles.carouselImage}>
                  
                <Typography color={'white'} >Give the gift of Insta</Typography>
                <Typography color={'white'}>The gift that keeps on giving</Typography>
                <Stack direction={'row'}>
                  <Button variant='contained' sx={{bgcolor: 'white', color: '#750146', borderRadius:'50px'}}>Shop now</Button>
                  <Button sx={{color: '#fff', bgcolor: 'none'}}>Terms Apply</Button>
                </Stack>
                </Stack>

                <Stack className={styles.carouselImage}>
                  
                <Typography color={'white'} >Give the gift of Insta</Typography>
                <Typography color={'white'}>The gift that keeps on giving</Typography>
                <Stack direction={'row'}>
                  <Button variant='contained' sx={{bgcolor: 'white', color: '#750146', borderRadius:'50px'}}>Shop now</Button>
                  <Button sx={{color: '#fff', bgcolor: 'none'}}>Terms Apply</Button>
                </Stack>
                </Stack>
         
        </Carousel>
    </Box>
  )
}

export default Advertisement


