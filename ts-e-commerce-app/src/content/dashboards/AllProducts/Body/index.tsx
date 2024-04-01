import { Box, Grid, Skeleton } from '@mui/material'
import React, { useEffect } from 'react'
import ProductCard from '../../../../components/ProductCard/ProductCard'
import { useAppDispatch, useAppSelector } from '../../../../app/hooks'
import { getProducts } from '../../../../features/Products/productAction'



const Body = () => {

  const user = useAppSelector((state) => state?.login?.content?.user)
  const dispatch = useAppDispatch()


  
    useEffect(() => {
      if(user.role === 'vendor'){
      dispatch(getProducts(user?.uuid))
    }
  }, [dispatch, user?.role, user?.uuid])

  const products = useAppSelector((state) => state?.products?.content)
  const loading = useAppSelector((state) => state?.products?.isLoading)

  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={3}
        columns={{ xs: 1, sm: 1, md: 2,  lg: 3, xl: 4}}
      >
        {
          loading && <Skeleton animation="wave" variant="rectangular" width={350} height={240} />
        }
        {
        products && products.length>0 && products.map((i) => {
          return (
            <>
            <ProductCard items={i} />
            </>
          )
        })
      }
      </Grid>
    </Box>
  )
}

export default Body
