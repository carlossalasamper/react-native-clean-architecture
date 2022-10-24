import { inject } from "reactject";
import {
  IPostRepository,
  IPostRepositoryToken,
} from "src/domain/post/IPostRepository";
import GetPostsData from "src/domain/post/GetPostsData";

export default class GetPostsUseCase {
  constructor(
    @inject(IPostRepositoryToken) private postRepository: IPostRepository
  ) {}

  public execute(data: GetPostsData) {
    return this.postRepository.get(data);
  }
}
