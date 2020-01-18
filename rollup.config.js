import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default {
  input: './lib/main.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    name: 'React'
    // plugins: [terser()]
  },
  plugins: [resolve(), commonjs()]
}
