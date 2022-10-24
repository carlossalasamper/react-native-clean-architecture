import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { container } from "reactject";
import Post from "src/domain/post/Post";
import GetPostsUseCase from "src/application/post/GetPostsUseCase";
import FindPostUseCase from "src/application/post/FindPostUseCase";
import { PostSliceState } from "../types";
import { RootState } from "../../../store";

const initialState: PostSliceState = {
  isLoading: false,
  items: [],
};

export const getPostsThunk = createAsyncThunk<
  { items: Post[] },
  void,
  { state: RootState }
>("post/get", async () => {
  const useCase = container.resolve(GetPostsUseCase);
  const items = await useCase.execute({ offset: 0, limit: 0 });

  return {
    items,
  };
});

export const findPostThunk = createAsyncThunk<
  Post,
  number,
  { state: RootState }
>("post/find", async (id) => {
  const useCase = container.resolve(FindPostUseCase);
  return await useCase.execute(id);
});

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPostsThunk.rejected, (state, action) => {
      console.error(action.error.message || "unknown error");
    });
  },
});

export const postSelectors = {};

export const postActions = postSlice.actions;

export const postThunks = {
  getPostsThunk,
  findPostThunk,
};

export const postReducer = postSlice.reducer;
