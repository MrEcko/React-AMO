module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    'jest/globals': true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/strict'
  ],
  globals: {
    __dirname: false,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      impliedStrict: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'jest'],
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2],
    quotes: ['warn', 'single'],
    'linebreak-style': ['error', 'unix'],
    'prettier/prettier': 'error',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/lowercase-name': 'warn',
    'jest/consistent-test-it': 'error',
    'jest/expect-expect': 'error',
    'jest/valid-expect': 'error',
    'jest/valid-describe': 'error',
    'jsx-a11y/label-has-for': [2, {
      'required': {
        'every': ['nesting', 'id']
      },
      'allowChildren': true
    }]
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
