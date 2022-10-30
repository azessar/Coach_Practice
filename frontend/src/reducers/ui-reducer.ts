const initialState = {
  loading: false,
  responseMessage: null,
  authMessage: "",
  authModalOpen: false,
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
    default:
      return state;
  }
};
export default uiReducer;