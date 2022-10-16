import React from "react";
import "./App.css";
import NavBar from "./components/nav-bar";
import AuthModal from "./components/auth-modal/auth-modal";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import HelloMenu from "./components/hello-menu";

function App() {
  const loading = useSelector((state: any) => state.authReducer.loading);
  return (
    <div className="App">
      <NavBar />
      {loading && (
        <Box position="absolute" top="50%" left="50%" zIndex={10000}>
          <CircularProgress />
        </Box>
      )}

      <AuthModal />
      <HelloMenu />
    </div>
  );
}

export default App;
