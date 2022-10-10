import { newUser } from "../types/user";

export const authActionTypes = {
  SIGNUP: "SIGNUP",
  SIGNUP_ERROR: "SIGNUP_ERROR",
  SIGNUP_SUCCESS: "SIGNUP_SUCCESS",
  LEAVE_SIGNUP: "LEAVE_SIGNUP",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGIN: "LOGIN",
};

export const authActions = {
  signup: (user: newUser) => ({
    type: authActionTypes.SIGNUP,
    user,
  }),
  leaveSignup: () => ({
    type: authActionTypes.LEAVE_SIGNUP,
  }),
  signupError: (error: any) => ({
    type: authActionTypes.SIGNUP_ERROR,
    error,
  }),
};
