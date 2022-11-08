import { existingUser, newUser } from "../types/user";

export const userActionTypes = {
  GET_USER_PROFILE: "GET_USER_PROFILE",
  GET_USER_PROFILE_SUCCESS: "GET_USER_PROFILE_SUCCESS",
  GET_USER_PROFILE_ERROR: "GET_USER_PROFILE_ERROR",
  OPEN_EDIT_PROFILE_MODAL: "OPEN_EDIT_PROFILE_MODAL",
  CLOSE_EDIT_PROFILE_MODAL: "CLOSE_EDIT_PROFILE_MODAL",
  OPEN_EDIT_EXPERIENCE_MODAL: "OPEN_EDIT_EXPERIENCE_MODAL",
  CLOSE_EDIT_EXPERIENCE_MODAL: "CLOSE_EDIT_EXPERIENCE_MODAL",
  EDIT_PROFILE_BLURB: "EDIT_PROFILE_BLURB",
  EDIT_PROFILE_BLURB_SUCCESS: "EDIT_PROFILE_BLURB_SUCCESS",
  EDIT_PROFILE_BLURB_ERROR: "EDIT_PROFILE_BLURB_ERROR",
};

export const userActions = {
  getUserProfile: (email: string, accessToken: string) => ({
    type: userActionTypes.GET_USER_PROFILE,
    email,
    accessToken,
  }),
  openEditProfileModal: () => ({
    type: userActionTypes.OPEN_EDIT_PROFILE_MODAL,
  }),
  closeEditProfileModal: () => ({
    type: userActionTypes.CLOSE_EDIT_PROFILE_MODAL,
  }),
  openEditExperienceModal: () => ({
    type: userActionTypes.OPEN_EDIT_EXPERIENCE_MODAL,
  }),
  closeEditExperienceModal: () => ({
    type: userActionTypes.CLOSE_EDIT_EXPERIENCE_MODAL,
  }),
  editProfileBlurb: (
    email: string,
    accessToken: string,
    blurb: string | undefined
  ) => ({
    type: userActionTypes.EDIT_PROFILE_BLURB,
    email,
    accessToken,
    blurb,
  }),
};
