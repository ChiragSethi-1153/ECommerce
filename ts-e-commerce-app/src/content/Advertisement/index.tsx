import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import styles from './Ad.module.css'
import Carousel from 'react-material-ui-carousel'
import Carousel2 from '../../assets/CAROUSEL2.png'
import Carousel3 from '../../assets/CAROUSEL3.png'
import { Paper, Button } from '@mui/material'

const Advertisement = () => {
  return (
    <Box className={styles.advert}>
        
        <Carousel autoPlay className={styles.carousel} >
            {/* map */}
                <Stack>

                <img src={Carousel2}  />  
                
                </Stack>

                <Stack>

                <img src={Carousel3}  />  
                
                </Stack>
         
        </Carousel>
    </Box>
  )
}

export default Advertisement


