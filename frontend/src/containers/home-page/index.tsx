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
      <Box
        bgcolor={colors.primaryNavy}
        width="80%"
        margin="auto"
        padding="40px"
        marginTop={"20px"}
        borderRadius="10px"
        display={"flex"}
        justifyContent="space-between"
      >
        <Box width="45%">
          <img className="jordan-pic" src={`jordancoaching.png`}></img>
        </Box>
        <Box width="50%">
          <Box>
            <Text
              words="WHAT WE DO"
              color={colors.secondaryLightBlue}
              fontWeight="700"
              fontSize="36px"
            />
          </Box>
          <Box marginTop={"15%"}>
            <BigText
              color={colors.secondaryLightBlue}
              fontWeight="600"
              fontSize="16px"
              words="We help schools, athletic departments, and teams of all kinds connect with the perfect coaches, athletic directors, and game operations talent for their programs. Simultaneously, we provide coaches of all levels resources for finding the perfect position."
            />
          </Box>
        </Box>
      </Box>
      <Box
        bgcolor={colors.primaryNavy}
        width="80%"
        margin="auto"
        padding="40px"
        marginTop={"20px"}
        borderRadius="10px"
        display={"flex"}
        justifyContent="space-between"
      >
        <Box width="50%">
          <Box>
            <Text
              words="WHO WE ARE"
              color={colors.secondaryLightBlue}
              fontWeight="700"
              fontSize="36px"
            />
          </Box>
          <Box marginTop={"15%"}>
            <BigText
              color={colors.secondaryLightBlue}
              fontWeight="600"
              fontSize="16px"
              words="We are a vast network of experienced and aspiring coaching and game operations talent with a passion for teaching, playing, and growing the game, whether it's basketball, volleyball, soccer, football, or any other popular American sport.
              "
            />
          </Box>
        </Box>
        <Box width="45%">
          <img className="jordan-pic" src={`huddle.png`}></img>
        </Box>
      </Box>
      <Box
        bgcolor={colors.primaryNavy}
        width="80%"
        margin="auto"
        padding="40px"
        marginTop={"20px"}
        borderRadius="10px"
        display={"flex"}
        justifyContent="space-between"
      >
        <Box width="45%">
          <img className="jordan-pic" src={`girlcoaching.png`}></img>
        </Box>
        <Box width="50%">
          <Box>
            <Text
              words="WHY WE DO IT"
              color={colors.secondaryLightBlue}
              fontWeight="700"
              fontSize="36px"
            />
          </Box>
          <Box marginTop={"10%"}>
            <BigText
              color={colors.secondaryLightBlue}
              fontWeight="600"
              fontSize="12px"
              words="Besides a love for the game, our founding team identified a fundamental flaw in the American sports coaching industry. Finding a coach has historically been a word-of-mouth business, and we believe some of the most qualified and passionate coaching talent has been left in the dust due to lack of access to the full breadth of coaching opportunities. We are here to help the cream rise to the top by matching the best coaches with the best coaching opportunities while providing athletes the best mentorship possible."
            />
          </Box>
        </Box>
      </Box>
      <Box
        bgcolor={colors.primaryNavy}
        width="80%"
        margin="auto"
        padding="40px"
        marginTop={"20px"}
        borderRadius="10px"
        display={"flex"}
        justifyContent="space-between"
      >
        <Box width="50%">
          <Box>
            <Text
              words="LOOKING FOR THE RIGHT COACH?"
              color={colors.secondaryLightBlue}
              fontWeight="700"
              fontSize="24px"
            />
          </Box>
          <Box marginTop={"40px"} display="flex" justifyContent="center">
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLScHqK03FFN_NFOLaS474npgNPSFiVAQt66Uu2ZOabdOpmjFKw/viewform"
            >
              <BigText
                color={colors.secondaryLightBlue}
                fontWeight="600"
                fontSize="12px"
                words="FILL OUT THIS FORM"
                fontStyle="underlined"
              />
            </a>
          </Box>
        </Box>
        <Box width="50%">
          <Box>
            <Text
              words="DO YOU WANT TO COACH?"
              color={colors.secondaryLightBlue}
              fontWeight="700"
              fontSize="24px"
            />
          </Box>
          <Box marginTop={"40px"} display="flex" justifyContent="center">
            <a
              target="_blank"
              href="https://docs.google.com/forms/d/e/1FAIpQLSe7OijdcgJGNfmG9WRWn-g3AX9JUQNAaQ1ESCCSFdwIHK9Ssg/viewform"
            >
              <BigText
                color={colors.secondaryLightBlue}
                fontWeight="600"
                fontSize="12px"
                words="FILL OUT THIS FORM (and then signup on this site to create a profile!)"
              />
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
