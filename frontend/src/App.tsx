import React from "react";
import "./App.css";
import NavBar from "./components/nav-bar";
import AuthModal from "./components/auth-modal";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

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
    </div>
  );
}

export default App;
