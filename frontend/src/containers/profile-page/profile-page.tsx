import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../theme-styles";
import { Box } from "@mui/system";
import { userActions } from "../../actions/user-actions";
import Text from "../../components/text";
import BigText from "../../components/big-text";

function ProfilePage() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.authReducer);
  const { userProfile } = useSelector((state: any) => state.userReducer);
  const { twitter, instagram, firstName, lastName, email, blurb } = userProfile;

  useEffect(() => {
    dispatch(
      userActions.getUserProfile(currentUser.email, currentUser.accessToken)
    );
  }, [currentUser]);

  return (
    <>
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
          <Text fontSize="14px" color={colors.primaryNavy} words={`Coach`} />
        </Box>
        <Box marginLeft={"auto"} marginRight="auto" marginTop="10px">
          <Text
            fontWeight="700"
            color={colors.primaryNavy}
            words={`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}
          />
        </Box>
      </Box>

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
          display="flex"
          justifyContent={"space-evenly"}
        >
          {twitter && (
            <Box display="flex">
              <Box marginTop={"3px"}>
                <img src="twitter-removebg-preview.png" width="20"></img>
              </Box>
              <Box marginLeft={"5px"}>
                <a
                  href={`http://www.twitter.com/${twitter.slice(1)}`}
                  target="_blank"
                >
                  <Text
                    fontSize="16px"
                    color={colors.primaryNavy}
                    words={`${twitter}`}
                  />
                </a>
              </Box>
            </Box>
          )}
          {instagram && (
            <Box display="flex">
              <Box marginTop={"1px"}>
                <img src="instagram-removebg-preview.png" width="20"></img>
              </Box>
              <Box marginLeft={"5px"}>
                <a
                  href={`http://www.instagram.com/${twitter.slice(1)}`}
                  target="_blank"
                >
                  <Text
                    fontSize="16px"
                    color={colors.primaryNavy}
                    words={`${instagram}`}
                  />
                </a>
              </Box>
            </Box>
          )}

          <Box display="flex">
            <Box marginTop={"1px"}>
              <img src="email-removebg-preview.png" width="20"></img>
            </Box>
            <Box marginLeft={"5px"}>
              <a href={`mailto: ${email}`}>
                <Text
                  fontSize="16px"
                  color={colors.primaryNavy}
                  words={`${email}`}
                />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>

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
        <Box>
          <BigText
            fontSize="14px"
            color={colors.primaryNavy}
            words={`About`}
            fontWeight="700"
          />
        </Box>
        <Box marginTop={"20px"}>
          <BigText
            fontSize="14px"
            color={colors.primaryNavy}
            words={`${blurb}`}
          />
        </Box>
      </Box>

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
        <Box>
          <BigText
            fontSize="14px"
            color={colors.primaryNavy}
            words={`Experience`}
            fontWeight="700"
          />
        </Box>
        <Box marginTop={"20px"}>
          <BigText
            fontSize="14px"
            color={colors.primaryNavy}
            words={`${blurb}`}
          />
        </Box>
      </Box>
    </>
  );
}

export default ProfilePage;
