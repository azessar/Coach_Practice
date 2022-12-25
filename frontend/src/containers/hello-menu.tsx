import React from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../actions/auth-actions";
import { MenuItem } from "@mui/material";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import Text from "../components/text";
import { userActions } from "../actions/user-actions";

function HelloMenu() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.authReducer);

  const handleClose = () => {
    dispatch(authActions.closeHelloMenu());
  };

  const handleLogout = () => {
    dispatch(authActions.logout());
    navigate("");
  };

  const handleClick = (route: string) => {
    navigate(route);
    handleClose();
  };

  const handleClickProfile = (route: string, id: number) => {
    dispatch(userActions.selectCoach(id));
    handleClick(route);
  };

  const { helloMenuOpen, helloMenuAnchor } = useSelector(
    (state: any) => state.uiReducer
  );
  return (
    <Menu open={helloMenuOpen} onClose={handleClose} anchorEl={helloMenuAnchor}>
      <MenuItem onClick={() => handleClick("/")}>
        <Text words="HOME" fontSize="16px" />
      </MenuItem>
      <MenuItem
        onClick={() =>
          handleClickProfile(`/profile/${currentUser.id}`, currentUser.id)
        }
      >
        <Text words="PROFILE" fontSize="16px" />
      </MenuItem>
      <MenuItem onClick={() => handleClickProfile("/account", currentUser.id)}>
        <Text words="MY ACCOUNT" fontSize="16px" />
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <Text words="LOGOUT" fontSize="16px" />
      </MenuItem>
    </Menu>
  );
}

export default HelloMenu;
