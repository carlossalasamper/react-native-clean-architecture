import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "../modules/post/store/postSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
