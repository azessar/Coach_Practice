const initialState = {
  userProfile: null,
  responseMessage: null,
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_USER_PROFILE_SUCCESS":
      return {
        ...state,
        userProfile: action.userProfile,
      };
    case "GET_USER_PROFILE_ERROR":
      return {
        ...state,
        responseMessage: action.responseMessage,
      };

    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};
export default userReducer;
