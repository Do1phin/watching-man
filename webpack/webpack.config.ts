import webpack from 'webpack';
const { resolve } = require('path');

import { ruleBabel } from './rules/ruleBabel';
import { ruleHtml } from './rules/ruleHtml';
import { pluginHtml } from './plugins/pluginHtml';
import { rulePic } from './rules/rulePic';
import { ruleCss } from './rules/ruleCss';

const config: webpack.Configuration = {
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].[contenthash:8].chunk.js',
    clean: true,
  },
  performance: {
    hints: false,
  },
  devtool: 'inline-source-map',
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          minSize: 30000,
          maxSize: 250000,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
        },
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [ruleBabel, ruleHtml, rulePic, ruleCss],
  },
  plugins: [pluginHtml],
};

export default config;
