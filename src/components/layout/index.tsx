import React, { FC, ReactNode, useEffect } from "react";
import THeader from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

import styled from 'styled-components'

const LayoutView = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .layout-main{
    flex: 1;
    max-height: calc(100vh - 80px);
    overflow-y: auto;
    scroll-behavior: smooth;
  }
`

const Layout: FC<{ children?: React.ReactNode }> = ({ children }) => {
  useEffect(() => {}, []);
  return (
    <LayoutView>
      <THeader />
      <div className="layout-main">
       {children}
        <Outlet />
        <Footer/>
      </div>
    </LayoutView>
  );
};
export default Layout;
