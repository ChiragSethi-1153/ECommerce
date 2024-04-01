import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

const ProductCard = (items: any) => {
  const item = items?.items;
  return (
    <>
      <Card
        sx={{
          maxWidth: 350,
          boxShadow: "none",
          border: "1px solid #ebedeb",
          minWidth: "350px",
        }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Stack flexDirection={"row"} justifyContent={'space-between'} marginBottom={2}>
            <Stack direction={'row'}>
            {item?.productImages &&
              item?.productImages.length > 0 &&
              item?.productImages?.map((i: any) => {
                return (
                  <img
                    src={`${process.env.REACT_APP_PRODUCT_SERVER}/${i}`}
                    alt={"category"}
                    width={"50px"}
                    style={{ marginRight: "10px" }}
                  />
                );
              })}
            <Stack>
              <Typography>{item?.title}</Typography>
              <Typography>{item?.category}</Typography>
              <Typography>{item?.price}</Typography>
            </Stack>
            </Stack>

            <Button>...</Button>
          </Stack>

          <Stack marginBottom={2}>
            <Typography fontWeight={'bold'}>Description : </Typography>
            <Typography>{item?.description}</Typography>
          </Stack>
          <Stack >
            <Typography>Sales</Typography>
            <Divider />
            <Stack direction={"row"} justifyContent={"space-between"}>
              <Typography>Remaining Products</Typography>
              <Typography>{item?.stock}</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
