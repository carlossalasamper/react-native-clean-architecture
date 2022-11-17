import { inject, injectable } from "reactject";
import {
  IPostRepository,
  IPostRepositoryToken,
} from "src/post/domain/IPostRepository";
import GetPostsData from "src/post/domain/GetPostsData";

@injectable()
export default class GetPostsUseCase {
  constructor(
    @inject(IPostRepositoryToken)
    private readonly postRepository: IPostRepository
  ) {}

  public execute(data: GetPostsData) {
    return this.postRepository.get(data);
  }
}
