import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../theme-styles";
import { Box } from "@mui/system";
import { userActions } from "../../actions/user-actions";
import Text from "../../components/text";
import BigText from "../../components/big-text";
import { existingUser } from "../../types/user";

function ProfilePage() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.authReducer);
  const userProfile: existingUser = useSelector(
    (state: any) => state.userReducer.userProfile
  );
  const { twitter, instagram, firstName, lastName, email, blurb, experience } =
    userProfile
      ? userProfile
      : {
          twitter: "",
          instagram: "",
          firstName: "",
          lastName: "",
          email: "",
          blurb: "",
          experience: [],
        };

  useEffect(() => {
    dispatch(
      userActions.getUserProfile(currentUser.email, currentUser.accessToken)
    );
  }, [currentUser]);

  return (
    <>
      <Box
        bgcolor={colors.white}
        width="60%"
        margin="auto"
        padding="20px"
        marginTop={"20px"}
        borderRadius="10px"
      >
        <Box
          marginLeft={"auto"}
          marginRight="auto"
          marginTop="20px"
          height="200px"
          width="200px"
          borderRadius={"50%"}
          border={`5px solid ${colors.secondaryLightBlue}`}
        ></Box>
        <Box marginLeft={"auto"} marginRight="auto" marginTop="20px">
          <Text fontSize="14px" color={colors.primaryNavy} words={`Coach`} />
        </Box>
        <Box marginLeft={"auto"} marginRight="auto" marginTop="10px">
          <Text
            fontWeight="700"
            color={colors.primaryNavy}
            words={`${firstName?.toUpperCase()} ${lastName?.toUpperCase()}`}
          />
        </Box>
      </Box>

      <Box
        bgcolor={colors.white}
        width="60%"
        margin="auto"
        padding="20px"
        marginTop={"20px"}
        borderRadius="10px"
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
                  href={`http://www.instagram.com/${twitter?.slice(1)}`}
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
        bgcolor={colors.white}
        width="60%"
        margin="auto"
        padding="20px"
        marginTop={"20px"}
        borderRadius="10px"
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
        bgcolor={colors.white}
        width="60%"
        margin="auto"
        padding="20px"
        marginTop={"20px"}
        borderRadius="10px"
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
          {experience &&
            experience.map((job, i) => (
              <Box
                padding="20px"
                borderTop={i != 0 ? `1px solid ${colors.primaryNavy}` : "none"}
                display="flex"
              >
                <Box width="10%">
                  <Box
                    bgcolor={colors.primaryNavy}
                    width="50px"
                    height="50px"
                    borderRadius={"10px"}
                  ></Box>
                </Box>
                <Box>
                  <Box>
                    <BigText
                      fontSize="16px"
                      fontWeight="700"
                      words={`${job.role}`}
                    />
                  </Box>
                  <Box marginTop={"5px"}>
                    <BigText words={`${job.organization}`} fontSize="14px" />
                  </Box>
                  <Box marginTop={"5px"} display="flex">
                    <BigText words={`${job.startDate} to `} fontSize="14px" />
                    <BigText words={`${job.endDate}`} fontSize="14px" />
                  </Box>
                </Box>
                {/* <Text words={`${job.startDate}`} />
                <Text words={`${job.endDate}`} />
                <Text words={`${job.summary}`} /> */}
              </Box>
            ))}
        </Box>
      </Box>
    </>
  );
}

export default ProfilePage;
