import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import ContentPasteOutlinedIcon from '@mui/icons-material/ContentPasteOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';


const SettingsLeft = () => {
    return (
        <Box sx={{ width:"213px", }}>
        <List aria-labelledby="nested-list-subheader" sx={{width:"243px", p:"0px"}} >
            <ListItemButton sx={{pl:"0px", pr:"0px", fontSize:"17px"}}>
                <ListItemIcon sx={{ml:"22px", mr:"18px", minWidth:"14px"}}>
                    <InfoOutlinedIcon sx={{width:"14px"}} />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{fontSize:"17px", lineHeight:"22px", fontWeight:"500"}} sx={{width:"169px"}} primary="Personal Information" />
            </ListItemButton>
            <ListItemButton sx={{pl:"0px", pr:"0px"}}>
                <ListItemIcon sx={{ml:"22px", mr:"18px", minWidth:"14px"}}>
                    <SecurityOutlinedIcon sx={{width:"14px"}}/>
                </ListItemIcon>
                <ListItemText primary="Security" />
            </ListItemButton>
            <ListItemButton sx={{pl:"0px", pr:"0px"}}>
                <ListItemIcon sx={{ml:"22px", mr:"18px", minWidth:"14px"}}>
                    <AccountBalanceWalletOutlinedIcon sx={{width:"14px"}}/>
                </ListItemIcon>
                <ListItemText primary="Billing & Tax" />
            </ListItemButton>
            <ListItemButton sx={{pl:"0px", pr:"0px"}}>
                <ListItemIcon sx={{ml:"22px", mr:"18px", minWidth:"14px"}}>
                    <ContentPasteOutlinedIcon sx={{width:"14px"}}/>
                </ListItemIcon>
                <ListItemText primary="Plans" />
            </ListItemButton>
            <ListItemButton sx={{pl:"0px", pr:"0px"}}>
                <ListItemIcon sx={{ml:"22px", mr:"18px", minWidth:"14px"}}>
                    <ShoppingBagOutlinedIcon sx={{width:"14px"}}/>
                </ListItemIcon>
                <ListItemText primary="Linked Shops" />
            </ListItemButton>
        </List>
        </Box>
    )
}

export default SettingsLeft