import { inject } from "reactject";
import {
  IPostRepository,
  IPostRepositoryToken,
} from "src/domain/post/IPostRepository";

export default class FindPostUseCase {
  constructor(
    @inject(IPostRepositoryToken) private postRepository: IPostRepository
  ) {}

  public execute(id: number) {
    return this.postRepository.find(id);
  }
}
