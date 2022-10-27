import { authActionTypes } from "../actions/auth-actions";
import { existingUser, newUser } from "../types/user";
import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import { API_URL } from "../constants";

const SIGNUP = authActionTypes.SIGNUP;
const SIGNUP_ERROR = authActionTypes.SIGNUP_ERROR;
const SIGNUP_SUCCESS = authActionTypes.SIGNUP_SUCCESS;
const UI_SIGNUP_SUCCESS = authActionTypes.UI_SIGNUP_SUCCESS;
const LOGIN = authActionTypes.LOGIN;
const LOGIN_SUCCESS = authActionTypes.LOGIN_SUCCESS;
const UI_LOGIN_SUCCESS = authActionTypes.UI_LOGIN_SUCCESS;
const LOGIN_ERROR = authActionTypes.LOGIN_ERROR;

export const signupAPI = (user: newUser) => {
  return axios.post(`${API_URL}/api/auth/signup`, {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    zipCode: user.zipCode,
    password: user.password,
    confirmPassword: user.confirmPassword,
  });
};

export const loginAPI = (user: existingUser) => {
  return axios.post(
    `${API_URL}/api/auth/login`,
    {
      email: user.email,
      password: user.password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

function* signup(action: any): any {
  try {
    const response = yield call(signupAPI, action.user);
    if (response) {
      console.log(response);
      yield put({
        type: SIGNUP_SUCCESS,
        currentUser: response.data,
      });
      yield put({
        type: UI_SIGNUP_SUCCESS,
        isError: false,
        isSignupSuccess: true,
        loading: false,
        authModalOpen: false,
      });
    }
  } catch (err: any) {
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
    yield put({
      type: SIGNUP_ERROR,
      signupMessage: err.response.data.message,
    });
  }
}

function* login(action: any): any {
  try {
    const response = yield call(loginAPI, action.user);
    if (response) {
      console.log(response);
      yield put({
        type: LOGIN_SUCCESS,
        currentUser: response.data,
      });
      yield put({
        type: UI_LOGIN_SUCCESS,
        authMessage: action.loginMessage,
        isError: false,
        isLoginSuccess: true,
        loading: false,
        authModalOpen: false,
      });
    }
  } catch (err: any) {
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
    yield put({
      type: LOGIN_ERROR,
      authMessage: err.response.data.message,
    });
  }
}

export function* authSaga() {
  yield takeLatest(SIGNUP, signup);
  yield takeLatest(LOGIN, login);
}
