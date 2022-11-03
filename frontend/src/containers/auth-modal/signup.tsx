import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { colors } from "../../theme-styles";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../actions/auth-actions";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { coachableSports } from "../../constants/sports";
import Text from "../../components/text";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstSport, setFirstSport] = useState("");

  const dispatch = useDispatch();

  const handleSignup = () => {
    dispatch(
      authActions.signup({
        firstName,
        lastName,
        zipCode,
        email,
        password,
        confirmPassword,
        sports: [firstSport],
      })
    );
    setPassword("");
    setConfirmPassword("");
  };

  const { authMessage, isError } = useSelector((state: any) => state.uiReducer);

  const handleEnter = (e: any) => {
    if (e.keyCode == 13 && !disabledSubmit) {
      handleSignup();
    }
  };

  const handleSwitchToLogin = () => {
    dispatch(authActions.switchToLogin());
    setEmail("");
    setPassword("");
  };

  const disabledSubmit =
    firstName.length === 0 ||
    lastName.length === 0 ||
    email.length === 0 ||
    zipCode.length === 0 ||
    password.length === 0 ||
    confirmPassword.length === 0 ||
    firstSport.length === 0;

  return (
    <Box sx={boxStyle}>
      <Text
        color={colors.primaryNavy}
        words="SIGNUP AS A COACH"
        fontSize="1.2em"
      />
      {isError && (
        <Text color={colors.red} words={authMessage} fontSize=".8em" />
      )}

      <Box marginTop={"10px"} display="flex" flexDirection={"column"}>
        <Box marginTop={"10px"}>
          <TextField
            label="First name"
            required
            fullWidth
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onKeyDown={(e) => handleEnter(e)}
          ></TextField>
        </Box>
        <Box marginTop={"10px"}>
          <TextField
            label="Last name"
            required
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onKeyDown={(e) => handleEnter(e)}
          ></TextField>
        </Box>
        <Box marginTop={"10px"}>
          <TextField
            label="E-mail"
            required
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => handleEnter(e)}
          ></TextField>
        </Box>
        <Box marginTop={"10px"}>
          <TextField
            label="Zip code"
            required
            fullWidth
            value={zipCode}
            type="number"
            onChange={(e) => setZipCode(String(e.target.value))}
            onKeyDown={(e) => handleEnter(e)}
          ></TextField>
        </Box>

        <Box marginTop={"10px"}>
          <TextField
            type="password"
            label="Password"
            required
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => handleEnter(e)}
          ></TextField>
        </Box>
        <Box marginTop={"10px"}>
          <TextField
            type="password"
            label="Confirm password"
            required
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onKeyDown={(e) => handleEnter(e)}
          ></TextField>
        </Box>

        <Box marginTop={"10px"}>
          <InputLabel id="demo-simple-select-label">
            Sport (select one for now)
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={firstSport}
            fullWidth
            onChange={(e) => setFirstSport(e.target.value)}
          >
            {Object.values(coachableSports).map((sport, i) => (
              <MenuItem value={Object.keys(coachableSports)[i]}>
                {sport}
              </MenuItem>
            ))}
          </Select>
        </Box>

        <Box marginTop={"10px"}>
          <Box sx={typographyStyles} onClick={handleSwitchToLogin}>
            <Text
              color={colors.primaryNavy}
              words="OR LOG BACK IN HERE"
              fontSize=".8em"
            />
          </Box>
        </Box>
        <Box marginTop={"10px"}>
          <Button
            onClick={() => handleSignup()}
            disabled={disabledSubmit}
            variant="contained"
            style={{
              background: disabledSubmit
                ? colors.disabledGray
                : colors.primaryNavy,
              color: disabledSubmit ? colors.black : colors.white,
            }}
          >
            Signup
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const boxStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  minWidth: "500px",
};

const typographyStyles = {
  color: colors.primaryNavy,
  fontSize: "16px",
  "&:hover": {
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default Signup;
