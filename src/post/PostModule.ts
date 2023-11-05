import {getModuleContainer, module} from 'inversify-sugar';
import FindPostUseCase from './application/FindPostUseCase';
import GetPostsUseCase from './application/GetPostsUseCase';
import {IPostRepositoryToken} from './domain/IPostRepository';
import PostRepository from './infrastructure/PostRepository';

@module({
  providers: [
    {
      provide: IPostRepositoryToken,
      useClass: PostRepository,
    },
    FindPostUseCase,
    GetPostsUseCase,
  ],
})
export class PostModule {}

export const postModuleContainer = getModuleContainer(PostModule);
