import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ),
  ...compat.plugins('@typescript-eslint'),
  pluginJs.configs.recommended,
  {
    rules: {
      '@next/next/no-css-tags': 'off',
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-undef': 'off',
    },
  },
]

export default eslintConfig
