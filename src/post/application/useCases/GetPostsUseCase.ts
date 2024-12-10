import {
  IPostRepository,
  IPostRepositoryToken,
} from "src/post/domain/specifications/IPostRepository";
import GetPostsPayload from "src/post/application/types/GetPostsPayload";
import { injectable, inject } from "inversiland";
import { UseCase } from "src/core/application/UseCase";
import GetPostsResponse from "../types/GetPostsResponse";

@injectable()
export default class GetPostsUseCase
  implements UseCase<GetPostsPayload, Promise<GetPostsResponse>>
{
  constructor(
    @inject(IPostRepositoryToken)
    private readonly postRepository: IPostRepository
  ) {}

  public execute(payload: GetPostsPayload) {
    return this.postRepository.get(payload);
  }
}
