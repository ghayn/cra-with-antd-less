const CracoLessPlugin = require("craco-less");

module.exports = {
  babel: {
    plugins: [
      ["@babel/plugin-proposal-decorators", { "legacy": true, }],
      ['import', { libraryName: 'antd', style: 'css' }]
    ],
  },
  plugins: [{
    plugin: CracoLessPlugin,
    options: {
      cssLoaderOptions: {
        modules: true,
        localIdentName: "[local]_[hash:base64:5]"
      }
    }
  }]
};
