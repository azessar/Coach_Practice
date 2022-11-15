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

function AccountPage() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.authReducer);
  const { userProfile } = useSelector((state: any) => state.userReducer);
  const { loading } = useSelector((state: any) => state.uiReducer);
  const [firstNameSection, setFirstNameSection] = useState(
    currentUser?.firstName
  );
  const [lastNameSection, setLastNameSection] = useState(currentUser?.lastName);
  const [genderSection, setGenderSection] = useState(userProfile?.gender);

  console.log(11111, userProfile);

  const [emailSection, setEmailSection] = useState(currentUser?.email);
  const [zipSection, setZipSection] = useState(currentUser?.zipCode);
  const [firstSportSection, setFirstSportSection] = useState(
    userProfile?.sports[0] || ""
  );
  const [secondSportSection, setSecondSportSection] = useState(
    userProfile?.sports[1] || ""
  );
  const [thirdSportSection, setThirdSportSection] = useState(
    userProfile?.sports[2] || ""
  );

  useEffect(() => {
    dispatch(
      userActions.getUserProfile(currentUser.email, currentUser.accessToken)
    );
  }, [currentUser, loading]);

  const disabledSubmit =
    firstNameSection.length === 0 ||
    lastNameSection.length === 0 ||
    emailSection.length === 0 ||
    zipSection.length === 0 ||
    firstSportSection.length === 0;

  return (
    <>
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
        <Box>
          <Box marginTop="20px">
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
        </Box>
        <Box>
          <Box marginTop="20px">
            <Box>
              <BigText
                color={colors.primaryNavy}
                words={`Zip code`}
                fontSize="0.8em"
              />
            </Box>
            <Box marginTop={"10px"}>
              <TextField
                fullWidth
                value={zipSection}
                onChange={(e) => setZipSection(e.target.value)}
              ></TextField>
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
            // onClick={() => handleSignup()}
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
    </>
  );
}

export default AccountPage;
