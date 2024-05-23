import GetPostsData from 'src/post/domain/GetPostsData';
import axios from 'axios';
import {injectable} from 'inversify-sugar';
import {IPostRepository} from '../domain/IPostRepository';
import Post from '../domain/Post';

@injectable()
class PostRepository implements IPostRepository {
  public async find(id: number) {
    return (
      await axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    ).data;
  }

  public async get({}: GetPostsData): Promise<Post[]> {
    return (
      await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    ).data;
  }
}

export default PostRepository;
