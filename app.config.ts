import { ExpoConfig } from "@expo/config-types";
import packageJson from "./package.json";

const appConfig: ExpoConfig = {
  name: "react-native-clean-architecture",
  slug: "react-native-clean-architecture",
  scheme: "rnca",
  version: packageJson.version,
  entryPoint: "./index.js",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "cover",
    backgroundColor: "#ffffff",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
  },
  android: {
    package: "com.carlossalasamper.reactnativecleanarchitecture",
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#FFFFFF",
    },
  },
  web: {
    favicon: "./assets/images/favicon.png",
  },
  extra: {
    EXPO_BASE_API_URL: "https://jsonplaceholder.typicode.com",
  },
};

export default appConfig;
