import { existingUser, newUser } from "../types/user";

export const authActionTypes = {
  SIGNUP: "SIGNUP",
  SIGNUP_ERROR: "SIGNUP_ERROR",
  SIGNUP_SUCCESS: "SIGNUP_SUCCESS",
  GET_CURRENT_USER_SUCCESS: "GET_CURRENT_USER_SUCCESS",
  UI_SIGNUP_SUCCESS: "UI_SIGNUP_SUCCESS",
  LEAVE_SIGNUP: "LEAVE_SIGNUP",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  UI_LOGIN_SUCCESS: "UI_LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGIN: "LOGIN",
  OPEN_AUTH_MODAL: "OPEN_AUTH_MODAL",
  CLOSE_AUTH_MODAL: "CLOSE_AUTH_MODAL",
  OPEN_HELLO_MENU: "OPEN_HELLO_MENU",
  CLOSE_HELLO_MENU: "CLOSE_HELLO_MENU",
  LOGOUT: "LOGOUT",
  SWITCH_TO_SIGNUP: "SWITCH_TO_SIGNUP",
  SWITCH_TO_LOGIN: "SWITCH_TO_LOGIN",
  CHANGE_PASSWORD: "CHANGE_PASSWORD",
  CHANGE_PASSWORD_ERROR: "CHANGE_PASSWORD_ERROR",
  CHANGE_PASSWORD_SUCCESS: "CHANGE_PASSWORD_SUCCESS",
};

export const authActions = {
  signup: (user: newUser) => ({
    type: authActionTypes.SIGNUP,
    user,
  }),
  login: (user: any) => ({
    type: authActionTypes.LOGIN,
    user,
  }),
  changePassword: (
    email: string,
    accessToken: string,
    previousPassword: string,
    newPassword: string,
    confirmPassword: string
  ) => ({
    type: authActionTypes.CHANGE_PASSWORD,
    email,
    accessToken,
    previousPassword,
    newPassword,
    confirmPassword,
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

  openHelloMenu: (e: any) => ({
    type: authActionTypes.OPEN_HELLO_MENU,
    e,
  }),
  closeHelloMenu: () => ({
    type: authActionTypes.CLOSE_HELLO_MENU,
  }),
  logout: () => ({
    type: authActionTypes.LOGOUT,
  }),
  switchToSignup: () => ({
    type: authActionTypes.SWITCH_TO_SIGNUP,
  }),
  switchToLogin: () => ({
    type: authActionTypes.SWITCH_TO_LOGIN,
  }),
};
