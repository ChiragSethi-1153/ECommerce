import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const ProductItemCard = () => {
  return (
    <Card>
      <CardActions
        disableSpacing
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          height: "0",
          p: "0",
        }}
      >
        <IconButton
          aria-label="add to favorites"
          sx={{
            boxShadow: "10px",
            position: "relative",
            right: "4px",
            top: "25px",
            zIndex: "1",
            bgcolor: "#fff",
            display: "flex",
            alignItems: "center",
            "&:hover": {
                bgcolor: 'white',
                top: '23px'
            }
          }}
        >
          <AddIcon />
        </IconButton>
      </CardActions>

      <CardMedia
        component="img"
        height="194"
        image={require("../../assets/product1.png")}
        alt="Paella dish"
        sx={{ position: "relative", top: "2px" }}
      />
      <CardContent sx={{ m: '0'}}>
      <Typography>
            Price
        </Typography>
        <Typography>
            description
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductItemCard;
