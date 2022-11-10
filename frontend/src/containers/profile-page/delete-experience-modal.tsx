import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "@mui/material/Modal";
import { userActions } from "../../actions/user-actions";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import Text from "../../components/text";
import { colors } from "../../theme-styles";
import { existingUser, job } from "../../types/user";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { coachableSports } from "../../constants/sports";

interface DeleteExperienceModalProps {
  job: job;
  jobIndex: number;
}

function DeleteExperienceModal(props: DeleteExperienceModalProps) {
  const { job, jobIndex } = props;
  const dispatch = useDispatch();
  const { deleteExperienceModalOpen } = useSelector(
    (state: any) => state.uiReducer
  );
  const userProfile: existingUser = useSelector(
    (state: any) => state.userReducer.userProfile
  );
  const { currentUser } = useSelector((state: any) => state.authReducer);

  const handleClose = () => {
    dispatch(userActions.closeDeleteExperienceModal());
  };

  const handleEditExperience = () => {
    const currentExperience = userProfile.experience;
    const newExperience = currentExperience.filter((u, i) => i !== jobIndex);

    dispatch(
      userActions.editExperience(
        currentUser.email,
        currentUser.accessToken,
        newExperience
      )
    );
    handleClose();
  };

  return (
    <Modal
      open={deleteExperienceModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        <Box>
          <Text
            color={colors.primaryNavy}
            words={`Are you sure you want to delete the '${job.role}' at '${job.organization}' experience section?`}
            fontSize="0.8em"
          />
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
              onClick={() => handleEditExperience()}
              variant="contained"
              style={{
                background: colors.primaryNavy,
                color: colors.white,
              }}
            >
              Yes
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default DeleteExperienceModal;

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
