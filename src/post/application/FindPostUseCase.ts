import { inject, injectable } from "reactject";
import {
  IPostRepository,
  IPostRepositoryToken,
} from "src/post/domain/IPostRepository";

@injectable()
export default class FindPostUseCase {
  constructor(
    @inject(IPostRepositoryToken)
    private readonly postRepository: IPostRepository
  ) {}

  public execute(id: number) {
    return this.postRepository.find(id);
  }
}
