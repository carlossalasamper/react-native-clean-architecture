import GetPostsPayload from "src/post/application/types/GetPostsPayload";
import axios from "axios";
import { injectable, provided } from "inversify-sugar";
import { IPostRepository } from "../../domain/specifications/IPostRepository";
import GetPostsResponse from "src/post/application/types/GetPostsResponse";
import PostDto from "../models/PostDto";
import { plainToInstance } from "class-transformer";
import IHttpClient, {
  IHttpClientToken,
} from "src/core/domain/specifications/IHttpClient";

@injectable()
class PostRepository implements IPostRepository {
  private readonly baseUrl = "/posts";

  constructor(
    @provided(IHttpClientToken) private readonly httpClient: IHttpClient
  ) {}

  public async find(id: number) {
    const response = await this.httpClient.get(`${this.baseUrl}/${id}`);
    const responseDto = plainToInstance(PostDto, response);

    return responseDto.toDomain();
  }

  public async get({}: GetPostsPayload): Promise<GetPostsResponse> {
    const posts = (await axios.get<unknown[]>(this.baseUrl)).data;
    const response: GetPostsResponse = {
      results: posts.map((post) => plainToInstance(PostDto, post).toDomain()),
      count: posts.length,
    };

    return response;
  }
}

export default PostRepository;
