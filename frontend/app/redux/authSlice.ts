import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface userLoginType {
    username: string
    password: string
}

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
}

export const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = false
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = true;
        },
        logoutStart: (state) => {
            state.loading = true;
            state.error = false
        },
        logoutSuccess: (state) => {
            state.loading = false;
            localStorage.removeItem("persist:root");
            state.currentUser = null;
        },
        logoutFailure: (state) => {
            state.loading = false;
            state.error = true
        },
    },
});
export const { loginStart, loginSuccess, loginFailure, logoutStart, logoutSuccess, logoutFailure } =
    authSlice.actions;
export const authSelector = (state: RootState) => state.authReducer;
export default authSlice.reducer;