"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { Roboto } from "next/font/google";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import themes from "./themes";
import { useAppSelector } from "@/app/redux/hook";


export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const customization = useAppSelector((state) => state.themeReducer);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}