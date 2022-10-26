import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../actions/auth-actions";
import { MenuItem } from "@mui/material";
import Menu from "@mui/material/Menu";
import { Link, useNavigate } from "react-router-dom";

function HelloMenu() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleClose = () => {
    dispatch(authActions.closeHelloMenu());
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate("");
  };

  const { helloMenuOpen, helloMenuAnchor } = useSelector(
    (state: any) => state.authReducer
  );
  return (
    <Menu open={helloMenuOpen} onClose={handleClose} anchorEl={helloMenuAnchor}>
      <MenuItem>
        <Link
          to="/profile"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Profile
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );
}

export default HelloMenu;
