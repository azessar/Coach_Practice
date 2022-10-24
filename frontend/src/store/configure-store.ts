import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../reducers";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);

export { store, persistor, sagaMiddleware };
