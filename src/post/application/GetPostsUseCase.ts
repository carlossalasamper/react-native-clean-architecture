import {
  IPostRepository,
  IPostRepositoryToken,
} from "src/post/domain/IPostRepository";
import GetPostsData from "src/post/domain/GetPostsData";
import { injectable, provided } from "inversify-sugar";

@injectable()
export default class GetPostsUseCase {
  constructor(
    @provided(IPostRepositoryToken)
    private readonly postRepository: IPostRepository
  ) {}

  public execute(data: GetPostsData) {
    return this.postRepository.get(data);
  }
}
