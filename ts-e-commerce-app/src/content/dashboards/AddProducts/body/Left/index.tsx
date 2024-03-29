import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import InputField from "../../../../../components/InputField";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { getCategory } from "../../../../../features/Category/categoryAction";

type categorytype = {
  uuid: String;
  categoryName: String;
  categoryImage: String[];
  subCategories: String[];
}[];

const ProductLeft = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const categories = useAppSelector((state) => state?.category?.content);
  console.log(categories.map((i) => i.categoryName));

  const [inputs, setInputs] = useState();

  return (
    <Stack>
      <Typography>Product Name</Typography>
      <InputField
        header={"Product Name"}
        fontsize={"14"}
        fontweight={"600"}
        placeholder={"Product Name"}
      />
      <Stack gap={1} py={1}>
        <Typography>Description</Typography>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          placeholder="Description................."
        />
      </Stack>
      <Typography>Category</Typography>
      <FormControl sx={{mb: 1}}>
        <InputLabel>Select Category</InputLabel>
        <Select
          //   value={status}
          label={`Select category`}
          //   onChange={handleChange}
          sx={{ bgcolor: "#fff" }}
        ></Select>
      </FormControl>

      <Typography>Brand Name</Typography>
      <InputField
        header={"Brand Name"}
        fontsize={"14"}
        fontweight={"600"}
        placeholder={"Brand Name"}
      />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography>SKU</Typography>
          <InputField
            header={"SKU"}
            fontsize={"14"}
            fontweight={"600"}
            placeholder={"SKU"}
          />
          <Typography>Stock Quantity</Typography>
          <InputField
            header={"Stock Quantity"}
            fontsize={"14"}
            fontweight={"600"}
            placeholder={"Stock Quantity"}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Regular Price</Typography>
          <InputField
            header={"Regular Price"}
            fontsize={"14"}
            fontweight={"600"}
            placeholder={"Regular Price"}
          />
          <Typography>Sale Price</Typography>
          <InputField
            header={"Sale Price"}
            fontsize={"14"}
            fontweight={"600"}
            placeholder={"Sale Price"}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default ProductLeft;
