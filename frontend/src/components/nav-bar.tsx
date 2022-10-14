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
  const handleOpen = () => {
    dispatch(authActions.openAuthModal());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: colors.primaryNavy }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CoachCorner
          </Typography>
          <Button color="inherit" onClick={() => handleOpen()}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
