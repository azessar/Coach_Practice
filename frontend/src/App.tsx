import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./containers/nav-bar";
import AuthModal from "./containers/auth-modal/auth-modal";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { Box, Modal } from "@mui/material";
import HelloMenu from "./containers/hello-menu";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import ProfilePage from "./containers/profile-page";
import AccountPage from "./containers/account-page";
import HomePage from "./containers/home-page";
import AboutPage from "./containers/about-page";
import { ErrorBoundary } from "react-error-boundary";
import Text from "./components/text";
import { colors } from "./theme-styles";
import { Link } from "react-router-dom";
import SearchPage from "./containers/search-page";

function App() {
  const { loading } = useSelector((state: any) => state.uiReducer);
  const { currentUser } = useSelector((state: any) => state.authReducer);
  const { selectedCoachId } = useSelector((state: any) => state.userReducer);
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
            <Route
              path={`/profile/:id`}
              element={<ProfilePage id={selectedCoachId || 0} />}
            ></Route>
            <Route path="/account" element={<AccountPage />}></Route>
            <Route path="/search" element={<SearchPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
          </Routes>
        </ErrorBoundary>
      </Router>
      <Box
        bgcolor={colors.primaryNavy}
        margin="auto"
        padding="40px"
        marginTop={"20px"}
      >
        <Box>
          <Text
            words="CONTACT US"
            color={colors.secondaryLightBlue}
            fontWeight="700"
            fontSize="18px"
          />
        </Box>
        <Box marginTop={"10px"}>
          <a href="mailto: hello@coachcorner.io">
            <Text
              words="hello@coachcorner.io"
              color={colors.secondaryLightBlue}
              fontWeight="700"
              fontSize="12px"
            />
          </a>
        </Box>
        <Box display={"flex"} justifyContent={"center"} marginTop="10px">
          <Box marginRight={"10px"}>
            <a target="_blank" href="https://twitter.com/CoachCornerTeam">
              {" "}
              <img src="twitter-removebg-preview.png" width="20"></img>
            </a>
          </Box>
          <Box marginRight={"10px"}>
            <a
              target="_blank"
              href="https://www.instagram.com/coachcornerteam/?hl=en"
            >
              {" "}
              <img src="instagram-removebg-preview.png" width="20"></img>
            </a>
          </Box>
          <Box borderRadius={"6px"}>
            <a target="_blank" href="https://www.facebook.com/CoachCornerTeam">
              {" "}
              <img src="facebook.png" width="20"></img>
            </a>
          </Box>
        </Box>
        <Box marginTop={"10px"} display="flex" justifyContent={"left"}>
          <Text
            words="CoachCorner Team LLC"
            color={colors.secondaryLightBlue}
            fontWeight="700"
            fontSize="12px"
          />
        </Box>
        <Box marginTop={"10px"} display="flex" justifyContent={"left"}>
          <Text
            words="Chicago, IL"
            color={colors.secondaryLightBlue}
            fontWeight="700"
            fontSize="12px"
          />
        </Box>
      </Box>
    </div>
  );
}

export default App;
