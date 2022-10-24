import Post from "src/domain/post/Post";

export interface PostSliceState {
  isLoading: boolean;
  items: Post[];
}
