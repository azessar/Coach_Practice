import { combineReducers } from "redux";
import authReducer from "./auth-reducer";
import uiReducer from "./ui-reducer";
import userReducer from "./user-reducer";

export const rootReducer = combineReducers({
  authReducer,
  userReducer,
  uiReducer,
});
