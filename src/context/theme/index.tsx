import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider as StyleThemeProvider } from "styled-components";

const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const AppReducer = useSelector((state: any) => state.AppReducer);
  return (
    <StyleThemeProvider theme={{ mode: AppReducer.theme }}>
      {children}
    </StyleThemeProvider>
  );
};

export default ThemeProvider;
