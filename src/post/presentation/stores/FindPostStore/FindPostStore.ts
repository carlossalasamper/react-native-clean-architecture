import { inject, injectable } from "inversiland";
import { makeAutoObservable } from "mobx";
import FindPostStoreState from "../../types/FindPostStoreState";
import PostEntity from "src/post/domain/entities/PostEntity";
import FindPostUseCase from "src/post/application/useCases/FindPostUseCase";

@injectable()
export class FindPostStore implements FindPostStoreState {
  isLoading = false;
  post: PostEntity | null = null;

  constructor(
    @inject(FindPostUseCase)
    private findPostUseCase: FindPostUseCase
  ) {
    makeAutoObservable(this);
  }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setPost(post: PostEntity | null) {
    this.post = post;
  }

  async findPost(id: number) {
    try {
      this.setIsLoading(true);
      this.setPost(await this.findPostUseCase.execute(id));
    } catch (error) {
    } finally {
      this.setIsLoading(false);
    }
  }
}
