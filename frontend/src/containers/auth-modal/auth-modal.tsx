import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./login";
import Signup from "./signup";
import Modal from "@mui/material/Modal";
import { authActions } from "../../actions/auth-actions";

function AuthModal() {
  const dispatch = useDispatch();
  const { authModalOpen, loginMode } = useSelector(
    (state: any) => state.uiReducer
  );
  const handleClose = () => {
    dispatch(authActions.closeAuthModal());
  };
  return (
    <Modal
      open={authModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {loginMode ? <Login /> : <Signup />}
    </Modal>
  );
}

export default AuthModal;
