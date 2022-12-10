import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Modal from "@mui/material/Modal";
import { userActions } from "../../actions/user-actions";
import { Box, Button, TextField } from "@mui/material";
import Text from "../../components/text";
import { colors } from "../../theme-styles";
import { existingUser } from "../../types/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faArrowUpLong,
  faArrowDownLong,
  faTrash,
  faPlus,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

function EditContactModal() {
  const dispatch = useDispatch();
  const { editContactModalOpen } = useSelector((state: any) => state.uiReducer);
  const { currentUser } = useSelector((state: any) => state.authReducer);
  const userProfile: existingUser = useSelector(
    (state: any) => state.userReducer.userProfile
  );
  const { email } = userProfile || "";
  const [twitterSection, setTwitterSection] = React.useState(
    userProfile?.twitter
  );
  const [linkedInSection, setLinkedInSection] = React.useState(
    userProfile?.linkedIn
  );
  const [instagramSection, setInstagramSection] = React.useState(
    userProfile?.instagram
  );
  const [personalSiteSection, setPersonalSiteSection] = React.useState(
    userProfile?.personalSite
  );

  const handleClose = () => {
    dispatch(userActions.closeEditContactModal());
  };

  const handleEditContacts = () => {
    dispatch(
      userActions.editProfileContact(
        currentUser.email,
        currentUser.accessToken,
        {
          twitter: twitterSection || "",
          instagram: instagramSection || "",
          personalSite: personalSiteSection || "",
          linkedIn: linkedInSection || "",
        }
      )
    );
    handleClose();
  };

  return (
    <Modal
      open={editContactModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle}>
        <Box>
          <Text
            color={colors.primaryNavy}
            words={`Contact section`}
            fontSize="1.2em"
          />
        </Box>

        <Box marginLeft={"auto"} marginRight="auto" marginTop={"20px"}>
          <Box display="flex">
            <Box margin="auto" width="25px" height="25px">
              <img src="twitter-removebg-preview.png" width="20"></img>
            </Box>
            <Box marginLeft={"10px"}>
              <TextField
                fullWidth
                value={twitterSection}
                onChange={(e) => setTwitterSection(e.target.value)}
              ></TextField>
            </Box>
          </Box>
          <Box display="flex">
            <Box margin="auto" width="25px" height="25px">
              <img src="linkedin-removebg-preview.png" width="20"></img>
            </Box>
            <Box marginLeft={"10px"}>
              <TextField
                fullWidth
                value={linkedInSection}
                onChange={(e) => setLinkedInSection(e.target.value)}
              ></TextField>
            </Box>
          </Box>
          <Box display="flex" marginTop={"10px"}>
            <Box margin="auto" width="25px" height="25px">
              <img src="instagram-removebg-preview.png" width="20"></img>
            </Box>
            <Box marginLeft={"10px"}>
              <TextField
                fullWidth
                value={instagramSection}
                onChange={(e) => setInstagramSection(e.target.value)}
              ></TextField>
            </Box>
          </Box>
          <Box display="flex" marginTop={"10px"}>
            <Box margin="auto" width="25px" height="25px">
              <FontAwesomeIcon icon={faGlobe} />
            </Box>
            <Box marginLeft={"10px"}>
              <TextField
                fullWidth
                value={personalSiteSection}
                onChange={(e) => setPersonalSiteSection(e.target.value)}
              ></TextField>
            </Box>
          </Box>
          <Box display="flex" marginTop={"10px"}>
            <Box margin="auto" width="25px" height="25px">
              <img src="email-removebg-preview.png" width="20"></img>
            </Box>
            <Box marginLeft={"10px"}>
              <TextField fullWidth value={email} disabled></TextField>
            </Box>
          </Box>
          <Box display="flex" justifyContent="flex-end" marginTop={"5px"}>
            <Text
              color={colors.primaryNavy}
              words={`(Update email in your Accounts tab.)`}
              fontSize="0.7em"
            />
          </Box>
        </Box>
        <Box display={"flex"} justifyContent="flex-end" marginTop={"10px"}>
          <Box marginRight={"10px"}>
            <Button
              onClick={() => handleClose()}
              variant="contained"
              style={{
                background: colors.white,
                color: colors.primaryNavy,
              }}
            >
              Cancel
            </Button>
          </Box>
          <Box>
            <Button
              onClick={() => handleEditContacts()}
              variant="contained"
              style={{
                background: colors.primaryNavy,
                color: colors.white,
              }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}

export default EditContactModal;

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
