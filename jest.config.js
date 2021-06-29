module.exports = {
  // collectCoverage: true,
  collectCoverageFrom: ['src/**/*'],
  verbose: true,
  testRegex: ['__tests__/node/.*.js'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {resources: 'usable'},
  testTimeout: 10_000,
}
