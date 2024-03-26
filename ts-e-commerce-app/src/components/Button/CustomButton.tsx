import { Button } from "@mui/material";
import React from "react";

type inputProps = {
  title: String;
  variant: "contained" | "outlined" | "text";
  color: "inherit" | "primary" | "secondary"| "success" | "error" | "info"| "warning" ;
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
};

const CustomButton = (inputs: inputProps) => {
  return (
  <Button 
    variant={inputs.variant}
    color={inputs.color}
    onClick={inputs.handleClick}
    sx={{
        color: ''
    }}
    >
        {inputs.title}
        </Button>
    );
};

export default CustomButton;
