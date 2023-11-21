import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface userLoginType {
    username: string
    password: string
}

const initialState = {
    currentUser: null,
    loading: false,
    error: "",
}

export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = ""
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
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
export const { loginStart, loginSuccess, loginFailure, logoutStart, logoutSuccess, logoutFailure } =
    authSlice.actions;
export const authSelector = (state: RootState) => state.authReducer;
export default authSlice.reducer;