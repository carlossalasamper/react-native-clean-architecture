import PostEntity from "src/post/domain/entities/PostEntity";

export default interface GetPostsResponse {
  results: PostEntity[];
  count: number;
}
