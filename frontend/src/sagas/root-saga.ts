import { all } from "redux-saga/effects";
import { authSaga } from "./auth-sagas";
import { userSaga } from "./user-sagas";

export default function* rootSaga() {
  yield all([authSaga(), userSaga()]);
}
