const initialState = {
  authMessage: "",
  isError: false,
  isLoginSuccess: false,
  isSignupSuccess: false,
  currentUser: null,
  loading: false,
};

const authReducer = (state = initialState, action: any) => {
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
        authMessage: action.loginMessage,
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
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authMessage: action.loginMessage,
        isError: false,
        isLoginSuccess: true,
        currentUser: action.currentUser,
        loading: false,
      };
    case "LEAVE_SIGNUP":
      return {
        ...state,
        authMessage: "",
        isError: false,
      };
    default:
      return state;
  }
};
export default authReducer;
