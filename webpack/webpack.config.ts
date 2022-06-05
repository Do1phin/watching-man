import path from 'path';

import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { Configuration } from 'webpack';

import { ruleBabel } from './rules/ruleBabel';
import { ruleHtml } from './rules/ruleHtml';
import { pluginHtml } from './plugins/pluginHtml';
import { rulePic } from './rules/rulePic';
import { ruleCss } from './rules/ruleCss';

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
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'all',
          name: 'vendors',
          test: /node_modules/,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          maxSize: 250000,
          minChunks: 1,
          minSize: 30000,
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
  module: {
    rules: [ruleBabel, ruleHtml, rulePic, ruleCss],
  },
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
  plugins: [pluginHtml],
};

export default config;
