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



type loginType = {
  email: String,
  password: String,
}


const LoginPage = () => {
  
  const [user, setUser] = useState<loginType>({
    email: "",
    password: "",
  });


  const dispatch = useAppDispatch()

  const loggedin = useAppSelector((state) => state?.login?.content)
  const loading = useAppSelector((state) => state?.login?.isLoading)
  const error = useAppSelector((state) => state?.login?.error)

  console.log(loggedin)

  // if(error){
  //   console.log(error)
  //   return(
  //     <>
  //       <SimpleSnackbar message={"Some Error Occurred. Try Again Later"}  />
  //     </>
  //   )
    
  // }


  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(user)
    dispatch(loginUsers(user))  
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
            value={user?.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
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
            value={user?.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            sx={{
              border: "1px solid #e5e7eb",
              bgcolor: "#faf9fb",
              width: "90%",
              borderRadius: "10px",
              p: "5px 10px",
              mb: 3,
            }}
          />

          <Button
            onClick={(e) => {handleClick(e)}}
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
