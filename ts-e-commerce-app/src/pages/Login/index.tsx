import {
  Box,
  FormControl,
  InputLabel,
  Paper,
  Select,
  Stack,
  Typography,
  SelectChangeEvent,
  MenuItem,
  InputBase,
  Button,
} from "@mui/material";
import React from "react";
import CustomButton from "../../components/Button/CustomButton";

const LoginPage = () => {
  const [role, setRole] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
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
            onClick={() => {}}
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
