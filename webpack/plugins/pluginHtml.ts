import webpack from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');

export const pluginHtml: webpack.DefinePlugin = new HtmlWebpackPlugin({
  inject: 'body',
  template: 'public/index.html',
  // filename:'index.html',
  // chunks:['main'],
});
