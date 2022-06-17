import * as path from 'path';

import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { Configuration } from 'webpack';

import { ruleBabel } from './rules/ruleBabel';
import { ruleHtml } from './rules/ruleHtml';
import { rulePic } from './rules/rulePic';
import { ruleCss } from './rules/ruleCss';
import { pluginHtml } from './plugins/pluginHtml';
import { pluginTerser } from './plugins/pluginTerser';
import { pluginMiniCssExtract } from './plugins/pluginMiniCssExtract';
import { pluginBundleAnalyzer } from './plugins/pluginBundleAnalyzer';

const config: Configuration | DevServerConfiguration = {
  devServer: {
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    host: 'localhost',
    port: 9000,
    proxy: {
      '/api': {
        secure: false,
        // pathRewrite: {"^/api/graphql" : ""},
        target: 'http://localhost:8080',
      },
    },
  },
  devtool: 'inline-source-map',
  entry: {
    index: './src/index.tsx',
  },
  module: {
    rules: [ruleBabel, ruleHtml, rulePic, ruleCss],
  },
  optimization: {
    minimize: true,
    minimizer: [pluginTerser],
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          maxSize: 250000,
          minChunks: 1,
          minSize: 30000,
          name: 'vendors',
          test: /node_modules/,
        },
      },
    },
  },
  output: {
    chunkFilename: 'js/[name].[contenthash:8].chunk.js',
    clean: true,
    filename: 'js/[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  performance: {
    hints: false,
  },
  plugins: [pluginHtml, pluginMiniCssExtract, pluginBundleAnalyzer],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components/'),
      images: path.resolve(__dirname, './public/images/'),
      layouts: path.resolve(__dirname, './src/layouts/'),
      locales: path.resolve(__dirname, './public/locales/'),
      pages: path.resolve(__dirname, './src/pages/'),
      styles: path.resolve(__dirname, './public/styles/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};

export default config;
