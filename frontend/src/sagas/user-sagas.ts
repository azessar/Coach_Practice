import { userActionTypes } from "../actions/user-actions";
import { existingUser, job, newUser } from "../types/user";
import axios from "axios";
import { put, call, takeLatest } from "redux-saga/effects";
import { API_URL } from "../constants";
import { authActionTypes } from "../actions/auth-actions";

const GET_USER_PROFILE = userActionTypes.GET_USER_PROFILE;
const GET_USER_PROFILE_SUCCESS = userActionTypes.GET_USER_PROFILE_SUCCESS;
const GET_USER_PROFILE_ERROR = userActionTypes.GET_USER_PROFILE_ERROR;
const GET_COACHES = userActionTypes.GET_COACHES;
const GET_COACHES_SUCCESS = userActionTypes.GET_COACHES_SUCCESS;
const GET_COACHES_ERROR = userActionTypes.GET_COACHES_ERROR;
const EDIT_PROFILE_BLURB = userActionTypes.EDIT_PROFILE_BLURB;
const EDIT_PROFILE_BLURB_SUCCESS = userActionTypes.EDIT_PROFILE_BLURB_SUCCESS;
const EDIT_PROFILE_BLURB_ERROR = userActionTypes.EDIT_PROFILE_BLURB_ERROR;
const EDIT_EXPERIENCE = userActionTypes.EDIT_EXPERIENCE;
const EDIT_EXPERIENCE_SUCCESS = userActionTypes.EDIT_EXPERIENCE_SUCCESS;
const EDIT_EXPERIENCE_ERROR = userActionTypes.EDIT_EXPERIENCE_ERROR;
const EDIT_PROFILE_CONTACT = userActionTypes.EDIT_PROFILE_CONTACT;
const EDIT_PROFILE_CONTACT_SUCCESS =
  userActionTypes.EDIT_PROFILE_CONTACT_SUCCESS;
const EDIT_PROFILE_CONTACT_ERROR = userActionTypes.EDIT_PROFILE_CONTACT_ERROR;
const EDIT_ACCOUNT = userActionTypes.EDIT_ACCOUNT;
const EDIT_ACCOUNT_SUCCESS = userActionTypes.EDIT_ACCOUNT_SUCCESS;
const EDIT_ACCOUNT_ERROR = userActionTypes.EDIT_ACCOUNT_ERROR;

const LOGIN_SUCCESS = authActionTypes.LOGIN_SUCCESS;

export const getUserProfileAPI = (id: number) => {
  return axios.post(
    `${API_URL}/api/user-profile`,
    {
      id: id,
    },
    
  );
};

export const getCoachesAPI = (name: string, city: string, sport: string) => {
  return axios.post(`${API_URL}/api/search-coaches`, {
    name,
    city,
    sport,
  });
};

export const editProfileBlurbAPI = (
  email: string,
  accessToken: string,
  blurb: string
) => {
  return axios.put(
    `${API_URL}/api/user-profile-blurb`,
    {
      email,
      blurb,
    },
    {
      headers: {
        authorization: accessToken,
      },
    }
  );
};

export const editExperienceAPI = (
  email: string,
  accessToken: string,
  experience: job[]
) => {
  return axios.put(
    `${API_URL}/api/user-profile-experience`,
    {
      email,
      experience,
    },
    {
      headers: {
        authorization: accessToken,
      },
    }
  );
};

export const editContactsAPI = (
  email: string,
  accessToken: string,
  newContacts: {
    personalSite: string;
    twitter: string;
    instagram: string;
    linkedIn: string;
  }
) => {
  return axios.put(
    `${API_URL}/api/user-profile-contacts`,
    {
      email,
      newContacts,
    },
    {
      headers: {
        authorization: accessToken,
      },
    }
  );
};

export const editAccountAPI = (
  newEmail: string,
  accessToken: string,
  firstName: string,
  lastName: string,
  gender: string,
  city: string,
  sports: string[],
  password: string,
  previousEmail: string
) => {
  return axios.put(
    `${API_URL}/api/user-account`,
    {
      newEmail,
      firstName,
      lastName,
      gender,
      city,
      sports,
      password,
      previousEmail,
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
      action.id
    );
    if (response) {
      let tempUser = response.data;
      tempUser.sports = [response.data.firstSport, response.data.secondSport, response.data.thirdSport].filter(sport => sport != null)
      yield put({
        type: GET_USER_PROFILE_SUCCESS,
        responseMessage: response.data.message,
        userProfile: tempUser,
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

function* getCoaches(action: any): any {
  try {
    const response = yield call(
      getCoachesAPI,
      action.name,
      action.city,
      action.sport
    );
    if (response) {
      yield put({
        type: GET_COACHES_SUCCESS,
        responseMessage: response.data.message,
        coaches: response.data,
      });
    }
  } catch (err: any) {
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
    yield put({
      type: GET_COACHES_ERROR,
      responseMessage: err.response.data.message,
    });
  }
}

function* editProfileBlurb(action: any): any {
  try {
    const response = yield call(
      editProfileBlurbAPI,
      action.email,
      action.accessToken,
      action.blurb
    );
    if (response) {
      yield put({
        type: EDIT_PROFILE_BLURB_SUCCESS,
        responseMessage: response.data.message,
      });
    }
  } catch (err: any) {
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
    yield put({
      type: EDIT_PROFILE_BLURB_ERROR,
      responseMessage: err.response.data.message,
    });
  }
}

function* editExperience(action: any): any {
  try {
    const response = yield call(
      editExperienceAPI,
      action.email,
      action.accessToken,
      action.experience
    );
    if (response) {
      yield put({
        type: EDIT_EXPERIENCE_SUCCESS,
        responseMessage: response.data.message,
      });
    }
  } catch (err: any) {
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
    yield put({
      type: EDIT_EXPERIENCE_ERROR,
      responseMessage: err.response.data.message,
    });
  }
}

function* editContacts(action: any): any {
  try {
    const response = yield call(
      editContactsAPI,
      action.email,
      action.accessToken,
      action.newContacts
    );
    if (response) {
      yield put({
        type: EDIT_PROFILE_CONTACT_SUCCESS,
        responseMessage: response.data.message,
      });
    }
  } catch (err: any) {
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
    yield put({
      type: EDIT_PROFILE_CONTACT_ERROR,
      responseMessage: err.response.data.message,
    });
  }
}

function* editAccount(action: any): any {
  try {
    const response = yield call(
      editAccountAPI,
      action.email,
      action.accessToken,
      action.firstName,
      action.lastName,
      action.gender,
      action.city,
      action.sports,
      action.password,
      action.previousEmail
    );
    if (response) {
      yield put({
        type: LOGIN_SUCCESS,
        currentUser: response.data,
      });
      yield put({
        type: EDIT_ACCOUNT_SUCCESS,
        responseMessage: response.data.message,
      });
    }
  } catch (err: any) {
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
    yield put({
      type: EDIT_ACCOUNT_ERROR,
      responseMessage: err.response.data.message,
    });
  }
}

export function* userSaga() {
  yield takeLatest(GET_USER_PROFILE, getUserProfile);
  yield takeLatest(EDIT_PROFILE_BLURB, editProfileBlurb);
  yield takeLatest(EDIT_EXPERIENCE, editExperience);
  yield takeLatest(EDIT_PROFILE_CONTACT, editContacts);
  yield takeLatest(EDIT_ACCOUNT, editAccount);
  yield takeLatest(GET_COACHES, getCoaches);
}
