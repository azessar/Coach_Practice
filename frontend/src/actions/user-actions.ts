import { existingUser, newUser } from "../types/user";

export const userActionTypes = {
  GET_USER_PROFILE: "GET_USER_PROFILE",
  GET_USER_PROFILE_SUCCESS: "GET_USER_PROFILE_SUCCESS",
  GET_USER_PROFILE_ERROR: "GET_USER_PROFILE_ERROR",
};

export const userActions = {
  getUserProfile: (email: string, accessToken: string) => ({
    type: userActionTypes.GET_USER_PROFILE,
    email,
    accessToken,
  }),
};
