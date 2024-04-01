import { Avatar, Box, InputBase, Stack, Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styles from'./Navbar.module.css'
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useAppSelector } from '../../../app/hooks';

const Navbar = () => {

    let date = new Date()
    let day = date.getDay()
    let currentDate = date.getDate()
    let currentMonth = date.getMonth()

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let currentDay = `${weekday[day]}, ${currentDate}, ${month[currentMonth]} `

    const user = useAppSelector((state) => state?.login?.content?.user)


  return (
    <Box className={styles.navbar}>
        <Box className={styles.searchBox}>
            <InputBase 
                placeholder='Search ...' 
                sx={{fontFamily: 'Poppins', fontSize: "14px", padding: '0'}}
                startAdornment={
                    <SearchIcon sx={{paddingLeft: '10px', pr: '10px', color: "#9d9d9d"}} />
                }
            />
        </Box>
        <Stack flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={4} sx={{height: '60px', mr: '80px'}}>
            <Stack flexDirection={'row'} justifyContent={'center'}>
            <CalendarMonthOutlinedIcon />
            <Typography sx={{fontFamily: "Poppins", ml: '10px', fontWeight: '500'}}>{currentDay}</Typography>
            </Stack>
            
            <NotificationsIcon sx={{ml:'20px'}} />
            
            <Box sx={{display: 'flex', alignItems: 'center', ml: '60px'}}>
                <Stack sx={{textAlign: 'right'}}>
                    <Typography sx={{fontFamily: "Poppins", ml: '10px', fontWeight: '500'}}>{user?.name}</Typography>
                    <Typography sx={{fontFamily: "Poppins", ml: '10px', fontWeight: '500'}}>{user?.role}</Typography>
                </Stack>
                <Avatar sx={{width: '40px', height: '40px', ml: '10px'}}></Avatar>
            </Box>

        </Stack >
    </Box>
  )
}

export default Navbar
