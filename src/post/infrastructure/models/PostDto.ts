import { Expose } from "class-transformer";
import ResponseDto from "src/core/infrastructure/models/ResponseDto";
import PostEntity from "src/post/domain/entities/PostEntity";

export default class PostDto extends ResponseDto<PostEntity> {
  @Expose()
  id!: number;

  @Expose()
  userId!: number;

  @Expose()
  title!: string;

  @Expose()
  body!: string;

  toDomain() {
    return {
      id: this.id,
      userId: this.userId,
      title: this.title,
      body: this.body,
    };
  }
}
