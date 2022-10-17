const initialState = {
  authMessage: "",
  isError: false,
  isLoginSuccess: false,
  isSignupSuccess: false,
  currentUser: null,
  loading: false,
  authModalOpen: false,
  helloMenuOpen: false,
  helloMenuAnchor: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
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
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        authMessage: action.signupMessage,
        isError: false,
        isSignupSuccess: true,
        currentUser: action.currentUser,
        loading: false,
        authModalOpen: false,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authMessage: action.loginMessage,
        isError: false,
        isLoginSuccess: true,
        currentUser: action.currentUser,
        loading: false,
        authModalOpen: false,
      };
    case "LEAVE_SIGNUP":
      return {
        ...state,
        authMessage: "",
        isError: false,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};
export default authReducer;
