'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import config from "../utils/config";

interface initialState {
    defaultId: string
    fontFamily: string
    borderRadius: number
}

export const initialState: initialState = {
    defaultId: 'default',
    fontFamily: config.fontFamily,
    borderRadius: config.borderRadius,
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {

    },
});
export const themeSelector = (state: RootState) => state.themeReducer;
export default themeSlice.reducer;