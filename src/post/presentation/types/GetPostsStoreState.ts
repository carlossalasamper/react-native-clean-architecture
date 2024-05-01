import ListState from "src/core/presentation/types/ListState";
import PostEntity from "src/post/domain/entities/PostEntity";

type GetPostsStoreState = ListState<PostEntity>;

export default GetPostsStoreState;
