import {
  Avatar,
  Box,
  Button,
  InputBase,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./UserNavbar.module.css";
import { ReactComponent as Logo } from "../../../assets/svg/logo.svg";
import PlaceIcon from "@mui/icons-material/Place";
import CustomButton from "../../../components/Button/CustomButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from '@mui/icons-material/Menu';

const UserNavbar = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  const token = localStorage.getItem("token");

  if (token) {
    setLoggedIn(true);
  }

  return (
    <Box className={styles.navbar}>
      {/* <Box display={"flex"} marginLeft={3} marginTop={1}>
        <Box marginRight={'40px'}>
        <MenuIcon />
        </Box>
        <Logo />
        <Typography
          sx={{
            fontFamily: "Poppins",
            marginLeft: "10px",
            fontWeight: "600",
            fontSize: "24px",
          }}
        >
          InstaDeliver
        </Typography>
      </Box> */}

      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginLeft={20}
        width={800}
      >
        <Box className={styles.searchBox}>
          <InputBase
            placeholder="Search products, stores, and recipes"
            className={styles.searchbar}
            sx={{
              "&::placeholder": {
                color: "black",
                fontWeight: "600",
              },
            }}
            endAdornment={
              <SearchIcon
                sx={{
                  paddingLeft: "10px",
                  pr: "10px",
                  color: "black",
                  width: "50px",
                }}
              />
            }
          />
        </Box>

        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          width={80}
        >
          <PlaceIcon />
          <Typography sx={{ fontSize: "14px", fontWeight: "bold" }}>
            123456
          </Typography>
        </Box>
      </Box>

      {isLoggedIn ? (
        <Box display={"flex"} flexDirection={"row"} width={400} gap={2}>
          <CustomButton
            title={"Log in"}
            color="primary"
            handleClick={() => {}}
            variant="contained"
          />
          <Button variant="contained" sx={{ bgcolor: "#ededed", gap: '10px', borderRadius: '50px', "&:hover": {bgcolor: '#ededed'}}}>
            <ShoppingCartIcon sx={{ color: "black" }} />
            <Typography color={"black"}>0</Typography>
          </Button>
        </Box>
      ) : (
        <Stack
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={4}
          sx={{ height: "60px", mr: "80px" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", ml: "60px" }}>
            <Stack sx={{ textAlign: "right" }}>
              <Typography
                sx={{ fontFamily: "Poppins", ml: "10px", fontWeight: "500" }}
              >
                Name
              </Typography>
              <Typography
                sx={{ fontFamily: "Poppins", ml: "10px", fontWeight: "500" }}
              >
                Role
              </Typography>
            </Stack>
            <Avatar sx={{ width: "40px", height: "40px", ml: "10px" }}></Avatar>
          </Box>
        </Stack>
      )}

    </Box>
  );
};

export default UserNavbar;
