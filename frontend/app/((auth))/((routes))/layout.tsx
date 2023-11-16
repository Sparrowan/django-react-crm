import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box
            component={Paper}

            sx={{
                padding: 15,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
            }}>
            {children}
        </Box>
    )
}


export default AuthLayout