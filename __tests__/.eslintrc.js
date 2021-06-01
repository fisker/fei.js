/*!
 * config file for `eslint`
 *
 * update: wget -O .eslintrc.js https://git.io/fjJKA
 * document: https://eslint.org/docs/user-guide/configuring
 */

/* eslint-config-fisker https://git.io/fjJKy */

module.exports = {
  root: true,
  parserOptions: {},
  extends: ['@fisker', '@fisker/jest'],
  settings: {},
  rules: {
    'unicorn/prefer-node-protocol': 'off',
  },
  plugins: [],
  globals: {
    window: true,
  },
}
