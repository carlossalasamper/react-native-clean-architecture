// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
// };
// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['module:metro-react-native-babel-preset'],
//     plugins: [
//       "babel-plugin-transform-typescript-metadata",
//       ["@babel/plugin-proposal-decorators", { "version": "2023-05" }],
//       "@babel/plugin-transform-class-static-block",
//       "@babel/plugin-transform-class-properties",
//       [
//         "module-resolver",
//         {
//           extensions: [".js", ".jsx", ".ts", ".tsx"],
//           root: ["."],
//         },
//       ],
//     ],
//   };
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      ["@babel/plugin-proposal-decorators", {"legacy": true}],
      "@babel/plugin-transform-class-static-block",
      "babel-plugin-transform-typescript-metadata",
      [
        "module-resolver",
        {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
          root: ["."],
        },
      ],
    ],
  };
};

