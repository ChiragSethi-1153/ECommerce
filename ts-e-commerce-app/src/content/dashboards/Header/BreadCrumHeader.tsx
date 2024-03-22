import { Stack, Box, Typography, Breadcrumbs, Link} from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { NavLink } from 'react-router-dom';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

type headings = {
    header: String,
    subheader: {
        link: React.MouseEvent<HTMLAnchorElement>,
        text: String
    }[]
  }

const BreadCrumHeader = ({header, subheader} : headings) => {

    const breadcrumbs = [

        subheader?.map((i) => {
            return(
                <>
                 {/* <NavLink to={i.link} color="inherit" onClick={handleClick}>
                    {i.text}
                </NavLink> */}
                </>
            )
        })

     
      
    ];

  return (
    <Box>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  )
}

export default BreadCrumHeader



