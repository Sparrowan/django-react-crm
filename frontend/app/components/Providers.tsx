"use client"

import React from 'react'
import { store } from '@/app/redux/store'
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from '@mui/material/styles';



export const Providers = ({ children }: { children: React.ReactNode }) => {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        {children}
      </Provider>
    </ThemeProvider>
  )
}
export default Providers