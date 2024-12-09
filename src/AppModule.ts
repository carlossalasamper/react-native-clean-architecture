import { module } from "inversiland";
import { PostModule } from "./post/PostModule";
import { CoreModule } from "./core/CoreModule";

@module({
  imports: [CoreModule, PostModule],
})
export default class AppModule {}
