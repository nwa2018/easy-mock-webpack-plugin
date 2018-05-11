const easyConfigMock = require('easy-config-mock')

const pluginName = 'easy-mock-webpack-plugin'

function EasyMockWebpackPlugin (options) {
  this.options = options
}

EasyMockWebpackPlugin.prototype.apply = function (compiler) {
  const hooks = compiler.hooks

  const compile = () => {
    easyConfigMock(this.options)
  }
  if (hooks) {
    hooks.compile.tap(pluginName, compile)
  } else {
    compiler.plugin("compile", compile)
  }
}

module.exports = EasyMockWebpackPlugin
