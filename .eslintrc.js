module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'prefer-const': 'off',
    'no-restricted-syntax': 'off',
    'react/prop-types': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'import/extensions': ['error', {
      jsx: 'always',
    }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
      },
    },
  },
};
