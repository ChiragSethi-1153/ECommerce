import { Box } from '@mui/material';
import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom';

import UserNavbar from './UserNavbar';
import UserSidebar from './UserSidebar';


interface UserLayoutProps {
    children?: ReactNode;
}

const UserLayout: FC<UserLayoutProps> = () => {
    return (
        <>
            <Box sx={{display: 'flex'}}>
                <UserSidebar />
                <Box sx={{width: "100%"}}>
                    <UserNavbar />
                    <Outlet />
                </Box>
            </Box>
        </>
    )
}

export default UserLayout;