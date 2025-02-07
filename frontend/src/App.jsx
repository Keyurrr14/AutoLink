import React from "react";
import { Route, Routes } from "react-router-dom";
import CaptainHome from "./pages/CaptainHome";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper";
import CaptainSignup from "./pages/CaptainSignup";
import CaptainLogout from "./pages/CaptainLogout";
import Home from "./pages/Home";
import OnBoarding from "./pages/OnBoarding";
import UserLogin from "./pages/UserLogin";
import UserLogout from "./pages/UserLogout";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserSignup from "./pages/UserSignup";
import AvailableRickshaws from "./pages/AvailableRickshaws";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/user/logout"
          element={
            <UserProtectedWrapper>
              <UserLogout />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/captain-home"
          element={
            <CaptainProtectedWrapper>
              <CaptainHome />
            </CaptainProtectedWrapper>
          }
        />
        <Route path='/captain/logout' element={
          <CaptainProtectedWrapper>
            <CaptainLogout />
          </CaptainProtectedWrapper>
        } />
        <Route path='/available-rickshaws' element={
          <AvailableRickshaws />
        } />
      </Routes>
    </div>
  );
};

export default App;
