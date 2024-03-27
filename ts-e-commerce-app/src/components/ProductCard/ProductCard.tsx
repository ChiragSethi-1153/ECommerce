import { Button, Card, CardActions, CardContent, CardMedia, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import {ReactComponent as Logo} from '../../assets/svg/logo.svg'
const ProductCard = () => {
  return (
    <>
    <Card sx={{ maxWidth: 350, boxShadow: 'none', border: '1px solid #ebedeb'}}>  
      <CardContent sx={{display: "flex", flexDirection: "column"}} >

        <Stack flexDirection={'row'}>
            <img src={require('../../assets/logo192.png')}  alt='img' width={'30px'} />
            <Stack>
        <Typography>
          Product Name
        </Typography>
        <Typography>
            Category
        </Typography>
        <Typography>
            Price
        </Typography>

            </Stack>
        
        <Button>...</Button>
        </Stack>

        <Stack>
            <Typography>Description</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>
        </Stack>
        <Stack>
            <Typography>Sales</Typography>
            <Divider />
            <Typography>Remaining Products</Typography>
        </Stack>
      </CardContent>
      
    </Card>
    <Card sx={{ maxWidth: 350 }}>  
      <CardContent sx={{display: "flex", flexDirection: "column"}} >

        <Stack flexDirection={'row'}>
            <img src='../../assets/logo192.png'  alt='img' width={'30px'} />
            <Stack>
        <Typography>
          Product Name
        </Typography>
        <Typography>
            Category
        </Typography>
        <Typography>
            Price
        </Typography>

            </Stack>
        
        <Button>...</Button>
        </Stack>

        <Stack>
            <Typography>Description</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>
        </Stack>
        <Stack>
            <Typography>Sales</Typography>
            <Divider />
            <Typography>Remaining Products</Typography>
        </Stack>
      </CardContent>
      
    </Card>
    
    <Card sx={{ maxWidth: 350 }}>  
      <CardContent sx={{display: "flex", flexDirection: "column"}} >

        <Stack flexDirection={'row'}>
            <img src='../../assets/logo192.png'  alt='img' width={'30px'} />
            <Stack>
        <Typography>
          Product Name
        </Typography>
        <Typography>
            Category
        </Typography>
        <Typography>
            Price
        </Typography>

            </Stack>
        
        <Button>...</Button>
        </Stack>

        <Stack>
            <Typography>Description</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>
        </Stack>
        <Stack>
            <Typography>Sales</Typography>
            <Divider />
            <Typography>Remaining Products</Typography>
        </Stack>
      </CardContent>
      
    </Card>

    <Card sx={{ maxWidth: 350 }}>  
      <CardContent sx={{display: "flex", flexDirection: "column"}} >

        <Stack flexDirection={'row'}>
            <img src='../../assets/logo192.png'  alt='img' width={'30px'} />
            <Stack>
        <Typography>
          Product Name
        </Typography>
        <Typography>
            Category
        </Typography>
        <Typography>
            Price
        </Typography>

            </Stack>
        
        <Button>...</Button>
        </Stack>

        <Stack>
            <Typography>Description</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>
        </Stack>
        <Stack>
            <Typography>Sales</Typography>
            <Divider />
            <Typography>Remaining Products</Typography>
        </Stack>
      </CardContent>
      
    </Card>

    <Card sx={{ maxWidth: 350 }}>  
      <CardContent sx={{display: "flex", flexDirection: "column"}} >

        <Stack flexDirection={'row'}>
            <img src='../../assets/logo192.png'  alt='img' width={'30px'} />
            <Stack>
        <Typography>
          Product Name
        </Typography>
        <Typography>
            Category
        </Typography>
        <Typography>
            Price
        </Typography>

            </Stack>
        
        <Button>...</Button>
        </Stack>

        <Stack>
            <Typography>Description</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>
        </Stack>
        <Stack>
            <Typography>Sales</Typography>
            <Divider />
            <Typography>Remaining Products</Typography>
        </Stack>
      </CardContent>
      
    </Card>

    <Card sx={{ maxWidth: 350 }}>  
      <CardContent sx={{display: "flex", flexDirection: "column"}} >

        <Stack flexDirection={'row'}>
            <img src='../../assets/logo192.png'  alt='img' width={'30px'} />
            <Stack>
        <Typography>
          Product Name
        </Typography>
        <Typography>
            Category
        </Typography>
        <Typography>
            Price
        </Typography>

            </Stack>
        
        <Button>...</Button>
        </Stack>

        <Stack>
            <Typography>Description</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit</Typography>
        </Stack>
        <Stack>
            <Typography>Sales</Typography>
            <Divider />
            <Typography>Remaining Products</Typography>
        </Stack>
      </CardContent>
      
    </Card>

    </>

  )
}

export default ProductCard
