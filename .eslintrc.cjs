module.exports = {
  root: true,
  env: { browser: true, es2020: true, 'jest/globals': true },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'prettier'
  ],
  ignorePatterns: ['**/*.scss'],
  parserOptions: {
    project: true
  },
  plugins: ['react-refresh'],
  rules: {
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/indent': 'off',
    'react/prop-types': 'off',
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
    indent: 'off',
    'multiline-ternary': 'off'
  },
  globals: {
    fetch: false
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
