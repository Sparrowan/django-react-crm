import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import themeReducer from './themeSlice'
import { combineReducers } from 'redux';


export const store = configureStore({
    reducer: combineReducers({
        authReducer: authReducer,
        themeReducer: themeReducer
    })

});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;