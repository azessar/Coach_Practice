import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../theme-styles";
import { Box } from "@mui/system";
import { userActions } from "../../actions/user-actions";
import Text from "../../components/text";
import BigText from "../../components/big-text";
import { existingUser, job } from "../../types/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faArrowUpLong,
  faArrowDownLong,
  faTrash,
  faPlus,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import EditBlurbModal from "./edit-blurb-modal";
import EditExperienceModal from "./edit-experience-modal";
import DeleteExperienceModal from "./delete-experience-modal";
import AddExperienceModal from "./add-experience-modal";
import EditContactModal from "./edit-contact-modal";
import { truncate } from "fs";
import { useParams } from "react-router-dom";

interface ProfilePageProps {
  id: number;
}

function ProfilePage(props: ProfilePageProps) {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.authReducer);
  const { loading } = useSelector((state: any) => state.uiReducer);
  const { selectedCoachId, selectedCoachProfile } = useSelector(
    (state: any) => state.userReducer
  );
  const [selectedExperience, setSelectedExperience] =
    React.useState<job | null>();
  const [selectedJobIndex, setSelectedJobIndex] = React.useState<
    number | null
  >();
  const {
    twitter,
    instagram,
    linkedIn,
    personalSite,
    firstName,
    lastName,
    email,
    blurb,
    experience,
    sports,
  } = selectedCoachProfile
    ? selectedCoachProfile
    : {
        twitter: "",
        linkedIn: "",
        instagram: "",
        personalSite: "",
        firstName: "",
        lastName: "",
        email: "",
        blurb: "",
        experience: [],
        sports: [],
      };

  const urlId = useParams().id || "";

  useEffect(() => {
    dispatch(
      userActions.getCoachProfile(
        parseInt(urlId) || props.id || selectedCoachId
      )
    );
  }, [loading, selectedCoachId]);

  const openEditExperienceModal = (job: job, jobIndex: number) => {
    setSelectedExperience(job);
    setSelectedJobIndex(jobIndex);
    dispatch(userActions.openEditExperienceModal());
  };

  const openDeleteExperienceModal = (job: job, jobIndex: number) => {
    setSelectedExperience(job);
    setSelectedJobIndex(jobIndex);
    dispatch(userActions.openDeleteExperienceModal());
  };

  function yearsAndMonths(startDate: Date, endDate: Date) {
    //returns array of years and then months
    const totalMonths =
      endDate.getMonth() -
      startDate.getMonth() +
      12 * (endDate.getFullYear() - startDate.getFullYear());
    const years = Math.round(totalMonths / 12);
    const months = totalMonths - 12 * years;
    let answer = "";

    if (years === 1) {
      answer = "1 year";
    } else if (years > 1) {
      answer = `${years} years`;
    }

    if (years > 0 && months > 0) {
      answer = answer + " & ";
    }

    if (months === 1) {
      answer = answer + "1 month";
    } else if (months > 1) {
      answer = answer + `${months} months`;
    }

    return answer;
  }

  const truncateString = (string: string) => {
    let answer = string;
    if (answer.length > 25) {
      answer = string.substring(0, 24) + "...";
    }
    return answer;
  };

  const handleReorderExperience = (oldIndex: number, direction: string) => {
    const currentExperience = selectedCoachProfile.experience;
    let newExperience = [...selectedCoachProfile.experience];

    let otherIndex: number;
    if (direction === "up") {
      otherIndex = oldIndex - 1;
      newExperience[oldIndex] = currentExperience[otherIndex];
      newExperience[otherIndex] = currentExperience[oldIndex];
    } else if (direction === "down") {
      otherIndex = oldIndex + 1;
      newExperience[oldIndex] = currentExperience[otherIndex];
      newExperience[otherIndex] = currentExperience[oldIndex];
    }
    dispatch(
      userActions.editExperience(
        currentUser.email,
        currentUser.accessToken,
        newExperience
      )
    );
  };

  return (
    <>
      <EditBlurbModal />
      <EditContactModal />
      <AddExperienceModal />
      {selectedExperience && selectedJobIndex != null && (
        <>
          <EditExperienceModal
            job={selectedExperience}
            jobIndex={selectedJobIndex}
          />
          <DeleteExperienceModal
            job={selectedExperience}
            jobIndex={selectedJobIndex}
          />
        </>
      )}

      <Box
        bgcolor={colors.primaryNavy}
        width="80%"
        margin="auto"
        padding="20px"
        marginTop={"80px"}
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
        <Box display="flex" justifyContent={"space-evenly"}>
          <Box width="25%">
            <Box marginLeft={"auto"} marginRight="auto" marginTop="20px">
              <Text
                fontSize="14px"
                color={colors.secondaryLightBlue}
                words={`${selectedCoachProfile?.city}`}
              />
            </Box>
          </Box>
          <Box width="50%">
            <Box marginLeft={"auto"} marginRight="auto" marginTop="20px">
              <Text
                fontSize="14px"
                color={colors.secondaryLightBlue}
                words={`Coach`}
              />
            </Box>
            <Box marginLeft={"auto"} marginRight="auto" marginTop="10px">
              <Text
                fontWeight="700"
                color={colors.secondaryLightBlue}
                words={`${firstName?.toUpperCase()} ${lastName?.toUpperCase()}`}
              />
            </Box>
          </Box>
          <Box width="25%" display="flex" justifyContent={"space-around"}>
            <Box marginTop="10px">
              {sports &&
                sports.length > 0 &&
                sports?.map((sport: any) => (
                  <Box display="flex" marginTop={"5px"}>
                    <Box>
                      <img
                        src={`${sport
                          ?.toString()
                          .toLowerCase()}-removebg-preview.png`}
                        width="20"
                      ></img>
                    </Box>
                    <Box marginLeft={"10px"}>
                      <BigText
                        words={
                          sport.toString().charAt(0).toUpperCase() +
                          sport.toString().slice(1)
                        }
                        fontSize="16px"
                        color={colors.secondaryLightBlue}
                      />
                    </Box>
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        bgcolor={colors.white}
        width="80%"
        margin="auto"
        padding="20px"
        marginTop={"20px"}
        borderRadius="10px"
      >
        <Box display="flex" justifyContent={"space-between"}>
          <Box>
            <BigText
              fontSize="14px"
              color={colors.primaryNavy}
              words={`Contact`}
              fontWeight="700"
            />
          </Box>

          <Box>
            <Button
              onClick={() => dispatch(userActions.openEditContactModal())}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
          </Box>
        </Box>
        <Box
          marginLeft={"auto"}
          marginRight="auto"
          display="flex"
          justifyContent={"space-evenly"}
        >
          {twitter && twitter.length > 0 && (
            <Box display="flex">
              <Box marginTop={"3px"}>
                <img src="twitter-removebg-preview.png" width="20"></img>
              </Box>
              <Box marginLeft={"5px"}>
                <a
                  href={`https://www.twitter.com/${twitter.slice(1)}`}
                  target="_blank"
                >
                  <Text
                    fontSize="14px"
                    color={colors.primaryNavy}
                    words={`${truncateString(twitter)}`}
                  />
                </a>
              </Box>
            </Box>
          )}
          {linkedIn && linkedIn.length > 0 && (
            <Box display="flex">
              <Box marginTop={"3px"}>
                <img src="linkedIn-removebg-preview.png" width="20"></img>
              </Box>
              <Box marginLeft={"5px"}>
                <a href={`${linkedIn}`} target="_blank">
                  <Text
                    fontSize="14px"
                    color={colors.primaryNavy}
                    words={`${truncateString(linkedIn)}`}
                  />
                </a>
              </Box>
            </Box>
          )}
          {instagram && instagram.length > 0 && (
            <Box display="flex">
              <Box marginTop={"1px"}>
                <img src="instagram-removebg-preview.png" width="20"></img>
              </Box>
              <Box marginLeft={"5px"}>
                <a
                  href={`https://www.instagram.com/${instagram?.slice(1)}`}
                  target="_blank"
                >
                  <Text
                    fontSize="14px"
                    color={colors.primaryNavy}
                    words={`${truncateString(instagram)}`}
                  />
                </a>
              </Box>
            </Box>
          )}
          {personalSite && personalSite.length > 0 && (
            <Box display="flex">
              <Box marginTop={"1px"}>
                <FontAwesomeIcon icon={faGlobe} />
              </Box>
              <Box marginLeft={"5px"}>
                <a href={`https://${personalSite}`} target="_blank">
                  <Text
                    fontSize="14px"
                    color={colors.primaryNavy}
                    words={`${truncateString(personalSite)}`}
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
                  fontSize="14px"
                  color={colors.primaryNavy}
                  words={`${truncateString(email)}`}
                />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        bgcolor={colors.white}
        width="80%"
        margin="auto"
        padding="20px"
        marginTop={"20px"}
        borderRadius="10px"
      >
        <Box display="flex" justifyContent={"space-between"}>
          <Box>
            <BigText
              fontSize="14px"
              color={colors.primaryNavy}
              words={`About`}
              fontWeight="700"
            />
          </Box>

          <Box>
            <Button
              onClick={() => dispatch(userActions.openEditProfileModal())}
            >
              <FontAwesomeIcon icon={faPenToSquare} />
            </Button>{" "}
          </Box>
        </Box>
        <Box marginTop={"20px"}>
          <BigText
            fontWeight="400"
            fontSize="14px"
            color={colors.primaryNavy}
            words={blurb && blurb.length > 0 ? `${blurb}` : ""}
          />
        </Box>
      </Box>

      <Box
        bgcolor={colors.white}
        width="80%"
        margin="auto"
        padding="20px"
        marginTop={"20px"}
        marginBottom={"20px"}
        borderRadius="10px"
      >
        <Box display="flex" justifyContent={"space-between"}>
          <Box>
            {" "}
            <BigText
              fontSize="14px"
              color={colors.primaryNavy}
              words={`Experience`}
              fontWeight="700"
            />
          </Box>
          <Box>
            <Button
              onClick={() => dispatch(userActions.openAddExperienceModal())}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </Box>
        </Box>
        <Box marginTop={"20px"}>
          {experience &&
            experience.length > 0 &&
            experience.map((job: any, i: number) => (
              <Box
                padding="20px"
                borderTop={
                  i != 0 ? `1px solid ${colors.secondaryLightBlue}` : "none"
                }
                display="flex"
              >
                <Box width="20%">
                  <img
                    src={`${job.sport
                      ?.toString()
                      .toLowerCase()}-removebg-preview.png`}
                    width="90"
                  ></img>
                </Box>

                <Box width="90%" marginLeft={"20px"}>
                  <Box display="flex" justifyContent={"space-between"}>
                    <Box>
                      <BigText
                        fontSize="16px"
                        fontWeight="700"
                        words={`${job.role}`}
                      />
                    </Box>
                    <Box display="flex">
                      <Box display="flex">
                        <Button
                          onClick={() => handleReorderExperience(i, "up")}
                          disabled={i === 0}
                        >
                          <FontAwesomeIcon icon={faArrowUpLong} />
                        </Button>
                        <Button
                          onClick={() => handleReorderExperience(i, "down")}
                          disabled={i === experience.length - 1}
                        >
                          <FontAwesomeIcon icon={faArrowDownLong} />
                        </Button>
                      </Box>
                      <Box>
                        <Button onClick={() => openEditExperienceModal(job, i)}>
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </Button>
                      </Box>
                      <Box>
                        <Button
                          onClick={() => openDeleteExperienceModal(job, i)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                  <Box marginTop={"5px"}>
                    <BigText words={`${job.organization}`} fontSize="14px" />
                  </Box>
                  <Box marginTop={"5px"} display="flex">
                    <BigText
                      color={colors.disabledGray}
                      words={`${new Date(job?.startDate).toLocaleString(
                        "default",
                        { month: "short", year: "numeric" }
                      )} to ${new Date(job?.endDate).toLocaleString("default", {
                        month: "short",
                        year: "numeric",
                      })} - ${yearsAndMonths(
                        new Date(job?.startDate),
                        new Date(job?.endDate)
                      )}`}
                      fontSize="14px"
                    />
                  </Box>
                  <Box marginTop={"20px"}>
                    <BigText
                      fontWeight="400"
                      fontSize="14px"
                      words={`${job.summary}`}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
        </Box>
      </Box>
    </>
  );
}

export default ProfilePage;
