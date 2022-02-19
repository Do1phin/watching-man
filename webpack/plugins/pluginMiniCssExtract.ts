import * as webpack from 'webpack';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export const pluginMiniCssExtract: webpack.DefinePlugin = new MiniCssExtractPlugin({
  filename: '[name].[contenthash].css',
});
