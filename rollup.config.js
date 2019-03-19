import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'

import {main, module} from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: main,
      format: 'umd',
      name: 'fei',
    },
    {
      file: module,
      format: 'esm',
    },
  ],
  plugins: [resolve(), cjs(), babel(), filesize()],
}
