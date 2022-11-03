import { existingUser, newUser } from "../types/user";

export const userActionTypes = {
  GET_USER_PROFILE: "GET_USER_PROFILE",
  GET_USER_PROFILE_SUCCESS: "GET_USER_PROFILE_SUCCESS",
  GET_USER_PROFILE_ERROR: "GET_USER_PROFILE_ERROR",
  OPEN_EDIT_PROFILE_MODAL: "OPEN_EDIT_PROFILE_MODAL",
  CLOSE_EDIT_PROFILE_MODAL: "CLOSE_EDIT_PROFILE_MODAL",
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
};
