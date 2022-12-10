import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../theme-styles";
import Text from "../../components/text";
import { userActions } from "../../actions/user-actions";
import { existingUser } from "../../types/user";
import BigText from "../../components/big-text";
import { coachableSports } from "../../constants/sports";
import { genderOptions } from "../../constants/genders";
import { authActions } from "../../actions/auth-actions";
import EditAccountModal from "./edit-account-modal";
import { locations } from "../../constants/locations";

function AccountPage() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.authReducer);
  const { userProfile } = useSelector((state: any) => state.userReducer);
  const { loading } = useSelector((state: any) => state.uiReducer);
  const [firstNameSection, setFirstNameSection] = useState(
    userProfile?.firstName
  );
  const [lastNameSection, setLastNameSection] = useState(userProfile?.lastName);
  const [genderSection, setGenderSection] = useState(userProfile?.gender || "");

  const [emailSection, setEmailSection] = useState(userProfile?.email);
  const [citySection, setCitySection] = useState(userProfile?.city);
  const [firstSportSection, setFirstSportSection] = useState(
    userProfile?.sports[0] || ""
  );
  const [secondSportSection, setSecondSportSection] = useState(
    userProfile?.sports[1] || ""
  );
  const [thirdSportSection, setThirdSportSection] = useState(
    userProfile?.sports[2] || ""
  );

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const cityKeys = Object.keys(locations);
  const cityValues = Object.values(locations);

  useEffect(() => {
    dispatch(
      userActions.getUserProfile(currentUser.email, currentUser.accessToken)
    );
  }, [currentUser, loading]);

  const disabledChangeAccount =
    firstNameSection?.length === 0 ||
    lastNameSection?.length === 0 ||
    emailSection?.length === 0 ||
    citySection?.length === 0 ||
    firstSportSection?.length === 0;

  const disabledSubmitPassword =
    currentPassword?.length === 0 ||
    newPassword?.length === 0 ||
    confirmPassword?.length === 0;

  const { changePasswordMessage, isError } = useSelector(
    (state: any) => state.uiReducer
  );

  const handleChangePassword = () => {
    dispatch(
      authActions.changePassword(
        currentUser?.email,
        currentUser?.accessToken,
        currentPassword,
        newPassword,
        confirmPassword
      )
    );
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <EditAccountModal
        emailSection={emailSection}
        firstNameSection={firstNameSection}
        lastNameSection={lastNameSection}
        genderSection={genderSection}
        citySection={citySection}
        firstSportSection={firstSportSection}
        secondSportSection={secondSportSection}
        thirdSportSection={thirdSportSection}
      />
      <Box
        bgcolor={colors.white}
        width="60%"
        margin="auto"
        padding="20px"
        marginTop={"80px"}
        borderRadius="10px"
      >
        <Text
          color={colors.primaryNavy}
          words={`MY ACCOUNT`}
          fontWeight="700"
          fontSize="20px"
        />
        <Box>
          <Box display="flex" justifyContent={"space-between"} marginTop="20px">
            <Box width="32%">
              <Box>
                <BigText
                  color={colors.primaryNavy}
                  words={`First name`}
                  fontSize="0.8em"
                />
              </Box>
              <Box marginTop={"10px"}>
                <TextField
                  fullWidth
                  value={firstNameSection}
                  onChange={(e) => setFirstNameSection(e.target.value)}
                ></TextField>
              </Box>
            </Box>
            <Box width="32%">
              <Box>
                <BigText
                  color={colors.primaryNavy}
                  words={`Last name`}
                  fontSize="0.8em"
                />
              </Box>
              <Box marginTop={"10px"}>
                <TextField
                  fullWidth
                  value={lastNameSection}
                  onChange={(e) => setLastNameSection(e.target.value)}
                ></TextField>
              </Box>
            </Box>
            <Box width="32%">
              <Box>
                <BigText
                  color={colors.primaryNavy}
                  words={`Gender`}
                  fontSize="0.8em"
                />
              </Box>
              <Box marginTop={"10px"}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={genderSection}
                  fullWidth
                  onChange={(e) => setGenderSection(e.target.value)}
                >
                  {Object.keys(genderOptions).map((gen, i) => (
                    <MenuItem value={Object.values(genderOptions)[i]}>
                      {Object.values(genderOptions)[i]}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" marginTop="20px">
          <Box width="49%">
            <Box>
              <BigText
                color={colors.primaryNavy}
                words={`Email`}
                fontSize="0.8em"
              />
            </Box>
            <Box marginTop={"10px"}>
              <TextField
                fullWidth
                value={emailSection}
                onChange={(e) => setEmailSection(e.target.value)}
              ></TextField>
            </Box>
          </Box>
          <Box width="48%">
            <Box>
              <BigText
                color={colors.primaryNavy}
                words={`Metro area`}
                fontSize="0.8em"
              />
            </Box>
            <Box marginTop={"10px"}>
              {/* <TextField
                fullWidth
                value={citySection}
                onChange={(e) => setCitySection(e.target.value)}
              ></TextField> */}
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={citySection}
                fullWidth
                onChange={(e) => setCitySection(String(e.target.value))}
              >
                {cityKeys.map((city, i) => (
                  <MenuItem value={cityValues[i]}>{cityValues[i]}</MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
        </Box>

        <Box marginTop={"20px"}>
          <Box display="flex" justifyContent={"space-between"}>
            <Box width="32%">
              <Box>
                <BigText
                  color={colors.primaryNavy}
                  words={`First sport`}
                  fontSize="0.8em"
                />
              </Box>
              <Box marginTop={"10px"}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={firstSportSection}
                  fullWidth
                  onChange={(e) => setFirstSportSection(e.target.value)}
                >
                  {Object.keys(coachableSports).map((sport, i) => (
                    <MenuItem value={Object.values(coachableSports)[i]}>
                      {Object.values(coachableSports)[i]}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Box>
            <Box width="32%">
              <Box>
                <BigText
                  color={colors.primaryNavy}
                  words={`Second sport`}
                  fontSize="0.8em"
                />
              </Box>
              <Box marginTop={"10px"}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={secondSportSection}
                  fullWidth
                  onChange={(e) => setSecondSportSection(e.target.value)}
                >
                  {Object.keys(coachableSports).map((sport, i) => (
                    <MenuItem value={Object.values(coachableSports)[i]}>
                      {Object.values(coachableSports)[i]}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Box>
            <Box width="32%">
              <Box>
                <BigText
                  color={colors.primaryNavy}
                  words={`Third sport`}
                  fontSize="0.8em"
                />
              </Box>
              <Box marginTop={"10px"}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={thirdSportSection}
                  fullWidth
                  onChange={(e) => setThirdSportSection(e.target.value)}
                >
                  {Object.keys(coachableSports).map((sport, i) => (
                    <MenuItem value={Object.values(coachableSports)[i]}>
                      {Object.values(coachableSports)[i]}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box marginTop={"20px"}>
          <Button
            onClick={() => dispatch(userActions.openEditAccountModal())}
            disabled={disabledChangeAccount}
            variant="contained"
            style={{
              background: disabledChangeAccount
                ? colors.disabledGray
                : colors.primaryNavy,
              color: disabledChangeAccount ? colors.black : colors.white,
            }}
          >
            Save Account Changes
          </Button>
        </Box>
      </Box>
      <Box
        bgcolor={colors.white}
        width="60%"
        margin="auto"
        padding="20px"
        marginTop={"20px"}
        marginBottom="20px"
        borderRadius="10px"
      >
        <Text
          color={colors.primaryNavy}
          words={`CHANGE PASSWORD`}
          fontWeight="700"
          fontSize="20px"
        />
        {changePasswordMessage.length > 0 && (
          <Box marginTop={"10px"}>
            <Text
              color={isError ? colors.red : colors.green}
              words={changePasswordMessage}
              fontSize=".8em"
            />
          </Box>
        )}
        <Box marginTop="20px">
          <Box>
            <BigText
              color={colors.primaryNavy}
              words={`Current password`}
              fontSize="0.8em"
            />
          </Box>
          <Box marginTop={"10px"}>
            <TextField
              fullWidth
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              type="password"
            ></TextField>
          </Box>
        </Box>
        <Box marginTop="20px">
          <Box>
            <BigText
              color={colors.primaryNavy}
              words={`New password`}
              fontSize="0.8em"
            />
          </Box>
          <Box marginTop={"10px"}>
            <TextField
              fullWidth
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
            ></TextField>
          </Box>
        </Box>
        <Box marginTop="20px">
          <Box>
            <BigText
              color={colors.primaryNavy}
              words={`Confirm new password`}
              fontSize="0.8em"
            />
          </Box>
          <Box marginTop={"10px"}>
            <TextField
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
            ></TextField>
          </Box>
          <Box marginTop={"20px"}>
            <Button
              onClick={() => handleChangePassword()}
              disabled={disabledSubmitPassword}
              variant="contained"
              style={{
                background: disabledSubmitPassword
                  ? colors.disabledGray
                  : colors.primaryNavy,
                color: disabledSubmitPassword ? colors.black : colors.white,
              }}
            >
              CHANGE PASSWORD
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AccountPage;
