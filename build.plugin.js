const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = ({onGetWebpackConfig, context}) => {
  onGetWebpackConfig((config) => {
    config.resolve.plugin('tsconfigpaths').use(TsconfigPathsPlugin, [{
      configFile: './tsconfig.json',
    }]);

    config.merge({
      node: {fs: 'empty'}
    });

    config
      .plugin('index')
      .use(HtmlWebpackPlugin, [
        {
          inject: true,
          minify: false,
          template: require.resolve('./public/index.html'),
          filename: `index.html`,
        },
      ]);

    config
      .plugin('DefinePlugin')
      .use(webpack.DefinePlugin, [
        {
          'process.env': JSON.stringify(process.env)
        }
      ]);
    config.devServer.proxy({
      '/statics': {
        target: '/',
        secure: false,
        pathRewrite: {
          '^/api': ''
        },
        cookiePathRewrite: {
          '*': '/'
        },
        changeOrigin: true
      },
      '/api': {
        target: 'http://158.1.3.146:8065',
        secure: false,
        pathRewrite: {
          '^/api': ''
        },
        cookiePathRewrite: {
          '*': '/'
        },
        changeOrigin: true
      },
    })
  });
};
