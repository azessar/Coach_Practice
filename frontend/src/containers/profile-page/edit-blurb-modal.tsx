import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "@mui/material/Modal";
import { userActions } from "../../actions/user-actions";
import { Box, Button, TextField } from "@mui/material";
import Text from "../../components/text";
import { colors } from "../../theme-styles";
import { existingUser } from "../../types/user";

function EditBlurbModal() {
  const dispatch = useDispatch();
  const { editProfileModalOpen } = useSelector((state: any) => state.uiReducer);
  const { currentUser } = useSelector((state: any) => state.authReducer);
  const userProfile: existingUser = useSelector(
    (state: any) => state.userReducer.userProfile
  );
  const [aboutSection, setAboutSection] = React.useState(userProfile?.blurb);

  const handleClose = () => {
    dispatch(userActions.closeEditProfileModal());
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
      open={editProfileModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        <Box>
          <Text
            color={colors.primaryNavy}
            words={`About section`}
            fontSize="1.2em"
          />
        </Box>

        <Box marginTop={"10px"}>
          <TextField
            fullWidth
            value={aboutSection}
            onChange={(e) => setAboutSection(e.target.value)}
            multiline
          ></TextField>
        </Box>
        <Box display={"flex"} justifyContent="flex-end" marginTop={"10px"}>
          <Box marginRight={"10px"}>
            <Button
              onClick={() => handleClose()}
              variant="contained"
              style={{
                background: colors.white,
                color: colors.primaryNavy,
              }}
            >
              Cancel
            </Button>
          </Box>
          <Box>
            <Button
              onClick={() => handleEditBlurb()}
              variant="contained"
              style={{
                background: colors.primaryNavy,
                color: colors.white,
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default EditBlurbModal;

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
