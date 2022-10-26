/* Here ou can manually register dependencies
and modularize the container creating children containers */

import { container } from "reactject";
import { IPostRepositoryToken } from "src/domain/post/IPostRepository";
import PostRepository from "src/infrastructure/post/PostRepository";

container.registerSingleton(IPostRepositoryToken, PostRepository);
