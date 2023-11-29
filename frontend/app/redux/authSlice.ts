import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface userLoginType {
    username: string
    password: string
}

export interface userRegisterType extends userLoginType {
    email: string
    first_name?: string
    last_name?: string
    password2: string
}

interface initialState {
    currentUser: null | {}
    loading: boolean
    error: any
    registeredUser: any
}
const initialState: initialState = {
    currentUser: null,
    loading: false,
    error: "",
    registeredUser: null
}

export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        registerStart: (state) => {
            state.loading = true;
        },
        registerSuccess: (state, action) => {
            state.loading = false;
            state.error = ""
            state.registeredUser = action.payload
        },
        registerFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        resetRegisteredUser: (state) => {
            state.registeredUser = null
        },

        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = ""
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logoutStart: (state) => {
            state.loading = true;
            state.error = ""
        },
        logoutSuccess: (state) => {
            state.loading = false;
            localStorage.removeItem("persist:root");
            state.currentUser = null;
        },
        logoutFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
    },
});
export const { registerFailure, registerStart, registerSuccess, loginStart, loginSuccess, loginFailure, logoutStart, logoutSuccess, logoutFailure, resetRegisteredUser } =
    authSlice.actions;
export const authSelector = (state: RootState) => state.authReducer;
export default authSlice.reducer;