module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
,      
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn"],
      "react/prop-types": "off" // Not needed with TypeScript

      // Add other rules as needed
    },
    plugins: [
      'react',
      '@typescript-eslint'
    ]
  };