import {
  IPostRepository,
  IPostRepositoryToken,
} from "src/post/domain/specifications/IPostRepository";
import GetPostsPayload from "src/post/application/types/GetPostsPayload";
import { injectable, provided } from "inversify-sugar";
import { UseCase } from "src/core/application/UseCase";
import GetPostsResponse from "../types/GetPostsResponse";

@injectable()
export default class GetPostsUseCase
  implements UseCase<GetPostsPayload, Promise<GetPostsResponse>>
{
  constructor(
    @provided(IPostRepositoryToken)
    private readonly postRepository: IPostRepository
  ) {}

  public execute(data: GetPostsPayload) {
    return this.postRepository.get(data);
  }
}
