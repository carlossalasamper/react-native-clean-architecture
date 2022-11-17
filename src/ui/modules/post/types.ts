import Post from "src/post/domain/post/Post";

export interface PostSliceState {
  isLoading: boolean;
  items: Post[];
}
