import webpack from 'webpack';

export const rulePic: webpack.RuleSetRule = {
  test: /\.(jpg|png|svg|jpeg)$/i,
  type: 'asset/resource',
  generator: {
    filename: './dist/[name][query][ext]',
  },
};
