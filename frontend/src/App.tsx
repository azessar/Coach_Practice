import React, { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { colors } from "./theme-styles";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./actions/auth-actions";
import { TextField } from "@mui/material";
import NavBar from "./components/nav-bar";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authModalOpen = useSelector(
    (state: any) => state.authReducer.authModalOpen
  );
  const handleOpen = () => {
    dispatch(authActions.openAuthModal());
  };
  const handleClose = () => {
    dispatch(authActions.closeAuthModal());
  };

  const handleLogin = () => {
    dispatch(authActions.login({ email, password }));
  };

  return (
    <div className="App">
      <NavBar />
      <Modal
        open={authModalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            fontWeight={"700"}
            style={{ color: colors.primaryNavy }}
          >
            Welcome back, coach!
          </Typography>
          <Box marginTop={"10px"} display="flex" flexDirection={"column"}>
            <Box>
              <TextField
                label="E-mail"
                required
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              ></TextField>
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
      </Modal>
    </div>
  );
}

const style = {
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

export default App;
