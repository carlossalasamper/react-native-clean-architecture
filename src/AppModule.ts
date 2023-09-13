import { module } from "inversify-sugar";
import { PostModule } from "./post/PostModule";
import { CoreModule } from "./core/CoreModule";

@module({
  imports: [CoreModule, PostModule],
})
export default class AppModule {}
