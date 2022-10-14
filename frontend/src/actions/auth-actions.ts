import { existingUser, newUser } from "../types/user";

export const authActionTypes = {
  SIGNUP: "SIGNUP",
  SIGNUP_ERROR: "SIGNUP_ERROR",
  SIGNUP_SUCCESS: "SIGNUP_SUCCESS",
  LEAVE_SIGNUP: "LEAVE_SIGNUP",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGIN: "LOGIN",
  OPEN_AUTH_MODAL: "OPEN_AUTH_MODAL",
  CLOSE_AUTH_MODAL: "CLOSE_AUTH_MODAL",
};

export const authActions = {
  signup: (user: newUser) => ({
    type: authActionTypes.SIGNUP,
    user,
  }),
  login: (user: existingUser) => ({
    type: authActionTypes.LOGIN,
    user,
  }),
  leaveSignup: () => ({
    type: authActionTypes.LEAVE_SIGNUP,
  }),
  signupError: (error: any) => ({
    type: authActionTypes.SIGNUP_ERROR,
    error,
  }),
  openAuthModal: () => ({
    type: authActionTypes.OPEN_AUTH_MODAL,
  }),
  closeAuthModal: () => ({
    type: authActionTypes.CLOSE_AUTH_MODAL,
  }),
};
