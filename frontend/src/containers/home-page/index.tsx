import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../theme-styles";
import { Box } from "@mui/system";
import Text from "../../components/text";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import BigText from "../../components/big-text";
import { coachableSports } from "../../constants/sports";
import { locations } from "../../constants/locations";
import { Navigate, useNavigate } from "react-router";
import { makeQueryParams } from "../search-page/utils";
import { userActions } from "../../actions/user-actions";

function HomePage() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.authReducer);
  const { loading } = useSelector((state: any) => state.uiReducer);
  const navigate = useNavigate();
  const [sport, setSport] = React.useState("Basketball");
  const [metro, setMetro] = React.useState("Chicago, IL");
  const [coachName, setCoachName] = React.useState("");

  const sportKeys = Object.keys(coachableSports).filter(
    (sport) => sport !== "none"
  );
  const sportValues = Object.values(coachableSports).filter(
    (sport) => sport !== "None"
  );

  const cityKeys = Object.keys(locations);
  const cityValues = Object.values(locations);

  const searchCoaches = () => {
    navigate(`/search?${makeQueryParams(sport, metro, coachName)}`);
    dispatch(userActions.getCoaches(coachName || "", metro || "", sport || ""));
  };

  const handleEnter = (e: any) => {
    if (e.keyCode == 13) {
      searchCoaches();
    }
  };

  return (
    <>
      <Box
        bgcolor={colors.primaryNavy}
        width="80%"
        height="250px"
        margin="auto"
        padding="40px"
        marginTop={"80px"}
        borderRadius="10px"
      >
        <Box>
          <Text
            fontSize="14px"
            color={colors.secondaryLightBlue}
            words={`YOUR HUB FOR PREMIER COACHING TALENT`}
          />
        </Box>
        <Box marginTop={"20px"}>
          <Text
            fontSize="44px"
            fontWeight="700"
            color={colors.secondaryLightBlue}
            words={`FIND ME A COACH`}
          />
        </Box>
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
                onKeyDown={(e) => handleEnter(e)}
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
            // onClick={() =>
            //   navigate(`/search?${makeQueryParams(sport, metro, coachName)}`)
            // }
            onClick={() => searchCoaches()}
          >
            Go!
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
