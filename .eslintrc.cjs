/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  overrides: [
    {
      files: [
        'cypress/support/**/*.js',
        'cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}',
        'src/components/__test__/**.{cy,spec}.{js,ts,jsx,tsx}',
      ],
      extends: ['plugin:cypress/recommended'],
    },
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}
