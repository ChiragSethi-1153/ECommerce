import {
  Box,
  FormControl,
  InputLabel,
  Paper,
  Select,
  Stack,
  Typography,
  MenuItem,
  InputBase,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUsers } from "../../features/Auth/authAction";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

type signupType = {
  role: String;
  name: String;
  email: String;
  password: String;
};

const SignupPage = () => {
  const [user, setUser] = useState<signupType>({
    role: "",
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const navigateLogin = async (e: React.MouseEvent<HTMLSpanElement>) => {
    navigate("/login");
  };

  const dispatch = useAppDispatch();

  const signup = useAppSelector((state) => state?.signup?.content)
  const error = useAppSelector((state) => state?.signup?.error)

  const message = signup?.message

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
    dispatch(registerUsers(user));
    if(error){
      window.alert("some error occcured try again later")
    }
    else{
      navigate('/login')
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
          height: "690px",
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
            src={require("../../assets/singupPic.png")}
            alt="SignupPage"
            width={"90%"}
          />
        </Box>
        <Stack
          width={"50%"}
          alignItems={"flex-start"}
          justifyContent={"center"}
        >
          <Typography sx={{ fontSize: "20px", fontWeight: "bold", mb: 4 }}>
            Create your Free Account
          </Typography>

          <Box component={"form"} onSubmit={(e) => handleSubmit(e)}>

          <FormControl sx={{ mb: 3, width: "90%" }}>
            <InputLabel>
              <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                Select your role
              </Typography>
            </InputLabel>
            <Select
              id="demo-simple-select"
              placeholder="Role"
              value={user?.role}
              label={"Select Your Role"}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
              required
              sx={{
                bgcolor: "#faf9fb",
              }}
              >
              <MenuItem value={"user"}>User</MenuItem>
              <MenuItem value={"vendor"}>Vendor</MenuItem>
            </Select>
          </FormControl>

          <Typography sx={{ fontSize: "16px", fontWeight: "bold", mb: 1 }}>
            Your Name
          </Typography>
          <InputBase
            placeholder="Name"
            type="text"
            required
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
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
            Your Email
          </Typography>
          <InputBase
            placeholder="Email"
            type="email"
            required
            value={user.email}
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
            required
            value={user.password}
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

          <Typography sx={{ mb: 1 }}>
            Already have an account?{" "}
            <span
              onClick={(e) => navigateLogin(e)}
              style={{ cursor: "pointer", color: "#4f80e1" }}
              >
              Login
            </span>
          </Typography>

          <Button 
            color="primary"
            variant="contained"
            type="submit"
            sx={{
              textTransform: "none",
              borderRadius: "10px",
              fontSize: "16px",
              width: "90%",
              fontWeight: "500",
              boxShadow: "none",
              mb: 4,
            }}
            >
            Create Account
          </Button>
        </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default SignupPage;
