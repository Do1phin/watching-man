import webpack from 'webpack';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

export const pluginBundleAnalyzer: webpack.DefinePlugin = new BundleAnalyzerPlugin({
  analyzerHost: '127.0.0.1',
  analyzerMode: 'server',
  analyzerPort: 8888,
  defaultSizes: 'parsed',
  openAnalyzer: false,
  reportFilename: 'report.html',
});
