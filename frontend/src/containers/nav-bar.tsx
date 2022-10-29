import React from "react";
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

function NavBar() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.authReducer);
  const handleOpen = (e: any) => {
    currentUser
      ? dispatch(authActions.openHelloMenu(e))
      : dispatch(authActions.openAuthModal());
  };

  return (
    <Box>
      <AppBar position="static" style={{ background: colors.primaryNavy }}>
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%">
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              style={{ color: colors.secondaryLightBlue }}
            >
              <MenuIcon />
            </IconButton>
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
                  <Text
                    words="CoachCorner"
                    color={colors.secondaryLightBlue}
                    fontSize="1.2em"
                  />
                  {/* CoachCorner */}
                </Link>
              </Typography>
            </Box>

            <Button color="inherit" onClick={(e) => handleOpen(e)}>
              {!currentUser ? (
                <Typography style={{ color: colors.secondaryLightBlue }}>
                  LOGIN
                </Typography>
              ) : (
                <Box>
                  <Text
                    words="HELLO,"
                    color={colors.secondaryLightBlue}
                    fontSize="1.2em"
                  />
                  <Text
                    words={`COACH ${currentUser.firstName}`}
                    color={colors.secondaryLightBlue}
                    fontSize="0.9em"
                  />
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
