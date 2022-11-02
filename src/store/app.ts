import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LANG_LOCAL_KEY } from "locales";

export enum THEME_MODE_ENUM {
  light = "light",
  dark = "dark",
}
export enum LANGUAGE_ENUM {
  zh_CN = "zh_CN",
  en_US = "en_US",
  zh_HK="zh_HK"
}
export enum LANGUAGE_NAME_ENUM {
  zh_CN = "中文",
  en_US = "English",
  zh_HK="繁体"
}

export interface AppState {
  themeMode: string;
  language:LANGUAGE_ENUM
}
const defLanguage: LANGUAGE_ENUM =
  localStorage.getItem(LANG_LOCAL_KEY) as LANGUAGE_ENUM || LANGUAGE_ENUM.en_US

const initialState: AppState = {
  themeMode: "light",
  language:defLanguage
};

export const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setThemeMode: (state) => {
      state.themeMode = "dark";
    },
    setLanguage: (state, action: PayloadAction<LANGUAGE_ENUM>) => {
      localStorage.setItem(LANG_LOCAL_KEY, action.payload);
      state.language = action.payload;
    },
  },
});
export const { setThemeMode,setLanguage } = AppSlice.actions;
export default AppSlice.reducer;
