import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../theme-styles";
import Text from "../../components/text";
import { userActions } from "../../actions/user-actions";
import { existingUser } from "../../types/user";
import BigText from "../../components/big-text";

function AccountPage() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.authReducer);
  const { loading } = useSelector((state: any) => state.uiReducer);
  const [firstNameSection, setFirstNameSection] = useState(
    currentUser?.firstName
  );
  const [lastNameSection, setLastNameSection] = useState(currentUser?.lastName);

  useEffect(() => {
    dispatch(
      userActions.getUserProfile(currentUser.email, currentUser.accessToken)
    );
  }, [currentUser, loading]);

  const userProfile: existingUser = useSelector(
    (state: any) => state.userReducer.userProfile
  );

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
            <Box width="49%">
              <Box>
                <BigText
                  color={colors.primaryNavy}
                  words={`First Name`}
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
            <Box width="49%">
              <Box>
                <BigText
                  color={colors.primaryNavy}
                  words={`Last Name`}
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
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default AccountPage;
