import "expo-dev-client";
import { registerRootComponent } from "expo";
import { Inversiland } from "inversiland";
import AppModule from "./src/AppModule";
import App from "./src/core/presentation/App";

(() => {
  Inversiland.options.defaultScope = "Singleton";
  Inversiland.run(AppModule);

  registerRootComponent(App);
})();
