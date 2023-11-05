module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    '@react-native',
  ],
  ignorePatterns: ['babel.config.js', 'metro.config.js', 'webpack.config.js'],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}, {usePrettierrc: true}],
  },
};
