import React from "react";

import { Provider } from "react-redux";
import ThemeProvider from "context/theme";
import LanguageProvider from "context/locales";
import { Web3ReactProvider } from "@web3-react/core";
import store from "store";
import { getLibrary } from "web3/getLibrary";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ThemeProvider>
          <LanguageProvider>{children} </LanguageProvider>
        </ThemeProvider>
      </Provider>
    </Web3ReactProvider>
  );
};

export default Providers;
