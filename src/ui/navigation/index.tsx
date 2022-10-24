import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import LinkingConfiguration from "./LinkingConfiguration";
import RootNavigator from "./RootNavigator";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}
