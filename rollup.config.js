import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import {terser} from 'rollup-plugin-terser'

const plugins = [resolve(), cjs(), babel(), filesize()]

const minify = [...plugins, terser()]

const moduleName = 'fei'

const builds = {
  input: 'src/index.js',
  output: [
    // umd build
    {
      file: 'lib/index.js',
      format: 'umd',
      name: moduleName,
      sourcemap: true,
    },
    // esm build
    {
      file: 'lib/index.mjs',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins,
}

const minifiedBuilds = {
  ...builds,
  output: builds.output.map(config => ({
    ...config,
    file: config.file.replace(/(\.m?js)$/, '.min$1'),
  })),
  plugins: minify,
}

export default [builds, minifiedBuilds]
