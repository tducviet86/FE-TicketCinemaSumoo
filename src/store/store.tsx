import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth/auth.slice";
import HomeSlice from "./Home/home.slice";
import { injectStore } from "../helpers/api";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    home:HomeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
injectStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;