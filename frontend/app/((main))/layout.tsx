'use client'

import React, { useState } from 'react'
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Container from '@mui/material/Container';



const AppLayout = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Navbar open={open} toggleDrawer={toggleDrawer} drawerwidth={240} />
            <Sidebar open={open} toggleDrawer={toggleDrawer} drawerwidth={240} />
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
                    {children}
                </Container>
            </Box>
        </Box>
    )
}

export default AppLayout