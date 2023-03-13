module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    // 'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'plugin:svelte/prettier',
    'plugin:prettier/recommended'
  ],
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
    project: ['./tsconfig.eslint.json', 'apps/*/tsconfig.json', 'packages/*/tsconfig.json']
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  globals: {
    NodeJS: true
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.cjs', '.js', '.ts', '.svelte']
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }]
  }
};
