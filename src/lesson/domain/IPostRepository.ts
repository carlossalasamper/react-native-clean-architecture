import Post from './Post';
import GetPostsData from './GetPostsData';

export const IPostRepositoryToken = Symbol();

export interface IPostRepository {
  find: (id: number) => Promise<Post>;
  get: (data: GetPostsData) => Promise<Post[]>;
}
