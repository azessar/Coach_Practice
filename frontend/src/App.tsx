import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./containers/nav-bar";
import AuthModal from "./containers/auth-modal/auth-modal";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { Box, Modal } from "@mui/material";
import HelloMenu from "./containers/hello-menu";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProfilePage from "./containers/profile-page";
import AccountPage from "./containers/account-page";
import HomePage from "./containers/home-page";

function App() {
  const { loading } = useSelector((state: any) => state.uiReducer);

  return (
    <div className="App">
      <Router>
        <NavBar />
        {loading && (
          <Box
            style={{
              zIndex: 10000,
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              padding: "25%",
            }}
          >
            <CircularProgress />
          </Box>
        )}
        <AuthModal />
        <HelloMenu />
        <Routes>
          <Route path="" element={<HomePage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/account" element={<AccountPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
