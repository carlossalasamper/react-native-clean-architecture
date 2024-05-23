import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Post from 'src/post/domain/Post';
import GetPostsUseCase from 'src/post/application/GetPostsUseCase';
import FindPostUseCase from 'src/post/application/FindPostUseCase';
import {PostSliceState} from '../types';
import {RootState} from 'src/core/presentation/store';
import {postModuleContainer} from 'src/post/PostModule';

const initialState: PostSliceState = {
  isLoading: false,
  items: [],
  currentPost: null,
};

export const getPostsThunk = createAsyncThunk<
  {items: Post[]},
  void,
  {state: RootState}
>('post/get', async () => {
  const useCase = postModuleContainer.getProvided(GetPostsUseCase);
  const items = await useCase.execute({offset: 0, limit: 0});

  return {
    items,
  };
});

export const findPostThunk = createAsyncThunk<Post, number, {state: RootState}>(
  'post/find',
  async id => {
    const useCase = postModuleContainer.getProvided(FindPostUseCase);
    return await useCase.execute(id);
  },
);

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getPostsThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getPostsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload.items;
    });
    builder.addCase(getPostsThunk.rejected, (state, action) => {
      state.isLoading = false;
      console.error(action.error.message || 'unknown error');
    });
    builder.addCase(findPostThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(findPostThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentPost = action.payload;
    });
    builder.addCase(findPostThunk.rejected, (state, action) => {
      state.isLoading = false;
      console.error(action.error.message || 'unknown error');
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
