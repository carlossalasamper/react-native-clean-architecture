import { ExpoConfig } from "@expo/config-types";
import packageJson from "./package.json";

const appConfig: ExpoConfig = {
  name: "react-native-clean-architecture",
  slug: "react-native-clean-architecture",
  scheme: "rnca",
  version: packageJson.version,
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
  plugins: [
    [
      "expo-build-properties",
      {
        ios: {
          deploymentTarget: "15.1",
          useFrameworks: "static",
        },
      },
    ],
    "expo-localization",
    "expo-tracking-transparency",
  ],
};

export default appConfig;
