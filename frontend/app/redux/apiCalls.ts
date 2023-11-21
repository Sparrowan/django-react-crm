import {
    loginFailure, loginStart, loginSuccess,
    logoutStart, logoutSuccess, logoutFailure
} from "./authSlice";
import { AppDispatch } from "./store";
import { signInInputs } from "../utils/types";


import { publicRequest, userRequest, getAuthorizationHeader } from "../utils/requestMethods";

export const login = async (dispatch: AppDispatch, user: signInInputs) => {
    console.log("user", user)
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/accounts/token/", user);
        console.log("Login user", res)
        dispatch(loginSuccess(res.data));
    } catch (err: any) {
        console.log(err.response.status)
        let message = 'Network error!'
        if (err.response.status == 401) {
            message = "Wrong username or password!"
        }
        dispatch(loginFailure(message));
    }
};


export const logout = async (dispatch: AppDispatch, refresh_token: string) => {
    dispatch(logoutStart());
    try {
        await userRequest.post("/accounts/logout/", refresh_token, {
            headers: { Authorization: getAuthorizationHeader() }
        });
        dispatch(logoutSuccess());
    } catch (err: any) {
        console.log(err)
        dispatch(logoutFailure(err.message));
    }
};