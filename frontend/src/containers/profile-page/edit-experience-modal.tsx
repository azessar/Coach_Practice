import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "@mui/material/Modal";
import { userActions } from "../../actions/user-actions";
import { Box, Button, TextField } from "@mui/material";
import Text from "../../components/text";
import { colors } from "../../theme-styles";
import { existingUser } from "../../types/user";

function EditExperienceModal() {
  const dispatch = useDispatch();
  const { editExperienceModalOpen } = useSelector(
    (state: any) => state.uiReducer
  );
  const { currentUser } = useSelector((state: any) => state.authReducer);
  const userProfile: existingUser = useSelector(
    (state: any) => state.userReducer.userProfile
  );
  const [aboutSection, setAboutSection] = React.useState(userProfile?.blurb);

  const handleClose = () => {
    dispatch(userActions.closeEditExperienceModal());
  };

  const handleEditBlurb = () => {
    dispatch(
      userActions.editProfileBlurb(
        currentUser.email,
        currentUser.accessToken,
        aboutSection
      )
    );
    handleClose();
  };

  return (
    <Modal
      open={editExperienceModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        <Box>
          <Text
            color={colors.primaryNavy}
            words={`Experience`}
            fontSize="1.2em"
          />
        </Box>
      </Box>
    </Modal>
  );
}

export default EditExperienceModal;

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
