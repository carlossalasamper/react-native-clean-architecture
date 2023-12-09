import PostEntity from "src/post/domain/entities/PostEntity";

export default interface FindPostStoreState {
  isLoading: boolean;
  post: PostEntity | null;
}
