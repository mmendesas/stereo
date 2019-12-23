const path = require('path')
const withTranspileModules = require('next-plugin-transpile-modules');

module.exports = withTranspileModules({
  transpileModules: ['@stereo']
})