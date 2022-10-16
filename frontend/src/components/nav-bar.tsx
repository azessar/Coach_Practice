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

function NavBar() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.authReducer);
  const handleOpen = (e: any) => {
    currentUser
      ? dispatch(authActions.openHelloMenu(e))
      : dispatch(authActions.openAuthModal());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: colors.primaryNavy }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{ color: colors.secondaryLightBlue }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            sx={{ flexGrow: 1 }}
            style={{ color: colors.secondaryLightBlue }}
          >
            CoachCorner
          </Typography>
          <Button color="inherit" onClick={(e) => handleOpen(e)}>
            <Typography style={{ color: colors.secondaryLightBlue }}>
              {!currentUser ? "Login" : `Hello, Coach ${currentUser.firstName}`}
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
