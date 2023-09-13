import "expo-dev-client";
import { registerRootComponent } from "expo";
import { createElement } from "react";
import { Provider } from "react-redux";
import { InversifySugar } from "inversify-sugar";

import AppModule from "./src/AppModule";
import App from "./src/core/presentation/App";
import store from "./src/core/presentation/store";

(() => {
  InversifySugar.options.defaultScope = "Singleton";
  InversifySugar.run(AppModule);

  registerRootComponent(() =>
    createElement(Provider, { store }, createElement(App))
  );
})();
