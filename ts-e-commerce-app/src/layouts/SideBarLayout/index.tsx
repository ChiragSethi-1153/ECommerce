import { Box } from '@mui/material';
import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
// import Navbar from './Navbar';

interface SidebarLayoutProps {
    children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = () => {
    return (
        <>
            <Box sx={{display: 'flex'}}>
                <Sidebar/>
                <Box sx={{width: '85vw'}} >
                    <Navbar />
                    <Outlet />
                </Box>
            </Box>
        </>
    )
}

export default SidebarLayout;