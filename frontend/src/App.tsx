import React from "react";
import "./App.css";
import NavBar from "./containers/nav-bar";
import AuthModal from "./containers/auth-modal/auth-modal";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import HelloMenu from "./containers/hello-menu";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProfilePage from "./containers/profile-page/profile-page";

function App() {
  const loading = useSelector((state: any) => state.authReducer.loading);
  return (
    <div className="App">
      <Router>
        <NavBar />
        {loading && (
          <Box position="absolute" top="50%" left="50%" zIndex={10000}>
            <CircularProgress />
          </Box>
        )}
        <AuthModal />
        <HelloMenu />
        <Routes>
          <Route path="" element={<div>HOME</div>}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
