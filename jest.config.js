module.exports = {
  // collectCoverage: true,
  collectCoverageFrom: ['src/**/*'],
  verbose: true,
  testRegex: ['__tests__/.*.spec.js$'],
  testEnvironment: 'jest-environment-jsdom-thirteen',
  testEnvironmentOptions: {resources: 'usable'},
}
