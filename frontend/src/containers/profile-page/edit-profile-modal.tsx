import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "../auth-modal/login";
import Signup from "../auth-modal/signup";
import Modal from "@mui/material/Modal";
import { userActions } from "../../actions/user-actions";
import { Box, Button } from "@mui/material";

function EditProfileModal() {
  const dispatch = useDispatch();
  const { editProfileModalOpen } = useSelector((state: any) => state.uiReducer);
  const handleClose = () => {
    dispatch(userActions.closeEditProfileModal());
  };
  return (
    <Modal
      open={editProfileModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}></Box>
    </Modal>
  );
}

export default EditProfileModal;

const boxStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
