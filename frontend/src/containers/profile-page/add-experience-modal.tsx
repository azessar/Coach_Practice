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

function AddExperienceModal() {
  const dispatch = useDispatch();
  const { addExperienceModalOpen } = useSelector(
    (state: any) => state.uiReducer
  );
  const { currentUser } = useSelector((state: any) => state.authReducer);
  const userProfile: existingUser = useSelector(
    (state: any) => state.userReducer.userProfile
  );
  const [roleSection, setRoleSection] = React.useState("");
  const [organizationSection, setOrganizationSection] = React.useState("");
  const [startDateSection, setStartDateSection] = React.useState();
  const [endDateSection, setEndDateSection] = React.useState();
  const [summarySection, setSummarySection] = React.useState("");
  const [sportSection, setSportSection] = React.useState("");

  const handleClose = () => {
    dispatch(userActions.closeAddExperienceModal());
  };

  const newJob = {
    endDate: endDateSection || "",
    organization: organizationSection || "",
    role: roleSection || "",
    sport: sportSection || "",
    startDate: startDateSection || "",
    summary: summarySection || "",
  };

  const handleAddExperience = () => {
    const currentExperience = userProfile.experience;
    const newExperience = [newJob, ...currentExperience];

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
      open={addExperienceModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        <Box>
          <Text
            color={colors.primaryNavy}
            words={`Add new experience`}
            fontSize="1.2em"
          />
        </Box>
        <Box marginTop={"20px"}>
          <Box>
            <Text color={colors.primaryNavy} words={`Role`} fontSize="0.8em" />
          </Box>
          <Box marginTop={"10px"}>
            <TextField
              fullWidth
              value={roleSection}
              onChange={(e) => setRoleSection(e.target.value)}
            ></TextField>
          </Box>
        </Box>
        <Box marginTop={"20px"}>
          <Box>
            <Text color={colors.primaryNavy} words={`Sport`} fontSize="0.8em" />
          </Box>
          <Box marginTop={"10px"}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sportSection}
              fullWidth
              onChange={(e) => setSportSection(e.target.value)}
            >
              {Object.keys(coachableSports).map((sport, i) => (
                <MenuItem value={Object.values(coachableSports)[i]}>
                  {Object.values(coachableSports)[i]}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
        <Box marginTop={"20px"}>
          <Box>
            <Text
              color={colors.primaryNavy}
              words={`Organization`}
              fontSize="0.8em"
            />
          </Box>
          <Box marginTop={"10px"}>
            <TextField
              fullWidth
              value={organizationSection}
              onChange={(e) => setOrganizationSection(e.target.value)}
            ></TextField>
          </Box>
        </Box>
        <Box marginTop={"20px"} display="flex" justifyContent={"space-between"}>
          <Box width="47%">
            <Box>
              <Text
                color={colors.primaryNavy}
                words={`Start date`}
                fontSize="0.8em"
              />
            </Box>
            <Box marginTop={"10px"}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  inputFormat="MM/DD/YYYY"
                  value={startDateSection}
                  onChange={(e: any) => setStartDateSection(e.$d)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
          </Box>
          <Box width="47%">
            <Box>
              <Text
                color={colors.primaryNavy}
                words={`End date`}
                fontSize="0.8em"
              />
            </Box>
            <Box marginTop={"10px"}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  inputFormat="MM/DD/YYYY"
                  value={endDateSection}
                  onChange={(e: any) => setEndDateSection(e?.$d)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
          </Box>
        </Box>
        <Box marginTop={"20px"}>
          <Box>
            <Text
              color={colors.primaryNavy}
              words={`Summary`}
              fontSize="0.8em"
            />
          </Box>
          <Box marginTop={"10px"}>
            <TextField
              fullWidth
              value={summarySection}
              onChange={(e) => setSummarySection(e.target.value)}
              multiline
            ></TextField>
          </Box>
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
              onClick={() => handleAddExperience()}
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

export default AddExperienceModal;

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