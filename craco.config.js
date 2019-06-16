const CracoLessPlugin = require("craco-less");

const theme = {
  'primary-color': '#1DA57A',
}

module.exports = {
  babel: {
    plugins: [
      ["@babel/plugin-proposal-decorators", { "legacy": true, }],
      ['import', { libraryName: 'antd', style: true }],
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          javascriptEnabled: true,
          modifyVars: {
            ...theme,
          },
        },
      },
    },
    {
      plugin: CracoLessPlugin,
      options: {
        modifyLessRule: function(lessRule, _context) {
          lessRule.test = /\.(module)\.(less)$/;
          lessRule.exclude = /node_modules/;

          return lessRule;
        },
        lessLoaderOptions: {
          javascriptEnabled: true,
          modifyVars: {
            ...theme,
          },
        },
        cssLoaderOptions: {
          modules: true,
          localIdentName: "[local]_[hash:base64:5]",
        }
      }
    }
  ]
};
