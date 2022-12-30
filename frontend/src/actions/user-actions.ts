import { existingUser, job, newUser } from "../types/user";

export const userActionTypes = {
  GET_USER_PROFILE: "GET_USER_PROFILE",
  GET_USER_PROFILE_SUCCESS: "GET_USER_PROFILE_SUCCESS",
  GET_USER_PROFILE_ERROR: "GET_USER_PROFILE_ERROR",
  GET_COACHES: "GET_COACHES",
  GET_COACHES_SUCCESS: "GET_COACHES_SUCCESS",
  GET_COACHES_ERROR: "GET_USER_PROFILE_ERROR",
  OPEN_EDIT_PROFILE_MODAL: "OPEN_EDIT_PROFILE_MODAL",
  CLOSE_EDIT_PROFILE_MODAL: "CLOSE_EDIT_PROFILE_MODAL",
  OPEN_EDIT_CONTACT_MODAL: "OPEN_EDIT_CONTACT_MODAL",
  CLOSE_EDIT_CONTACT_MODAL: "CLOSE_EDIT_CONTACT_MODAL",
  OPEN_EDIT_EXPERIENCE_MODAL: "OPEN_EDIT_EXPERIENCE_MODAL",
  CLOSE_EDIT_EXPERIENCE_MODAL: "CLOSE_EDIT_EXPERIENCE_MODAL",
  OPEN_DELETE_EXPERIENCE_MODAL: "OPEN_DELETE_EXPERIENCE_MODAL",
  CLOSE_DELETE_EXPERIENCE_MODAL: "CLOSE_DELETE_EXPERIENCE_MODAL",
  OPEN_ADD_EXPERIENCE_MODAL: "OPEN_ADD_EXPERIENCE_MODAL",
  CLOSE_ADD_EXPERIENCE_MODAL: "CLOSE_ADD_EXPERIENCE_MODAL",
  OPEN_EDIT_ACCOUNT_MODAL: "OPEN_EDIT_ACCOUNT_MODAL",
  CLOSE_EDIT_ACCOUNT_MODAL: "CLOSE_EDIT_ACCOUNT_MODAL",
  EDIT_PROFILE_BLURB: "EDIT_PROFILE_BLURB",
  EDIT_PROFILE_CONTACT: "EDIT_PROFILE_CONTACT",
  EDIT_PROFILE_BLURB_SUCCESS: "EDIT_PROFILE_BLURB_SUCCESS",
  EDIT_PROFILE_BLURB_ERROR: "EDIT_PROFILE_BLURB_ERROR",
  EDIT_PROFILE_CONTACT_SUCCESS: "EDIT_PROFILE_CONTACT_SUCCESS",
  EDIT_PROFILE_CONTACT_ERROR: "EDIT_PROFILE_CONTACT_ERROR",
  EDIT_EXPERIENCE: "EDIT_EXPERIENCE",
  EDIT_EXPERIENCE_SUCCESS: "EDIT_EXPERIENCE_SUCCESS",
  EDIT_EXPERIENCE_ERROR: "EDIT_EXPERIENCE_ERROR",
  EDIT_ACCOUNT: "EDIT_ACCOUNT",
  EDIT_ACCOUNT_SUCCESS: "EDIT_ACCOUNT_SUCCESS",
  EDIT_ACCOUNT_ERROR: "EDIT_ACCOUNT_ERROR",
  COACH_SELECTED: 'COACH_SELECTED',
  GET_COACH_PROFILE: 'GET_COACH_PROFILE',
  GET_COACH_PROFILE_SUCCESS: 'GET_COACH_PROFILE_SUCCESS',
  GET_COACH_PROFILE_ERROR: 'GET_COACH_PROFILE_ERROR',

};

export const userActions = {
  getCoachProfile: (id: number) => ({
    type: userActionTypes.GET_COACH_PROFILE,
    id,
  }),
  getUserProfile: (id: number) => ({
    type: userActionTypes.GET_USER_PROFILE,
    id,
  }),
  getCoaches: (name: string, city: string, sport: string) => ({
    type: userActionTypes.GET_COACHES,
    name,
    city,
    sport,
  }),
  openEditProfileModal: () => ({
    type: userActionTypes.OPEN_EDIT_PROFILE_MODAL,
  }),
  closeEditProfileModal: () => ({
    type: userActionTypes.CLOSE_EDIT_PROFILE_MODAL,
  }),
  openEditContactModal: () => ({
    type: userActionTypes.OPEN_EDIT_CONTACT_MODAL,
  }),
  closeEditContactModal: () => ({
    type: userActionTypes.CLOSE_EDIT_CONTACT_MODAL,
  }),
  openEditExperienceModal: () => ({
    type: userActionTypes.OPEN_EDIT_EXPERIENCE_MODAL,
  }),
  closeEditExperienceModal: () => ({
    type: userActionTypes.CLOSE_EDIT_EXPERIENCE_MODAL,
  }),
  openDeleteExperienceModal: () => ({
    type: userActionTypes.OPEN_DELETE_EXPERIENCE_MODAL,
  }),
  closeDeleteExperienceModal: () => ({
    type: userActionTypes.CLOSE_DELETE_EXPERIENCE_MODAL,
  }),
  openAddExperienceModal: () => ({
    type: userActionTypes.OPEN_ADD_EXPERIENCE_MODAL,
  }),
  closeAddExperienceModal: () => ({
    type: userActionTypes.CLOSE_ADD_EXPERIENCE_MODAL,
  }),
  openEditAccountModal: () => ({
    type: userActionTypes.OPEN_EDIT_ACCOUNT_MODAL,
  }),
  closeEditAccountModal: () => ({
    type: userActionTypes.CLOSE_EDIT_ACCOUNT_MODAL,
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
  editProfileContact: (
    email: string,
    accessToken: string,
    newContacts: {
      instagram: string;
      twitter: string;
      personalSite: string;
      linkedIn: string;
    }
  ) => ({
    type: userActionTypes.EDIT_PROFILE_CONTACT,
    email,
    accessToken,
    newContacts,
  }),
  editExperience: (
    email: string,
    accessToken: string,
    experience: job[] | undefined
  ) => ({
    type: userActionTypes.EDIT_EXPERIENCE,
    email,
    accessToken,
    experience,
  }),
  editAccount: (
    id: number,
    email: string,
    accessToken: string,
    firstName: string,
    lastName: string,
    gender: string,
    city: string,
    sports: string[],
    password: string,
    previousEmail: string
  ) => ({
    type: userActionTypes.EDIT_ACCOUNT,
    id,
    email,
    firstName,
    lastName,
    gender,
    city,
    sports,
    accessToken,
    password,
    previousEmail,
  }),
  selectCoach: (
    id: number,
  ) => ({
    type: userActionTypes.COACH_SELECTED,
    id
  }),
};
