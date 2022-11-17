import "expo-dev-client";

import { registerRootComponent } from "expo";
import { createElement } from "react";
import { Provider } from "react-redux";

import "./src/AppContainer";
import App from "./src/ui/App";
import store from "./src/ui/store";

registerRootComponent(() =>
  createElement(Provider, { store }, createElement(App))
);
