import * as webpack from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');

export const pluginHtml: webpack.DefinePlugin = new HtmlWebpackPlugin({
  template: './public/index.html',
});
