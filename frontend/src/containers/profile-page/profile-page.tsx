import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../theme-styles";
import { Box } from "@mui/system";
import { userActions } from "../../actions/user-actions";
import { Typography } from "@mui/material";
import Text from "../../components/text";

function ProfilePage() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.authReducer);
  const { userProfile } = useSelector((state: any) => state.userReducer);

  useEffect(() => {
    dispatch(
      userActions.getUserProfile(currentUser.email, currentUser.accessToken)
    );
  }, [currentUser]);
  return (
    <Box>
      <Box
        marginLeft={"auto"}
        marginRight="auto"
        marginTop="20px"
        height="200px"
        width="200px"
        borderRadius={"50%"}
        border="1px solid black"
      ></Box>
      <Box marginLeft={"auto"} marginRight="auto" marginTop="20px">
        <Text
          fontWeight="700"
          words={`${userProfile?.firstName.toUpperCase()} ${userProfile?.lastName.toUpperCase()}`}
        />
      </Box>
    </Box>
  );
}

export default ProfilePage;
