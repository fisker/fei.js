module.exports = {
  // collectCoverage: true,
  collectCoverageFrom: ['src/**/*'],
  verbose: true,
  testRegex: ['__tests__/node/.*.js'],
  testEnvironment: 'jest-environment-jsdom-fifteen',
  testEnvironmentOptions: {resources: 'usable'},
}
