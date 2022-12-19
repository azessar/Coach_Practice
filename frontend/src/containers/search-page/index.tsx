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

function SearchPage() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.authReducer);
  const { loading } = useSelector((state: any) => state.uiReducer);
  const coaches = useSelector((state: any) => state?.uiReducer.coaches);
  const navigate = useNavigate();
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
  }, [currentUser]);

  const searchCoaches = () => {
    navigate(`/search?${makeQueryParams(sport, metro, coachName)}`);
    dispatch(userActions.getCoaches(coachName || "", metro || "", sport || ""));
  };

  console.log(11111, coaches);

  return (
    <>
      <Box
        bgcolor={colors.primaryNavy}
        width="80%"
        margin="auto"
        padding="40px"
        marginTop={"80px"}
        borderRadius="10px"
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
    </>
  );
}

export default SearchPage;
