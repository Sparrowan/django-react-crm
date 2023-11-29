'use client'

import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useAppDispatch, useAppSelector } from '@/app/redux/hook'
import { redirect } from 'next/navigation'




const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    const { loading, error, currentUser } = useAppSelector((state) => state.authReducer);
    if (currentUser) {
        return redirect('/dashboard')

    }
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