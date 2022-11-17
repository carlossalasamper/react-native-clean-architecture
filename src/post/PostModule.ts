import { DependencyContainer, module, ReactjectModule } from "reactject";
import FindPostUseCase from "./application/FindPostUseCase";
import GetPostsUseCase from "./application/GetPostsUseCase";
import { IPostRepositoryToken } from "./domain/IPostRepository";
import PostRepository from "./infrastructure/PostRepository";

@module()
export class PostModule extends ReactjectModule {
  register(container: DependencyContainer) {
    super.register(container);

    container.registerSingleton(IPostRepositoryToken, PostRepository);

    container.registerSingleton(FindPostUseCase);
    container.registerSingleton(GetPostsUseCase);
  }
}
