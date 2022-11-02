import React, { lazy, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import Layout from "./components/layout";
import AboutUs from "./pages/AboutUs";
import InvestorRelations from './pages/InvestorRelations'
// const HomePage = lazy(() => import("pages/Home"));
import OurBusiness from './pages/OurBusiness'
import HomePage from './pages/Home'
const App: React.FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Layout />}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<></>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/about-us"
            element={
              <Suspense fallback={<></>}>
                <AboutUs />
              </Suspense>
            }
          />
          <Route
            path="/investor-relations"
            element={
              <Suspense fallback={<></>}>
                <InvestorRelations />
              </Suspense>
            }
          />
          <Route
            path="/our-business"
            element={
              <Suspense fallback={<></>}>
                <OurBusiness />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
