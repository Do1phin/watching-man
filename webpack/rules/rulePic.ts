import webpack from 'webpack';

export const rulePic: webpack.RuleSetRule = {
  generator: {
    filename: './images/[name][query][ext]',
  },
  test: /\.(jpg|png|svg|jpeg)$/i,
  type: 'asset/resource',
};
