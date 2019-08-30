module.exports = {
  // collectCoverage: true,
  collectCoverageFrom: ['src/**/*'],
  verbose: true,
  testRegex: ['__tests__/node/.*.js'],
  testEnvironment: 'jest-environment-jsdom-fourteen',
  testEnvironmentOptions: {resources: 'usable'},
}
