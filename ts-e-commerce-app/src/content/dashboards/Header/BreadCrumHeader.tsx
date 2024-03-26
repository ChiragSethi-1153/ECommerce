import { Stack, Box, Typography, Breadcrumbs } from "@mui/material";
import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

type headings = {
  header: String;
  subheader: {
    link: String;
    text: String;
  }[];
};

const BreadCrumHeader = ({ header, subheader }: headings) => {
  
  
  const breadcrumbs = [
    subheader?.length > 0 &&
      subheader?.map((i) => {
        return (
          <div role="presentation" onClick={handleClick}>
            <Link
              to={`${i.link}`}
              color="inherit"
              style={{ fontSize: "14px", fontWeight: "400", textDecoration: 'none', color: 'black' }}
            >
              {i.text}
            </Link>
            
          </div>
        );
      }),
  ];

  return (
    <Box>
      <Typography fontSize="20px" fontWeight="600">
              {header}
          </Typography>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadCrumHeader;
