import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { colors } from "../../theme-styles";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../actions/auth-actions";
import { TextField } from "@mui/material";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(authActions.login({ email, password }));
    setEmail("");
    setPassword("");
  };

  const { authMessage, isError } = useSelector(
    (state: any) => state.authReducer
  );

  const handleEnter = (e: any) => {
    if (e.keyCode == 13) {
      handleLogin();
    }
  };

  const handleSwitchToSignup = () => {
    dispatch(authActions.switchToSignup());
    setEmail("");
    setPassword("");
  };

  return (
    <Box sx={boxStyle}>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        fontWeight={"700"}
        style={{ color: colors.primaryNavy }}
      >
        Welcome back, coach!
      </Typography>
      {isError && (
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          style={{ color: colors.red, fontSize: "12px" }}
        >
          {authMessage}
        </Typography>
      )}

      <Box marginTop={"10px"} display="flex" flexDirection={"column"}>
        <Box>
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
          <Box sx={typographyStyles} onClick={handleSwitchToSignup}>
            Or create a new account here!
          </Box>
        </Box>
        <Box marginTop={"10px"}>
          <Button
            onClick={() => handleLogin()}
            disabled={email.length === 0 || password.length === 0}
            variant="contained"
            style={{
              background:
                email.length === 0 || password.length === 0
                  ? colors.disabledGray
                  : colors.primaryNavy,
              color:
                email.length === 0 || password.length === 0
                  ? colors.black
                  : colors.white,
            }}
          >
            Login
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
};

const typographyStyles = {
  color: colors.primaryNavy,
  fontSize: "16px",
  "&:hover": {
    textDecoration: "underline",
    cursor: "pointer",
  },
};

export default Login;
