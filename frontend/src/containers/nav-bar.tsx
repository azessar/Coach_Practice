import React, { useEffect } from "react";
import "../App.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { colors } from "../theme-styles";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../actions/auth-actions";
import { Link } from "react-router-dom";
import Text from "../components/text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretDown } from "@fortawesome/free-solid-svg-icons";
import { userActions } from "../actions/user-actions";

function NavBar() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.authReducer);
  const { loading } = useSelector((state: any) => state.uiReducer);

  const handleOpen = (e: any) => {
    currentUser
      ? dispatch(authActions.openHelloMenu(e))
      : dispatch(authActions.openAuthModal());
  };

  // useEffect(() => {
  //   currentUser?.email && dispatch(userActions.getUserProfile(currentUser.id));
  // }, [loading, dispatch]);

  return (
    <Box>
      <AppBar position="fixed" style={{ background: colors.primaryNavy }}>
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Button color="inherit">
              <Text
                color={colors.secondaryLightBlue}
                words="JOBS"
                fontSize="1.2em"
              />
            </Button>

            <Box
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Typography style={{ color: colors.secondaryLightBlue }}>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: colors.secondaryLightBlue,
                  }}
                >
                  <Box marginTop={"8px"}>
                    <img src={`coach_corner_head.png`} width="50"></img>
                  </Box>
                </Link>
              </Typography>
            </Box>

            <Button color="inherit" onClick={(e) => handleOpen(e)}>
              {!currentUser ? (
                <Text
                  color={colors.secondaryLightBlue}
                  words="LOGIN"
                  fontSize="1.2em"
                />
              ) : (
                <Box display={"flex"}>
                  <Box>
                    <Text
                      words="HELLO,"
                      color={colors.secondaryLightBlue}
                      fontSize="1.2em"
                    />
                    <Text
                      words={`COACH ${currentUser?.firstName}`}
                      color={colors.secondaryLightBlue}
                      fontSize="0.9em"
                    />
                  </Box>
                  <Box marginLeft={"8px"} marginTop="8px">
                    <FontAwesomeIcon
                      icon={faSquareCaretDown}
                      style={{ color: colors.secondaryLightBlue }}
                    />
                  </Box>
                </Box>
              )}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
