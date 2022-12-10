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
import { ErrorBoundary } from "react-error-boundary";
import Text from "./components/text";
import { colors } from "./theme-styles";
import { Link } from "react-router-dom";
import SearchPage from "./containers/search-page";

function App() {
  const { loading } = useSelector((state: any) => state.uiReducer);
  function ErrorHandler({ error }: any) {
    return (
      <div role="alert">
        <Box textAlign={"center"} width="100%" marginTop={"50px"}>
          <Text
            fontSize="44px"
            fontWeight="700"
            color={colors.primaryNavy}
            words={`An error occurred...`}
          />
        </Box>
        <Box textAlign={"center"} width="100%" marginTop={"50px"}>
          <Text
            fontSize="24px"
            fontWeight="700"
            color={colors.primaryNavy}
            words={`Please head back to:`}
          />
        </Box>
        <Box textAlign={"center"} width="100%" marginTop={"50px"}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: colors.primaryNavy,
            }}
          >
            <Text
              fontSize="24px"
              fontWeight="700"
              color={colors.primaryNavy}
              words={`www.coachcorner.io`}
            />
          </Link>
        </Box>
      </div>
    );
  }

  return (
    <div className="App">
      <Router>
        <ErrorBoundary FallbackComponent={ErrorHandler}>
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
            <Route path="/search" element={<SearchPage />}></Route>
          </Routes>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;
