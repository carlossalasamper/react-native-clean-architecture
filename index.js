import "reflect-metadata";
import "expo-dev-client";
import { registerRootComponent } from "expo";
import { createElement } from "react";
import { Provider } from "react-redux";
import { Reactject } from "reactject";

import AppModule from "./src/AppModule";
import App from "./src/ui/App";
import store from "./src/ui/store";

(() => {
  Reactject.start(AppModule);

  registerRootComponent(() =>
    createElement(Provider, { store }, createElement(App))
  );
})();
