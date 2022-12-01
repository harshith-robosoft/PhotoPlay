import { combineReducers, configureStore } from "@reduxjs/toolkit";

// import PhotoReducer from "./Photo/PhotoSlice";
import ReducerPhoto from './PhotoSlice'
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  Photos: ReducerPhoto,
});
const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
