import { injectable } from "reactject";
import GetPostsData from "src/post/domain/GetPostsData";
import Post from "src/post/domain/post/Post";
import { IPostRepository } from "src/post/domain/post/IPostRepository";
import axios from "axios";

@injectable()
class PostRepository implements IPostRepository {
  public async find(id: number) {
    return (
      await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    ).data;
  }

  public async get({}: GetPostsData): Promise<Post[]> {
    return (
      await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
    ).data;
  }
}

export default PostRepository;
