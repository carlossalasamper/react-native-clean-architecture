module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "babel-plugin-transform-typescript-metadata",
      'react-native-reanimated/plugin',
      [
        "module-resolver",
        {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
          root: [".", './src'],
          alias: {
            src: './src',
            common: './src/common',
            components: './src/components',
            core: './src/core',
            hooks: './src/hooks',
            manager: './src/manager',
            post: './src/post',
            screens: './src/screens',
            service: './src/service',
            store: './src/store',
            utils: './src/utils'
          }
        },
      ],
    ],
  };
};
