import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../actions/auth-actions";
import { MenuItem } from "@mui/material";
import Menu from "@mui/material/Menu";

function HelloMenu() {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(authActions.closeHelloMenu());
  };

  const { helloMenuOpen, helloMenuAnchor } = useSelector(
    (state: any) => state.authReducer
  );
  return (
    <Menu open={helloMenuOpen} onClose={handleClose} anchorEl={helloMenuAnchor}>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
  );
}

export default HelloMenu;
