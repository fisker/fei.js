module.exports = {
  entry: '__tests__/browser/index.js',
  publicFolder: '__tests__',
  output: {
    dir: 'docs',
  },
  devServer: {
    open: true,
    port: 5002,
  },
}
