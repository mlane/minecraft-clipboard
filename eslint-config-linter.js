module.exports = {
  rules: {
    'eol-last': ['error', 'always'],
    semi: [2, 'never'],
    'comma-dangle': ['error', 'only-multiline'],
    'jsx-quotes': ['error', 'prefer-single'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-trailing-spaces': 'error',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 0,
    'react/jsx-curly-brace-presence': [2, 'never'],
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: ['key'],
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'src/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
  },
}
