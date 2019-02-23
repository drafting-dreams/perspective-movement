const resolve = require('rollup-plugin-node-resolve')
const uglify = require('rollup-plugin-uglify')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const pkg = require('./package.json')

const input = 'index.js'

export default [
  {
    input,
    output: {
      file: pkg.browserV2,
      name: 'PM',
      format: 'umd'
    },
    plugins: [
      commonjs(),
      resolve(),
      babel({
        exclude: ['node_modules/**']
      }),
      uglify.uglify()
    ]
  },
  {
    input,
    external: Object.keys(pkg.dependencies),
    output: [
      { file: pkg.mainV2, format: 'cjs' },
      { file: pkg.moduleV2, format: 'es' }
    ]
  }
]
