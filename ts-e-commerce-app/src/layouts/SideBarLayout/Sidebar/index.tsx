import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import {ReactComponent as Logo} from '../../../assets/svg/logo.svg'
import {ReactComponent as DashboardIcon} from '../../../assets/svg/1.svg'
import {ReactComponent as ProductsIcon} from '../../../assets/svg/2.svg'
import {ReactComponent as OrdersIcon} from '../../../assets/svg/4.svg'
import {ReactComponent as CustomersIcon} from '../../../assets/svg/5.svg'
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import './Sidebar.module.css'
import { Box, ListItem, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const [open, setOpen] = React.useState(true);

  const activeState = ({ isActive }: { isActive: boolean }) => {
    return {
      borderRadius: '0.4rem',
      width:"100%",
      color: isActive ? "white" : "black",
      backgroundColor: isActive ? "#4F80E1" : "white",
      textDecoration: "none",
      fontWeight: "400",
      fontSize:"11px",
      lineHeight:"16px",
      marginBottom: '10px',
      display: "flex"
    };
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box className="sidebar" sx={{width: "300px", display: "flex", borderRight:"1px solid #E6E6E6", minHeight: '100vh', backgroundColor:'white', zIndex:"1",flexDirection:"column", alignItems:"center"}}>

    <List
      sx={{ width: '80%', maxWidth: 360, bgcolor: 'background.paper', alignItems: 'center' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      >
        <ListItem sx={{marginBottom: '40px'}}>
            <Logo />
            <Typography sx={{fontFamily: 'Poppins', marginLeft: "10px", fontWeight:'600', fontSize: '24px'}}>InstaDeliver</Typography>
        </ListItem>

      <NavLink to="/vendor/dashboard" style={activeState} >
      <ListItemButton>

        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <Typography sx={{fontFamily: 'Poppins', fontWeight:'400'}} >Dashboard</Typography>
      </ListItemButton>
      </NavLink>

      <NavLink to="/vendor/products" style={activeState} >

      <ListItemButton >
        <ListItemIcon>
          <ProductsIcon />
        </ListItemIcon>
        <Typography sx={{fontFamily: 'Poppins', fontWeight:'400'}} >All Products</Typography>
      </ListItemButton >
      </NavLink>

      <NavLink to="/vendor/orders" style={activeState} >
      <ListItemButton onClick={handleClick} >
        <ListItemIcon>
          <OrdersIcon />
        </ListItemIcon>
        <Typography sx={{fontFamily: 'Poppins', fontWeight:'400'}} >Orders</Typography>
        {/* {open ? <ExpandLess /> : <ExpandMore />} */}
      </ListItemButton>
      </NavLink>
      {/* <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Typography sx={{fontFamily: 'Poppins', fontWeight:'400'}} >Customers</Typography>
          </ListItemButton>
        </List>
      </Collapse> */}
       <NavLink to="/vendor/customers" style={activeState} >
      <ListItemButton >
        <ListItemIcon>
          <CustomersIcon />
        </ListItemIcon>
        <Typography sx={{fontFamily: 'Poppins', fontWeight:'400'}} >Customers</Typography>
      </ListItemButton>
    </NavLink>
    <NavLink to="/vendor/settings" style={activeState}>

      <ListItemButton >
        <ListItemIcon>
          <SettingsIcon sx={{color: "black"}}/>
        </ListItemIcon>
        <Typography sx={{fontFamily: 'Poppins', fontWeight:'400'}} >Settings</Typography>
      </ListItemButton>
    </NavLink>

    <NavLink to="/login" style={activeState}>
        
      <ListItemButton >
        <ListItemIcon>
          <LogoutIcon sx={{color: "black"}} />
        </ListItemIcon>
        <Typography sx={{fontFamily: 'Poppins', fontWeight:'400'}} >Log Out</Typography>
      </ListItemButton>
    </NavLink>
    </List>
    </Box>
  );
}