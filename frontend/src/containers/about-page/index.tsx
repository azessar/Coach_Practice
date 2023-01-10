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

function AboutPage() {
  return (
    <>
      <Box
        bgcolor={colors.primaryNavy}
        width="80%"
        margin="auto"
        padding="40px"
        marginTop={"80px"}
        borderRadius="10px"
        display={"flex"}
        justifyContent="space-between"
      >
        <Box width="45%">
          <img
            className="jordan-face"
            src={`jordan-face.png`}
            width="350"
          ></img>
        </Box>
        <Box width="50%">
          <Box>
            <Text
              words="HI! WE'RE JORDAN LEONARD AND ANDREW ZESSAR...
              "
              color={colors.secondaryLightBlue}
              fontWeight="700"
              fontSize="18px"
            />
          </Box>
          <Box marginTop={"15%"}>
            <BigText
              color={colors.secondaryLightBlue}
              fontWeight="600"
              fontSize="10px"
              words="...two longtime friends, athletes, fans, and most importantly, coaches. Having seen the American youth sports coaching landscape first-hand, we identified a fundamental flaw in the industry. Finding a coach has historically been a word-of-mouth business, and we believe some of the most qualified and passionate coaching talent has been left in the dust due to lack of access to the full breadth of coaching opportunities. Simultaneously, we believe there are plenty of qualified coaches out there who lack fundamental job-finding resources. That's why we started CoachCorner. We are here to help coaches from all backgrounds break into the industry, create brands for themselves, and be the most polished coaches they can be."
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
              words="OUR VALUES"
              color={colors.secondaryLightBlue}
              fontWeight="700"
              fontSize="36px"
            />
          </Box>
          <Box marginTop={"5%"}>
            <Box marginTop={"10%"}>
              <BigText
                color={colors.secondaryLightBlue}
                fontWeight="600"
                fontSize="10px"
                words="Everybody! Gets! Paid! (EGP!): The age of the unpaid internship is over, and coaching a team is a JOB. All teams in our network understand that coaches should be compensated appropriately because our coaches are professionals, not volunteers.
             "
              />
            </Box>
            <Box marginTop={"10%"}>
              <BigText
                color={colors.secondaryLightBlue}
                fontWeight="600"
                fontSize="10px"
                words="There's a coaching job for everyone: We believe that everyone has the potential to coach and positively affect a team's trajectory. No matter your coaching experience or level, we have a fit for you.
             "
              />
            </Box>
            <Box marginTop={"10%"}>
              <BigText
                color={colors.secondaryLightBlue}
                fontWeight="600"
                fontSize="10px"
                words="
              'To the world you may be one person, but to one person you may be the world' - Dr. Seuss"
              />
            </Box>
          </Box>
        </Box>
        <Box width="45%">
          <img className="jordan-pic" src={`andrew-face.png`}></img>
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

export default AboutPage;
