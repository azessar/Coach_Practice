import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../theme-styles";
import { Box } from "@mui/system";
import { userActions } from "../../actions/user-actions";
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
    <Box
      bgcolor={colors.tertiarySilver}
      width="60%"
      margin="auto"
      padding="20px"
      marginTop={"20px"}
      borderRadius="10px"
      border={`1px solid ${colors.primaryNavy}`}
      boxShadow={`2px 2px 2px ${colors.disabledGray}`}
    >
      <Box
        marginLeft={"auto"}
        marginRight="auto"
        marginTop="20px"
        height="200px"
        width="200px"
        borderRadius={"50%"}
        border={`5px solid ${colors.white}`}
      ></Box>
      <Box marginLeft={"auto"} marginRight="auto" marginTop="20px">
        <Text
          fontWeight="700"
          color={colors.primaryNavy}
          words={`${userProfile?.firstName.toUpperCase()} ${userProfile?.lastName.toUpperCase()}`}
        />
      </Box>
    </Box>
  );
}

export default ProfilePage;
