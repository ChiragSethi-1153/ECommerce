import {
  Box,
  Paper,
  Stack,
  Typography,
  InputBase,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginUsers } from "../../features/Auth/authAction";
import SimpleSnackbar from "../../components/Snackbar";
import { useNavigate } from "react-router-dom";

type loginType = {
  email: String;
  password: String;
};

const LoginPage = () => {
  const [input, setInput] = useState<loginType>({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const loggedin = useAppSelector((state) => state?.login?.content);
  const loading = useAppSelector((state) => state?.login?.isLoading);
  const error = useAppSelector((state) => state?.login?.error);
  const isLoggedIn = useAppSelector((state) => state?.login?.isLoggedIn);

  const role = loggedin?.user?.role;
  const token = loggedin?.token;
  const status = loggedin?.user?.status;
  const message = loggedin?.message;
  // if(error){
  //   console.log(error)
  //   return(
  //     <>
  //       <SimpleSnackbar message={"Some Error Occurred. Try Again Later"}  />
  //     </>
  //   )

  // }

  const navigateSignup = async (e: React.MouseEvent<HTMLSpanElement>) => {
    navigate('/signup')
  }

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(input);
    await dispatch(loginUsers(input));
    if (isLoggedIn && role === "user" && status === "Active" && token !== "") {
      navigate("/");
    }
    if (
      isLoggedIn &&
      role === "vendor" &&
      status === "Active" &&
      token !== ""
    ) {
      navigate("/vendor/dashboard");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f9fafb",
      }}
    >
      <Paper
        sx={{
          width: "55vw",
          height: "532px",
          display: "flex",
          alignItems: "center",
          p: 3,
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={require("../../assets/loginPic.png")}
            alt="LoginPage"
            width={"90%"}
          />
        </Box>
        <Stack
          width={"50%"}
          alignItems={"flex-start"}
          justifyContent={"center"}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "bold", mb: 4 }}>
            Sign In
          </Typography>

          <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: 1 }}>
            Your Email
          </Typography>
          <InputBase
            placeholder="Email"
            type="email"
            value={input?.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            sx={{
              border: "1px solid #e5e7eb",
              bgcolor: "#faf9fb",
              width: "90%",
              borderRadius: "10px",
              p: "5px 10px",
              mb: 3,
            }}
          />

          <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: 1 }}>
            Password
          </Typography>
          <InputBase
            placeholder="Password"
            type="password"
            value={input?.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
            sx={{
              border: "1px solid #e5e7eb",
              bgcolor: "#faf9fb",
              width: "90%",
              borderRadius: "10px",
              p: "5px 10px",
              mb: 3,
            }}
          />
          <Typography sx={{ mb: 1 }}>
            Don't have an account?{" "}
            <span
              onClick={(e) => navigateSignup(e)}
              style={{ cursor: "pointer", color: "#4f80e1" }}
            >
              Sign Up
            </span>
          </Typography>
          <Button
            onClick={(e) => {
              handleClick(e);
            }}
            color="primary"
            variant="contained"
            sx={{
              textTransform: "none",
              width: "90%",
              borderRadius: "10px",
              fontSize: "16px",
              boxShadow: "none",
              mb: 4,
            }}
          >
            Sign In
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default LoginPage;
