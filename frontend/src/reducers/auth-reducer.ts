const initialState = {
  currentUser: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        currentUser: action.currentUser,
      };
    case "LOGIN_SUCCESS":
      return {
        currentUser: action.currentUser,
      };
    case "GET_CURRENT_USER_SUCCESS":
        return {
          currentUser: action.currentUser,
        };
    case "CHANGE_PASSWORD_SUCCESS":
      return {
        ...state
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};
export default authReducer;
