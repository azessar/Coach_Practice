import { existingUser, job, newUser } from "../types/user";

export const userActionTypes = {
  GET_USER_PROFILE: "GET_USER_PROFILE",
  GET_USER_PROFILE_SUCCESS: "GET_USER_PROFILE_SUCCESS",
  GET_USER_PROFILE_ERROR: "GET_USER_PROFILE_ERROR",
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
  EDIT_PROFILE_BLURB: "EDIT_PROFILE_BLURB",
  EDIT_PROFILE_CONTACT: "EDIT_PROFILE_CONTACT",
  EDIT_PROFILE_BLURB_SUCCESS: "EDIT_PROFILE_BLURB_SUCCESS",
  EDIT_PROFILE_BLURB_ERROR: "EDIT_PROFILE_BLURB_ERROR",
  EDIT_PROFILE_CONTACT_SUCCESS: "EDIT_PROFILE_CONTACT_SUCCESS",
  EDIT_PROFILE_CONTACT_ERROR: "EDIT_PROFILE_CONTACT_ERROR",
  EDIT_EXPERIENCE: "EDIT_EXPERIENCE",
  EDIT_EXPERIENCE_SUCCESS: "EDIT_EXPERIENCE_SUCCESS",
  EDIT_EXPERIENCE_ERROR: "EDIT_EXPERIENCE_ERROR",
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
    newContacts: { instagram: string; twitter: string; personalSite: string }
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
};
