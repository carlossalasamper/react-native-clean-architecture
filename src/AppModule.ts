import { module, ReactjectModule } from "reactject";
import { PostModule } from "./post/PostModule";

@module({
  submodules: [PostModule],
})
export default class AppModule extends ReactjectModule {}
