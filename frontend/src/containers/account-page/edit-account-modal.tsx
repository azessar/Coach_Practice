import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "@mui/material/Modal";
import { userActions } from "../../actions/user-actions";
import { Box, Button, TextField } from "@mui/material";
import Text from "../../components/text";
import { colors } from "../../theme-styles";
import { existingUser } from "../../types/user";

interface EditAccountModalProps {
  emailSection: string;
  firstNameSection: string;
  lastNameSection: string;
  genderSection: string;
  citySection: string;
  firstSportSection: string;
  secondSportSection: string;
  thirdSportSection: string;
}

function EditAccountModal(props: EditAccountModalProps) {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");

  const { authMessage, isError } = useSelector((state: any) => state.uiReducer);

  const {
    emailSection,
    firstNameSection,
    lastNameSection,
    genderSection,
    citySection,
    firstSportSection,
    secondSportSection,
    thirdSportSection,
  } = props;

  const { editAccountModalOpen } = useSelector((state: any) => state.uiReducer);
  const { currentUser } = useSelector((state: any) => state.authReducer);

  const handleClose = () => {
    dispatch(userActions.closeEditAccountModal());
    setPassword("");
  };

  useEffect(() => {
    setPassword("");
  }, [editAccountModalOpen]);

  const handleEditAccount = () => {
    dispatch(
      userActions.editAccount(
        currentUser.id,
        emailSection,
        currentUser?.accessToken,
        firstNameSection,
        lastNameSection,
        genderSection,
        citySection,
        Array.from(
          new Set([firstSportSection, secondSportSection, thirdSportSection])
        ).filter((s: string) => s?.toLowerCase() !== "none" && s.length > 0),
        password,
        currentUser?.email
      )
    );
  };

  const handleEnter = (e: any) => {
    if (e.keyCode == 13 && !disabledSubmit) {
      handleEditAccount();
    }
  };

  const disabledSubmit = password.length < 6;

  return (
    <Modal
      open={editAccountModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        <Box>
          <Text
            color={colors.primaryNavy}
            words={`Enter your password to confirm changes`}
            fontSize="1.2em"
          />
        </Box>
        {isError && (
          <Box marginTop={"10px"}>
            <Text color={colors.red} words={authMessage} fontSize=".8em" />
          </Box>
        )}
        <Box marginTop={"20px"}>
          <TextField
            type="password"
            label="Password"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => handleEnter(e)}
          ></TextField>
        </Box>
        <Box marginTop={"20px"} display="flex" justifyContent={"space-evenly"}>
          <Button
            onClick={() => handleEditAccount()}
            disabled={disabledSubmit}
            variant="contained"
            style={{
              background: disabledSubmit
                ? colors.disabledGray
                : colors.primaryNavy,
              color: disabledSubmit ? colors.black : colors.white,
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default EditAccountModal;

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
