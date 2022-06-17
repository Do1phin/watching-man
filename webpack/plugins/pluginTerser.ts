import webpack from 'webpack';
const TerserPlugin = require('terser-webpack-plugin');

export const pluginTerser: webpack.DefinePlugin = new TerserPlugin({
  exclude: /\/node_modules/,
  extractComments: true,
  include: /\/src/,
  minify: TerserPlugin.uglifyJsMinify,
  parallel: true,
  test: /\.(ts|tsx|js|jsx)$/i,
});
