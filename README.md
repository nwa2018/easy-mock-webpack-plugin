# easy-mock-webpack-plugin
easy mock data with easy config, support customize middleware, support for webpack plugin.And it's easy integrated to your cli or workflow, what you have to do is just to `write some config`, and it can be `reload automatic`

### install
```
npm i easy-mock-webpack-plugin
```

### use
```
const path = require('path')
const EasyMockWebpackPlugin = require('easy-mock-webpack-plugin')

new EasyMockWebpackPlugin({
  path: path.resolve(__dirname, 'xxxx.js')
})
```

what you should to do is to write the config file 'xxxx.js', you can see a demo in current demo directory(please update the node to 8.x+ version), and more details in [there](https://github.com/nwa2018/easy-config-mock)

### issues
-----------
feel free to open an issue when you encounter problems, [issue list](https://github.com/nwa2018/easy-mock-webpack-plugin/issues)
