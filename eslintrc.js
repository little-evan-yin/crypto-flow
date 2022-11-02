module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'react-hooks', 'eslint-plugin-react'],
  env: {
    browser: true,
    node: true
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true
    }
  },
  rules: {
    // 自定义的一些规则
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'error',
    'valid-typeof': [
      'warn',
      {
        requireStringLiterals: false
      }
    ]
  }
};
