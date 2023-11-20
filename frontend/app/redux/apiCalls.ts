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
    } catch (err) {
        console.log(err)
        dispatch(loginFailure(err));
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