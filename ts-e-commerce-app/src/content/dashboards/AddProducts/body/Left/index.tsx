import {
  Box,
  FormControl,
  Grid,
  Input,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import InputField from "../../../../../components/InputField";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { getCategory } from "../../../../../features/Category/categoryAction";

type categorytype = {
  uuid: String;
  categoryName: String;
  categoryImage: String[];
  subCategories: String[];
}[];

type newProductDetails = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

type productDetails = {
  category: String;
  title: String;
  description: String;
  stock: number;
  price: number,
};


const ProductLeft = ( setProduct: newProductDetails, product: productDetails ) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const categories = useAppSelector((state) => state?.category?.content);
  console.log(categories.map((i) => i.categoryName));



  return (
    <Stack>
      <Typography>Product Name</Typography>
      <InputField
        header={"Product Name"}
        fontsize={"14"}
        fontweight={"600"}
        placeholder={"Product Name"}
        value={product?.title}
        handleChange={(e) => setProduct({...product, product?.title: e.target.value})}
      />
      <Stack gap={1} py={1}>
        <Typography>Description</Typography>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          placeholder="Description................."
          value={product?.description}
        onChange={(e) => setProduct({...product, description: e.target.value})}
        />
      </Stack>
      <Typography>Category</Typography>
      <FormControl sx={{ mb: 1 }}>
        <InputLabel>Select Category</InputLabel>
        <Select
          label={`Select category`}
          value={product?.category}
          onChange={(e) => setProduct({...product, category: e.target.value})}
          sx={{ bgcolor: "#fff" }}
        >
          {categories &&
            categories.length > 0 &&
            categories.map((i) => {
              return (
                <>
                  <MenuItem value={`${i?.categoryName}`}>
                    {i?.categoryName}
                  </MenuItem>
                </>
              );
            })}
        </Select>
      </FormControl>

      <Typography>Brand Name</Typography>
      <InputField
        header={"Brand Name"}
        fontsize={"14"}
        fontweight={"600"}
        placeholder={"Brand Name"}
        value={''}
        handleChange={() => {}}
      />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography>SKU</Typography>
          <InputField
            header={"SKU"}
            fontsize={"14"}
            fontweight={"600"}
            placeholder={"SKU"}
            value={''}
        handleChange={() => {}}
          />
          <Typography>Stock Quantity</Typography>
          <TextField
            placeholder={"Stock Quantity"}
            value={product?.stock}
            onChange={(e) => setProduct({...product, stock: e.target.value})}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Regular Price</Typography>
          <TextField
            type="number"
            placeholder={"Regular Price"}
            value={product?.price}
            onChange={(e) => setProduct({...product, price: e.target.value})}
          />
          <Typography>Sale Price</Typography>
          <InputField
            header={"Sale Price"}
            fontsize={"14"}
            fontweight={"600"}
            placeholder={"Sale Price"}
            value={''}
            handleChange={() => {}}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ProductLeft;
