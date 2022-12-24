import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../theme-styles";
import { Box } from "@mui/system";
import Text from "../../components/text";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import BigText from "../../components/big-text";
import { coachableSports } from "../../constants/sports";
import { locations } from "../../constants/locations";
import { Navigate, useLocation, useNavigate } from "react-router";
import { makeQueryParams } from "./utils";
import { userActions } from "../../actions/user-actions";
import { getCoachesAPI } from "../../sagas/user-sagas";
import { existingUser } from "../../types/user";

function SearchPage() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.authReducer);
  const { loading } = useSelector((state: any) => state.uiReducer);
  const coaches = useSelector((state: any) => state?.userReducer.coaches);
  let navigate = useNavigate();
  const [sport, setSport] = React.useState("");
  const [metro, setMetro] = React.useState("");
  const [coachName, setCoachName] = React.useState("");

  const sportKeys = Object.keys(coachableSports).filter(
    (sport) => sport !== "none"
  );
  const sportValues = Object.values(coachableSports).filter(
    (sport) => sport !== "None"
  );

  const cityKeys = Object.keys(locations);
  const cityValues = Object.values(locations);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();

  useEffect(() => {
    setSport(query.get("sport") || "");
    setMetro(query.get("city") || "");
    setCoachName(query.get("name") || "");

    dispatch(
      userActions.getCoaches(
        query.get("name") || "",
        query.get("city") || "",
        query.get("sport") || ""
      )
    );
  }, [currentUser]);

  const searchCoaches = () => {
    navigate(`/search?${makeQueryParams(sport, metro, coachName)}`);
    dispatch(userActions.getCoaches(coachName || "", metro || "", sport || ""));
  };

  const handleEnter = (e: any) => {
    if (e.keyCode == 13) {
      searchCoaches();
    }
  };

  const experienceBlurb = (coach: existingUser) => {
    let answer = "";
    if (coach.experience) {
      answer =
        answer +
        coach.experience[0].sport +
        " coach at " +
        coach.experience[0].organization;
      return answer;
    }
    answer = answer + coach.firstSport + " coach";
    return answer;
  };

  const coachBoxes = () => {
    if (coaches.length === 0) {
      return (
        <Box width="80%" margin="auto">
          <BigText words="This search returned no results." />
        </Box>
      );
    }
    return (
      <>
        <Box width="80%" margin="auto">
          <BigText words={`${coaches.length} results`} />
        </Box>
        {coaches.map((coach: existingUser, i: number) => (
          <Box
            bgcolor={colors.white}
            width="80%"
            margin="auto"
            padding="40px"
            marginTop={"20px"}
            borderRadius="10px"
            display={"flex"}
            onClick={() => navigate(`/profile/${coach.id}`)}
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <Box width="20%">
              <Box
                borderRadius={"50%"}
                border={`5px solid ${colors.secondaryLightBlue}`}
                height="100px"
                width="100px"
              ></Box>
            </Box>
            <Box width="80%">
              <Box>
                <BigText words={`${`${coach.firstName} ${coach.lastName}`}`} />
              </Box>

              <Box marginTop={"10px"}>
                <BigText
                  words={experienceBlurb(coach)}
                  fontSize="16px"
                  fontWeight="400"
                />
              </Box>

              <Box marginTop={"10px"}>
                <BigText
                  words={`${coach.city}`}
                  fontSize="16px"
                  fontWeight="400"
                />
              </Box>
            </Box>
          </Box>
        ))}
      </>
    );
  };

  console.log(11111, coaches);

  return (
    <Box marginBottom={"20px"}>
      <Box
        bgcolor={colors.primaryNavy}
        width="80%"
        margin="auto"
        padding="40px"
        marginTop={"80px"}
        borderRadius="10px"
        onKeyDown={(e) => handleEnter(e)}
      >
        <Box marginTop={"20px"} display="flex" justifyContent={"space-between"}>
          <Box width="30%">
            <Box>
              <BigText
                color={colors.secondaryLightBlue}
                words={`Sport`}
                fontSize="0.8em"
              />
            </Box>
            <Box bgcolor={colors.secondaryLightBlue} marginTop="5px">
              <Select
                fullWidth
                value={sport}
                onChange={(e) => setSport(e.target.value)}
                onKeyDown={(e) => handleEnter(e)}
              >
                {sportKeys.map((sport, i) => (
                  <MenuItem value={sportValues[i]}>{sportValues[i]}</MenuItem>
                ))}
              </Select>
            </Box>
          </Box>

          <Box width="30%">
            <Box>
              <BigText
                color={colors.secondaryLightBlue}
                words={`Metro area`}
                fontSize="0.8em"
              />
            </Box>
            <Box bgcolor={colors.secondaryLightBlue} marginTop="5px">
              <Select
                fullWidth
                value={metro}
                onChange={(e) => setMetro(e.target.value)}
              >
                {cityKeys.map((sport, i) => (
                  <MenuItem value={cityValues[i]}>{cityValues[i]}</MenuItem>
                ))}
              </Select>
            </Box>
          </Box>

          <Box width="30%">
            <Box>
              <BigText
                color={colors.secondaryLightBlue}
                words={`Name of coach`}
                fontSize="0.8em"
              />
            </Box>
            <Box bgcolor={colors.secondaryLightBlue} marginTop="5px">
              <TextField
                fullWidth
                placeholder="Know a coach? Search by name..."
                value={coachName}
                onChange={(e) => setCoachName(e.target.value)}
                onKeyDown={(e) => handleEnter(e)}
              ></TextField>
            </Box>
          </Box>
        </Box>
        <Box marginTop={"20px"}>
          <Button
            variant="contained"
            style={{
              background: colors.goRed,
              color: colors.white,
            }}
            onClick={() => searchCoaches()}
          >
            Go!
          </Button>
        </Box>
      </Box>
      <Box marginTop={"20px"}>{coachBoxes()}</Box>
    </Box>
  );
}

export default SearchPage;
