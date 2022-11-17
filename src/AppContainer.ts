import "reflect-metadata";
import { module, Reactject, ReactjectModule } from "reactject";

@module()
class AppModule extends ReactjectModule {}

Reactject.start(AppModule);
