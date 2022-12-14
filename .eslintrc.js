module.exports = { env: { browser: true,
  es2021: true },
extends: [
  'plugin:react/recommended',
  'airbnb',
],
overrides: [
],
parserOptions: { ecmaVersion: 'latest',
  sourceType: 'module' },
plugins: [
  'react',
],
rules: { 'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
  'react/prop-types': 0,
  'object-curly-newline': ['error', 'never'] } };
