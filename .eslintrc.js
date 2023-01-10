module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'import/order': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    'no-empty-function': 'off',
  },
}
