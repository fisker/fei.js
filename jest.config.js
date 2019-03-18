module.exports = {
  verbose: true,
  testRegex: ['__tests__/.*.spec.js$'],
  testEnvironment: 'jest-environment-jsdom-thirteen',
  testEnvironmentOptions: {resources: 'usable'},
}
