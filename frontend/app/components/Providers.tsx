"use client"

import React from 'react'
import { store } from '@/app/redux/store'
import { Provider } from "react-redux";


export const Providers = ({ children }: { children: React.ReactNode }) => {

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
export default Providers