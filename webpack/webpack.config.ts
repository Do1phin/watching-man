import path from 'path';

import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import type { Configuration } from 'webpack';

import { ruleBabel } from './rules/ruleBabel';
import { ruleHtml } from './rules/ruleHtml';
import { pluginHtml } from './plugins/pluginHtml';
import { rulePic } from './rules/rulePic';
import { ruleCss } from './rules/ruleCss';

const config: Configuration | DevServerConfiguration = {
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].[contenthash:8].js',
    chunkFilename: 'js/[name].[contenthash:8].chunk.js',
    clean: true,
  },
  performance: {
    hints: false,
  },
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    port: 9000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
  },
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        // pathRewrite: {"^/api/graphql" : ""},
        secure: false,
      }
    }
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
    alias: {
      components: path.resolve(__dirname, './src/components/'),
      pages: path.resolve(__dirname, './src/pages/'),
      layouts: path.resolve(__dirname, './src/layouts/'),
      images: path.resolve(__dirname, './public/images/'),
      styles: path.resolve(__dirname, './public/styles/'),
      locales: path.resolve(__dirname, './public/locales/'),
    },
  },
  module: {
    rules: [ruleBabel, ruleHtml, rulePic, ruleCss],
  },
  plugins: [pluginHtml],
};

export default config;
