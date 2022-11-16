const initialState = {
  loading: false,
  responseMessage: null,
  authMessage: "",
  authModalOpen: false,
  editProfileModalOpen: false,
  editContactModalOpen: false,
  editExperienceModalOpen: false,
  deleteExperienceModalOpen: false,
  addExperienceModalOpen: false,
  helloMenuOpen: false,
  helloMenuAnchor: null,
  loginMode: true,
};

const uiReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SIGNUP":
      return {
        ...state,
        authMessage: "",
        isError: false,
        loading: true,
      };
    case "LOGIN":
      return {
        ...state,
        authMessage: "",
        isError: false,
        loading: true,
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        authMessage: action.signupMessage,
        isError: true,
        loading: false,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        authMessage: action.authMessage,
        isError: true,
        loading: false,
      };
    case "UI_SIGNUP_SUCCESS":
      return {
        ...state,
        authMessage: action.signupMessage,
        isError: false,
        isSignupSuccess: true,
        loading: false,
        authModalOpen: false,
      };
    case "UI_LOGIN_SUCCESS":
      return {
        ...state,
        authMessage: action.loginMessage,
        isError: false,
        isLoginSuccess: true,
        loading: false,
        authModalOpen: false,
      };
    case "LEAVE_SIGNUP":
      return {
        ...state,
        authMessage: "",
        isError: false,
      };
    case "SWITCH_TO_SIGNUP":
      return {
        ...state,
        loginMode: false,
      };
    case "SWITCH_TO_LOGIN":
      return {
        ...state,
        loginMode: true,
      };
    case "LOGOUT":
      return initialState;
    case "OPEN_AUTH_MODAL":
      return {
        ...state,
        authModalOpen: true,
      };
    case "CLOSE_AUTH_MODAL":
      return {
        ...state,
        authModalOpen: false,
      };
    case "OPEN_HELLO_MENU":
      return {
        ...state,
        helloMenuOpen: true,
        helloMenuAnchor: action.e.currentTarget,
      };
    case "CLOSE_HELLO_MENU":
      return {
        ...state,
        helloMenuOpen: false,
        helloMenuAnchor: null,
      };
    case "OPEN_EDIT_PROFILE_MODAL":
      return {
        ...state,
        editProfileModalOpen: true,
      };
    case "CLOSE_EDIT_PROFILE_MODAL":
      return {
        ...state,
        editProfileModalOpen: false,
      };
    case "OPEN_EDIT_CONTACT_MODAL":
      return {
        ...state,
        editContactModalOpen: true,
      };
    case "CLOSE_EDIT_CONTACT_MODAL":
      return {
        ...state,
        editContactModalOpen: false,
      };
    case "OPEN_EDIT_EXPERIENCE_MODAL":
      return {
        ...state,
        editExperienceModalOpen: true,
      };
    case "CLOSE_EDIT_EXPERIENCE_MODAL":
      return {
        ...state,
        editExperienceModalOpen: false,
      };
    case "OPEN_DELETE_EXPERIENCE_MODAL":
      return {
        ...state,
        deleteExperienceModalOpen: true,
      };
    case "CLOSE_DELETE_EXPERIENCE_MODAL":
      return {
        ...state,
        deleteExperienceModalOpen: false,
      };
    case "OPEN_ADD_EXPERIENCE_MODAL":
      return {
        ...state,
        addExperienceModalOpen: true,
      };
    case "CLOSE_ADD_EXPERIENCE_MODAL":
      return {
        ...state,
        addExperienceModalOpen: false,
      };

    case "EDIT_PROFILE_BLURB":
      return {
        ...state,
        loading: true,
      };
    case "EDIT_PROFILE_CONTACT":
      return {
        ...state,
        loading: true,
      };
    case "EDIT_PROFILE_BLURB_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "EDIT_PROFILE_BLURB_ERROR":
      return {
        ...state,
        loading: false,
      };
    case "EDIT_PROFILE_CONTACT_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "EDIT_PROFILE_CONTACT_ERROR":
      return {
        ...state,
        loading: false,
      };
    case "EDIT_EXPERIENCE":
      return {
        ...state,
        loading: true,
      };
    case "EDIT_EXPERIENCE_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "EDIT_EXPERIENCE_ERROR":
      return {
        ...state,
        loading: false,
      };
    case "EDIT_ACCOUNT":
      return {
        ...state,
        loading: true,
      };
    case "EDIT_ACCOUNT_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "EDIT_ACCOUNT_ERROR":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default uiReducer;
