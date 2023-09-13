import Post from "../domain/Post";

export interface PostSliceState {
  isLoading: boolean;
  items: Post[];
  currentPost: Post | null;
}
