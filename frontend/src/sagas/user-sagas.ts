import { userActionTypes } from "../actions/user-actions";
import { existingUser, newUser } from "../types/user";
import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import { API_URL } from "../constants";

const GET_USER_PROFILE = userActionTypes.GET_USER_PROFILE;
const GET_USER_PROFILE_SUCCESS = userActionTypes.GET_USER_PROFILE_SUCCESS;
const GET_USER_PROFILE_ERROR = userActionTypes.GET_USER_PROFILE_ERROR;

export const getUserProfileAPI = (email: string, accessToken: string) => {
  return axios.post(
    `${API_URL}/api/user-profile`,
    {
      email: email,
    },
    {
      headers: {
        authorization: accessToken,
      },
    }
  );
};

function* getUserProfile(action: any): any {
  try {
    const response = yield call(
      getUserProfileAPI,
      action.email,
      action.accessToken
    );
    if (response) {
      console.log(response);
      yield put({
        type: GET_USER_PROFILE_SUCCESS,
        responseMessage: response.data.message,
        userProfile: response.data,
      });
    }
  } catch (err: any) {
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
    yield put({
      type: GET_USER_PROFILE_ERROR,
      responseMessage: err.response.data.message,
    });
  }
}

export function* userSaga() {
  yield takeLatest(GET_USER_PROFILE, getUserProfile);
}
