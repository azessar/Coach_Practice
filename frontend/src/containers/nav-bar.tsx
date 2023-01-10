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

  return (
    <Box>
      <AppBar position="fixed" style={{ background: colors.primaryNavy }}>
        <Toolbar>
          <Box
            display={"flex"}
            style={{
              position: "absolute",
              top: "50%",
              marginLeft: "175px",
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
                <Box>
                  <img src={`coach_corner_head.png`} width="50"></img>
                </Box>
              </Link>
            </Typography>
            <Box display={"flex"} marginLeft="20px" marginTop={"12px"}>
              <Box>
                <Button color="inherit">
                  <Link
                    to="/about"
                    style={{
                      textDecoration: "none",
                      color: colors.secondaryLightBlue,
                    }}
                  >
                    <Text
                      color={colors.secondaryLightBlue}
                      words="ABOUT"
                      fontSize="1.2em"
                    />
                  </Link>
                </Button>
              </Box>
              <Box>
                <Button color="inherit">
                  <a
                    href="https://us13.campaign-archive.com/?u=85e235c58fbb05e97f06f0e7b&id=d973da04f7"
                    target="_blank"
                  >
                    <Text
                      color={colors.secondaryLightBlue}
                      words="NEWSLETTER"
                      fontSize="1.2em"
                    />
                  </a>
                </Button>
              </Box>
              <Box>
                <Button color="inherit">
                  <a href="#partner">
                    <Text
                      color={colors.secondaryLightBlue}
                      words="PARTNER"
                      fontSize="1.2em"
                    />
                  </a>
                </Button>
              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="flex-end" width="100%">
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
