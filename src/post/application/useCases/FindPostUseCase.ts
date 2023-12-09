import { injectable, provided } from "inversify-sugar";
import {
  IPostRepository,
  IPostRepositoryToken,
} from "src/post/domain/specifications/IPostRepository";

@injectable()
export default class FindPostUseCase {
  constructor(
    @provided(IPostRepositoryToken)
    private readonly postRepository: IPostRepository
  ) {}

  public execute(id: number) {
    return this.postRepository.find(id);
  }
}
