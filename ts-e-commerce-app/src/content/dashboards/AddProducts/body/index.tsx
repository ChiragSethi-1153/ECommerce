import { Grid } from '@mui/material'
import React, { useState } from 'react'
import ProductLeft from './Left'
import ProductRight from './right'


type productDetails = {
  category: string;
  title: string;
  description: string;
  stock: number;
  price: number,
};




const AddProductBody = () => {


  const [images, setImages] = useState<string[] | []>([])

  const [inputs, setInputs] = useState<productDetails>({category: '', title: '', description: '', stock: 0, price: 0})



  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const formData = new FormData();
  //     formData.append("title", inputs.title);
  //     formData.append("body", inputs.body);
  //     formData.append("images", images);
  //     for (let i = 0; i < images.length; i++) {
  //       formData.append("images", images[i]);
  //     }
  //     dispatch(createPost(formData));
  //     hide()
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  

  return (
    <Grid spacing={2} container my={3} p={3} sx={{ backgroundColor: 'white', borderRadius: '20px' }}>
                    <Grid item xs={6.5} >
                        <ProductLeft setProduct={setInputs  } product={inputs} />
                    </Grid>
                    <Grid item xs={5.5}>
                        {/* <Box width={'100%'} height={'30%'} sx={{ backgroundColor: 'lightgray', borderRadius: '15px' }}></Box> */}
                        <ProductRight  />
                    </Grid>
                </Grid>
  )
}

export default AddProductBody
