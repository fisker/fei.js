module.exports = {
  assumptions: {setSpreadProperties: true, iterableIsArray: true},
  exclude: [/\/core-js\//],
  presets: [
    [
      '@babel/env',
      {
        debug: true,
        exclude: ['transform-typeof-symbol', 'transform-async-to-generator'],
        // useBuiltIns: 'usage',
        // corejs: 3,
        modules: false,
      },
    ],
  ],
  plugins: ['babel-plugin-transform-async-to-promises'],
  env: {
    test: {
      presets: [
        [
          '@babel/env',
          {
            // debug: true,
            exclude: [
              'transform-typeof-symbol',
              'transform-async-to-generator',
            ],
          },
        ],
      ],
    },
  },
}
