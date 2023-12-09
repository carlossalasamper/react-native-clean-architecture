import "expo-dev-client";
import { registerRootComponent } from "expo";
import { InversifySugar } from "inversify-sugar";
import AppModule from "./src/AppModule";
import App from "./src/core/presentation/App";

(() => {
  InversifySugar.options.defaultScope = "Singleton";
  InversifySugar.run(AppModule);

  registerRootComponent(App);
})();
