import * as webpack from 'webpack';

import { ruleBabel } from './rules/ruleBabel';
import { ruleHtml } from './rules/ruleHtml';
import { pluginHtml } from './plugins/pluginHtml';
import { rulePic } from './rules/rulePic';
import { ruleCss } from './rules/ruleCss';

const config: webpack.Configuration = {
  mode: 'development',
  entry: {
    index: './src/index.tsx',
  },
  output: {
    publicPath: 'dist',
    filename: '[name].[contenthash:8].js',
    clean: true,
  },
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  // devServer: {
  //   host: '0.0.0.0',
  //   port: 80,
  // },
  module: {
    rules: [ruleBabel, ruleHtml, rulePic, ruleCss],
  },
  plugins: [pluginHtml],
};

export default config;
