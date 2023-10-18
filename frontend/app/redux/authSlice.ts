import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface themeType {
    type: string;
}

const initialState: themeType =
{
    type: 'light',
}


export const authSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state, action: PayloadAction<string>) => {

            state.type = action.payload
            if (state.type === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        },
    },
});
export const { toggleTheme } =
    authSlice.actions;
export const themeSelector = (state: RootState) => state.authReducer;
export default authSlice.reducer;